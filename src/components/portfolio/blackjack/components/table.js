import React, { useState, useEffect } from 'react'
import Notifications, { notify } from 'react-notify-toast';
import { useStyles } from '../../../../style/style'
import { playerChangeSuite, dealerChangeSuite } from './suiteHandler'
import { NavLink } from 'react-router-dom';

import PlayerHand from './playerHand'
import DealerHand from './dealerHand'


function Table() {
    const classes = useStyles()
    const [playerHandState, setPlayerHandState] = useState([])
    const [dealerHandState, setDealerHandState] = useState([])
    const [playerScore, setPlayerScore] = useState([])
    const [dealerScore, setDealerScore] = useState([])
    const [deckInPlay, setDeckInPlay] = useState([])

    let suites = ['hearts', 'diamonds', 'clubs', 'spades']
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    let deck = []
    let playerStayFlag = false

    class Card {
        constructor(rank, suite) {
            this.rank = rank;
            this.suite = suite;
        }
    }

    const newGame = () => {
        deck = []
        let i;
        let j;
        for (i = 0; i < ranks.length; i++) {
            for (j = 0; j < suites.length; j++) {
                deck.push(new Card(ranks[i], suites[j]))
            }
        }
        setDeckInPlay(deck)
    }

    const deal = () => {
        newGame()
        let dealerHand = [];
        let playerHand = [];
        let randomIndex;
        let currCard;

        randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
        currCard = deck[randomIndex]
        playerHand.push(currCard)
        deck = deck.filter(item => item !== deck[randomIndex])

        randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
        currCard = deck[randomIndex]
        playerHand.push(currCard)
        deck = deck.filter(item => item !== deck[randomIndex])

        randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
        currCard = deck[randomIndex]
        dealerHand.push(currCard)
        deck = deck.filter(item => item !== deck[randomIndex])

        randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
        currCard = deck[randomIndex]
        dealerHand.push(currCard)
        deck = deck.filter(item => item !== deck[randomIndex])

        setPlayerHandState(playerHand)
        setDealerHandState(dealerHand)
        setDeckInPlay(deck)
        checkPoints()
    }



    const playerHit = () => {
        try {
            deck = deckInPlay
            let randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
            let tempHand = playerHandState
            tempHand.push(deck[randomIndex])
            deck = deck.filter(item => item !== deck[randomIndex])
            setDeckInPlay(deck)
            setPlayerHandState(tempHand)
            checkPoints()
        } catch { void 0 }
    }

    const dealerHit = () => {
        try {
            deck = deckInPlay;
            let randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
            let tempHand = dealerHandState;
            tempHand.push(deck[randomIndex])
            deck.pop(randomIndex)
            setDeckInPlay(deck)
            setDealerHandState(tempHand)
            checkPoints()
        } catch { void 0 }
    }

    const checkPoints = () => {
        setPlayerScore(0)
        setDealerScore(0)
        let playerHandSize = playerHandState.length
        let dealerHandSize = dealerHandState.length
        let i;
        let playerTempScore = 0
        let dealerTempScore = 0
        try {
            for (i = 0; i < playerHandSize; i++) {
                if (playerHandState[i].rank === '2') { playerTempScore += 2 }
                else if (playerHandState[i].rank === '3') { playerTempScore += 3 }
                else if (playerHandState[i].rank === '4') { playerTempScore += 4 }
                else if (playerHandState[i].rank === '5') { playerTempScore += 5 }
                else if (playerHandState[i].rank === '6') { playerTempScore += 6 }
                else if (playerHandState[i].rank === '7') { playerTempScore += 7 }
                else if (playerHandState[i].rank === '8') { playerTempScore += 8 }
                else if (playerHandState[i].rank === '9') { playerTempScore += 9 }
                else if (playerHandState[i].rank === 'A') { playerTempScore += 11; }
                else if (playerHandState[i].rank === '10' || 'J' || 'Q' || 'K') { playerTempScore += 10; }
                setPlayerScore(playerTempScore)
            }

            for (i = 0; i < dealerHandSize; i++) {
                if (dealerHandState[i].rank === '2') { dealerTempScore += 2 }
                else if (dealerHandState[i].rank === '3') { dealerTempScore += 3 }
                else if (dealerHandState[i].rank === '4') { dealerTempScore += 4 }
                else if (dealerHandState[i].rank === '5') { dealerTempScore += 5 }
                else if (dealerHandState[i].rank === '6') { dealerTempScore += 6 }
                else if (dealerHandState[i].rank === '7') { dealerTempScore += 7 }
                else if (dealerHandState[i].rank === '8') { dealerTempScore += 8 }
                else if (dealerHandState[i].rank === '9') { dealerTempScore += 9 }
                else if (dealerHandState[i].rank === 'A') { dealerTempScore += 11 }
                else if (dealerHandState[i].rank === '10' || 'J' || 'Q' || 'K') { dealerTempScore += 10; }
                setDealerScore(dealerTempScore)
            }
        } catch { return null }

        const bust = () => {
            if (playerScore > 21) {
                let bustColor = { background: '#FFFFFF', text: "#FF205D" };
                notify.show('You Busted!', "custom", '1000', bustColor)
            } if (playerHandSize < 3) {
                notify.hide()
            }
        }

        bust()
    }

    const endConditions = () => {
        let winColor = { background: '#FFFFFF', text: "#FF205D" };
        let loseColor = { background: '#FFFFFF', text: "#FF205D" };

        if (dealerScore > 21) {
            notify.show('Winner Winner!', "custom", '1000', winColor)
        } else if (playerScore > dealerScore) {
            notify.show('Winner Winner!', "custom", '1000', winColor)
        } else if (playerScore < dealerScore) {
            notify.show('You lose! Deal Again...', "custom", '1000', loseColor)
        } else if (dealerScore === 21) {
            notify.show('You lose! Deal Again...', "custom", '1000', loseColor)
        } else if (playerScore === dealerScore) {
            notify.show('Draw! Deal again', "custom", '1000', loseColor)
        }
    }


    const dealerAI = () => {
        while (true) {
            if (dealerScore < 17) {
                dealerHit()
                return true
            } else { return false }
        }
    }

    let isDisabledFlag
    const isDisabled = () => {
        isDisabledFlag = false
    }

    const playerStay = (playerStayFlag) => {
        playerStayFlag = true
        dealerAI()
        endConditions()
    }


    useEffect(() => {
        // circularText("BLACKJACK", 500, 0);
        // function circularText(txt, radius, classIndex) {
        //     txt = txt.split("");
        //     classIndex = document.getElementsByClassName("circTxt")[classIndex];
        //     var deg = 60 / txt.length,
        //         origin = -27;
        //     txt.forEach((ea) => {
        //         ea = `<p style='font-size: 45px;height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%;'>${ea}</p>`;
        //         classIndex.innerHTML += ea;
        //         origin += deg;
        //     });
        // }
        if (playerHandState.length > 2) {
            playerChangeSuite({ playerHandState })
        }
        if (dealerHandState.length > 2) {
            dealerChangeSuite({ dealerHandState })
        }
        if (playerHandState.length < 2) {
            isDisabled()
        }
        checkPoints()

    });



    return (
        <div>
            <Notifications options={{ top: '80%', timeout: '20000', animationDuration: '500' }} />

            <div className={classes.bjTable}>
                <div className="" id='container'>
                    <div className={classes.header} style={{margin:'0 0 -10px 0',position:'relative',fontSize: '40px',fontVariant:'small-caps'}}>
                        blackjack.js
                    </div>
                </div>

                {/* Dealer Area */}
                <div className={classes.dealerArea}>
                    <DealerHand playerStayFlag={playerStayFlag} dealerHandState={dealerHandState} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', wiidth: '50%' }}>
                    <div style={{ color: 'white', margin: '0 0 -10px' }}>Dealer Has &nbsp;</div>
                    <div className={classes.pScore}>{dealerScore}</div>
                </div>

                <div className={classes.bjControls}>
                    <NavLink to="/home" className={classes.bjExitButton}> Exit </NavLink>
                </div>

                <div className={classes.bjControls}>
                    <div className={classes.bjButtonLeft}>
                        <button className={classes.bjButton} onClick={deal}> Deal </button>
                    </div>
                    <div className={classes.bjButtonMiddle}>
                        <button className={classes.bjButton} onClick={playerHit}>Hit</button>
                    </div>
                    <div className={classes.bjButtonRight}>
                        <button className={classes.bjButton} onClick={playerStay}>Stay</button>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', wiidth: '50%' }}>
                    <div style={{ color: 'white', margin: '0 0 -10px' }}>Player Has &nbsp;</div>
                    <div className={classes.pScore}>{playerScore}</div>
                </div>

                {/* Player Area */}

                <div className={classes.playerArea}>
                    <div className={classes.player}>
                        <PlayerHand playerHandState={playerHandState} />
                    </div>

                </div>

            </div>


        </div >
    )
}

export default Table