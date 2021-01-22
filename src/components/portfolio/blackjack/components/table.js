import React, { useState, useEffect } from 'react'
import { useStyles } from '../../../../style/style'
import './style.css'

import DealerCardOne from './cards/dealerCardOne'
import DealerCardTwo from './cards/dealerCardTwo'
import PlayerCardOne from './cards/playerCardOne'
import PlayerCardTwo from './cards/playerCardTwo'

export default function Table() {
    const classes = useStyles()
    const [playerHandState, setPlayerHandState] = useState({ Card: { rank: '', suite: '' } })
    const [dealerHandState, setDealerHandState] = useState({ Card: { rank: '', suite: '' } })
    const [playerScore, setPlayerScore] = useState([])
    const [dealerScore, setDealerScore] = useState([])
    const [deckInPlay, setDeckInPlay] = useState([])

    let suites = ['hearts', 'diamonds', 'clubs', 'spades']
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    let deck = []

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
        checkPoints()
    }

    const playerHit = () => {
        try {
            deck = deckInPlay
            let randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
            let tempHand = playerHandState
            tempHand.push(deck[randomIndex])
            deck.pop(randomIndex)
            setDeckInPlay(deck)
            setPlayerHandState(tempHand)
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
        } catch { void 0 }
    }

    const viewPlayerHand = () => {
        let handSize = playerHandState.length
        let i;
        for (i = 0; i < handSize; i++) {
            console.log(playerHandState[i])
        }
    }

    const viewDealerHand = () => {
        let handSize = dealerHandState.length
        let i;
        for (i = 0; i < handSize; i++) {
            console.log(dealerHandState[i])
        }
    }

    const viewHands = () => {
        console.log('__ DEALER HAND __')
        viewDealerHand();
        console.log('__ PLAYER HAND __')
        viewPlayerHand();
    }

    const checkPoints = () => {
        setPlayerScore(0)
        setDealerScore(0)
        let playerHandSize = playerHandState.length
        let dealerHandSize = dealerHandState.length
        let i;
        let playerTempScore = 0
        let dealerTempScore = 0

        for (i = 0; i < playerHandSize; i++) {
            if (playerHandState[i].rank === '2') { playerTempScore += 2 }
            else if (playerHandState[i].rank === '3') { playerTempScore += 3 }
            else if (playerHandState[i].rank === '4') { playerTempScore += 4 }
            else if (playerHandState[i].rank === '5') { playerTempScore += 5 }
            else if (playerHandState[i].rank === '6') { playerTempScore += 6 }
            else if (playerHandState[i].rank === '7') { playerTempScore += 7 }
            else if (playerHandState[i].rank === '8') { playerTempScore += 8 }
            else if (playerHandState[i].rank === '9') { playerTempScore += 9 }
            else if (playerHandState[i].rank === '10' || 'J' || 'Q' || 'K') { playerTempScore += 10; }
            else if (playerHandState[i].rank === 'A') { playerTempScore += 11; }
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
            else if (dealerHandState[i].rank === '10' || 'J' || 'Q' || 'K') { dealerTempScore += 10; }
            else if (dealerHandState[i].rank === 'A') { dealerTempScore += 11 }
            setDealerScore(dealerTempScore)
        }
    }

    useEffect(() => {
        circularText("BLACKJACK", 500, 0);
        function circularText(txt, radius, classIndex) {
            txt = txt.split("");
            classIndex = document.getElementsByClassName("circTxt")[classIndex];
            var deg = 60 / txt.length,
                origin = -27;
            txt.forEach((ea) => {
                ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
                classIndex.innerHTML += ea;
                origin += deg;
            });
        }
        checkPoints()
    });

    return (
        <div>
            <div className="" id='container'>
                <div className="circTxt" id="test">
                </div>
            </div>
            <div className={classes.bjTable}>

                {/* Dealer Area */}
                <div className={classes.dealerArea}>
                    <DealerCardOne dealerHandState={dealerHandState} />
                    <DealerCardTwo dealerHandState={dealerHandState} />
                </div>
                <div style={{ margin: '0 0 -10px' }}>Dealer Has</div>
                <div className={classes.pScore}>{dealerScore}</div>

                <div className={classes.controls}>
                    <button className={classes.shuffle} onClick={deal}> Deal Cards </button>
                    <button className={classes.shuffle} onClick={viewHands}>View Hands</button>
                    {/* <button className={classes.shuffle} onClick={suiteHandler}>Suite</button> */}
                    {/* <button className={classes.shuffle} onClick={viewDealerHand}>View Dealer</button> */}
                </div>

                <div className={classes.controls}>
                    <button className={classes.shuffle} onClick={dealerHit}>Dealer Hit</button>
                    <button className={classes.shuffle} onClick={playerHit}>Player Hit</button>
                    <button className={classes.shuffle} onClick={checkPoints}>Check Points</button>
                </div>
                <div style={{ margin: '0 0 -10px' }}>Player Has</div>
                <div className={classes.pScore}>{playerScore}</div>

                {/* Player Area */}
                <div className={classes.playerArea}>
                    <div className={classes.player}>
                        <PlayerCardOne playerHandState={playerHandState} />
                        <PlayerCardTwo playerHandState={playerHandState} />

                    </div>
                </div>

            </div>
        </div >
    )
}