import React, { useState } from 'react'
import { useStyles } from '../../../../style/style'
import club from '../static/club.svg'
import spade from '../static/spade.svg'
import diamond from '../static/diamond.svg'
import heart from '../static/heart.svg'
import './style.css'

// import Player from './player'
// import Dealer from './dealer'

export default function Table() {
    const classes = useStyles()
    const [playerHandState, setPlayerHandState] = useState({ Card: { rank: '', suite: '' } })
    const [dealerHandState, setDealerHandState] = useState({ Card: { rank: '', suite: '' } })
    const [playerScore, setPlayerScore] = useState([])
    const [dealerScore, setDealerScore] = useState([])
    const [deckInPlay, setDeckInPlay] = useState([])
    const [handsInPlay, setHandsInPlay] = useState([])

    let suites = ['hearts', 'diamonds', 'clubs', 'spades']
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a']

    let deck = []

    class Card {
        constructor(rank, suite) {
            this.rank = rank;
            this.suite = suite;
        }
    }

    class Player {
        constructor(hand, score){
        this.hand = hand
        this.score = score
        }
    }
    
    const heartQS = document.querySelectorAll('.heart')
    const diamondQS = document.querySelectorAll('.diamond')
    const clubQS = document.querySelectorAll('.club')
    const spadeQS = document.querySelectorAll('.spade')

    const dealerShowHeart = () => {
        let i;
        for (i = 0; i < dealerHandState.length; i++) {
            if (dealerHandState[i].suite === 'hearts') {
                try { heartQS[i].style.display = 'flex' } catch { break; }
                try { diamondQS[i].style.display = 'none' } catch { break; }
                try { clubQS[i].style.display = 'none' } catch { break; }
                try { spadeQS[i].style.display = 'none' } catch { break; }
            }
        }
    }

    const dealerHideHeart = () => {
        let i;
        for (i = 0; i < dealerHandState.length; i++) {
            if (!dealerHandState[i]) { break; }
            else if (dealerHandState[i].suite !== 'hearts') {
                try { heartQS[i].style.display = 'none' } catch { break; }
            }
        }
    }

    const dealerShowDiamond = () => {
        let i;
        for (i = 0; i < dealerHandState.length; i++) {
            if (dealerHandState[i].suite === 'diamonds') {
                try { heartQS[i].style.display = 'none' } catch { break; }
                try { diamondQS[i].style.display = 'flex' } catch { break; }
                try { clubQS[i].style.display = 'none' } catch { break; }
                try { spadeQS[i].style.display = 'none' } catch { break; }
            }
        }
    }

    const dealerHideDiamond = () => {
        let i;
        for (i = 0; i < dealerHandState.length; i++) {
            if (!dealerHandState[i]) { break; }
            else if (dealerHandState[i].suite !== 'diamonds') {
                try { diamondQS[i].style.display = 'none' } catch { break; }
            }
        }
    }

    const dealerShowSpade = () => {
        let i;
        for (i = 0; i < dealerHandState.length; i++) {
            if (dealerHandState[i].suite === 'spades') {
                try { heartQS[i].style.display = 'none' } catch { break; }
                try { diamondQS[i].style.display = 'none' } catch { break; }
                try { clubQS[i].style.display = 'none' } catch { break; }
                try { spadeQS[i].style.display = 'flex' } catch { break; }
            }
        }
    }

    const dealerHideSpade = () => {
        let i;
        for (i = 0; i < dealerHandState.length; i++) {
            if (!dealerHandState[i]) { break; }
            else if (dealerHandState[i].suite !== 'spades') {
                try { spadeQS[i].style.display = 'none' } catch { break; }
            }
        }
    }
    const dealerShowClub = () => {
        let i;
        for (i = 0; i < dealerHandState.length; i++) {
            if (dealerHandState[i].suite === 'clubs') {
                try { heartQS[i].style.display = 'none' } catch { break; }
                try { diamondQS[i].style.display = 'none' } catch { break; }
                try { clubQS[i].style.display = 'flex' } catch { break; }
                try { spadeQS[i].style.display = 'none' } catch { break; }
            }
        }

    }

    const dealerHideClub = () => {
        let i;
        for (i = 0; i < dealerHandState.length; i++) {
            if (!dealerHandState[i]) { break; }
            else if (dealerHandState[0].suite !== 'clubs') {
                try { clubQS[i].style.display = 'none' } catch { break; }
            }
        }
    }

    const pHeartQS = document.querySelectorAll('.player-heart')
    const pDiamondQS = document.querySelectorAll('.player-diamond')
    const pClubQS = document.querySelectorAll('.player-club')
    const pSpadeQS = document.querySelectorAll('.player-spade')

    const playerShowHeart = () => {
        let i;
        for (i = 0; i < playerHandState.length; i++) {
            if (playerHandState[i].suite === 'hearts') {
                try { pHeartQS[i].style.display = 'flex' } catch { break; }
                try { pDiamondQS[i].style.display = 'none' } catch { break; }
                try { pClubQS[i].style.display = 'none' } catch { break; }
                try { pSpadeQS[i].style.display = 'none' } catch { break; }
            }
        }
    }


    const hideHeartPlayer = () => {
        let i;
        for (i = 0; i < playerHandState.length; i++) {
            if (!playerHandState[i]) { break; }
            else if (playerHandState[i].suite !== 'hearts') {
                try { pHeartQS[i].style.display = 'none' } catch { break; }
            }
        }
    }

    const showDiamondPlayer = () => {
        let i;
        for (i = 0; i < playerHandState.length; i++) {
            if (playerHandState[i].suite === 'diamonds') {
                try { pHeartQS[i].style.display = 'none' } catch { break; }
                try { pDiamondQS[i].style.display = 'flex' } catch { break; }
                try { pClubQS[i].style.display = 'none' } catch { break; }
                try { pSpadeQS[i].style.display = 'none' } catch { break; }
            }
        }
    }

    const hideDiamondPlayer = () => {
        let i;
        for (i = 0; i < playerHandState.length; i++) {
            if (!playerHandState[i]) { break; }
            else if (playerHandState[i].suite !== 'diamonds') {
                try { pDiamondQS[i].style.display = 'none' } catch { break; }
            }
        }
    }

    const showSpadePlayer = () => {
        let i;
        for (i = 0; i < playerHandState.length; i++) {
            if (playerHandState[i].suite === 'spades') {
                try { pHeartQS[i].style.display = 'none' } catch { break; }
                try { pDiamondQS[i].style.display = 'none' } catch { break; }
                try { pClubQS[i].style.display = 'none' } catch { break; }
                try { pSpadeQS[i].style.display = 'flex' } catch { break; }
            }
        }
    }

    const hideSpadePlayer = () => {
        let i;
        for (i = 0; i < playerHandState.length; i++) {
            if (!playerHandState[i]) { break; }
            else if (playerHandState[i].suite !== 'spades') {
                try { pSpadeQS[i].style.display = 'none' } catch { break; }
            }
        }
    }

    const showClubPlayer = () => {
        let i;
        for (i = 0; i < playerHandState.length; i++) {
            if (playerHandState[i].suite === 'clubs') {
                try { pHeartQS[i].style.display = 'none' } catch { break; }
                try { pDiamondQS[i].style.display = 'none' } catch { break; }
                try { pClubQS[i].style.display = 'flex' } catch { break; }
                try { pSpadeQS[i].style.display = 'none' } catch { break; }
            }
        }
    }

    const hideClubPlayer = () => {
        let i;
        for (i = 0; i < playerHandState.length; i++) {
            if (!playerHandState[i]) { break; }
            else if (playerHandState[i].suite !== 'clubs') {
                try { pClubQS[i].style.display = 'none' } catch { break; }
            }
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

        randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
        playerHand.push(deck[randomIndex])
        deck = deck.filter(item => item !== deck[randomIndex])

        randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
        dealerHand.push(deck[randomIndex])
        deck = deck.filter(item => item !== deck[randomIndex])

        randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
        playerHand.push(deck[randomIndex])
        deck = deck.filter(item => item !== deck[randomIndex])

        randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
        dealerHand.push(deck[randomIndex])
        deck = deck.filter(item => item !== deck[randomIndex])

        setPlayerHandState(playerHand)
        setDealerHandState(dealerHand)
        checkPoints()
    }

    const playerHit = () => {
        deck = deckInPlay
        let randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
        let tempHand = playerHandState
        tempHand.push(deck[randomIndex])
        deck.pop(randomIndex)
        setDeckInPlay(deck)
        setPlayerHandState(tempHand)
    }

    const dealerHit = () => {
        deck = deckInPlay;
        let randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
        let tempHand = dealerHandState;
        tempHand.push(deck[randomIndex])
        deck.pop(randomIndex)
        setDeckInPlay(deck)
        setDealerHandState(tempHand)
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
            else if (playerHandState[i].rank === '10' || 'j' || 'q' || 'k') { playerTempScore += 10; }
            else if (playerHandState[i].rank === 'a') { playerTempScore += 11; }
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
            else if (dealerHandState[i].rank === '10' || 'j' || 'q' || 'k') { dealerTempScore += 10; }
            else if (dealerHandState[i].rank === 'a') { dealerTempScore += 11 }
            setDealerScore(dealerTempScore)
        }
    }
    document.addEventListener("DOMContentLoaded", function (event) {
        circularText("BLACKJACK", 500, 0);

        function circularText(txt, radius, classIndex) {

            txt = txt.split("")
            classIndex = document.getElementsByClassName("circTxt")[classIndex];

            var deg = 60 / txt.length,
                origin = -27;

            txt.forEach((ea) => {
                ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
                classIndex.innerHTML += ea;
                origin += deg;
            });
        }
    });


    return (
        <div>
            <div className="" id='container'>
                <div className="circTxt" id="test">
                </div>
            </div>
            <div className={classes.bjTable}>

                <div className={classes.dealerArea}>

                    <div className={classes.bjCard}>
                        <div className={classes.rankTL}>
                            {dealerHandState[0] ? dealerHandState[0].rank : '?'}
                        </div>

                        <div className={classes.suite}>
                            <div className='suite'>
                                {dealerHandState[0] ? dealerShowHeart() : dealerHideHeart()}
                                {dealerHandState[0] ? dealerShowDiamond() : dealerHideDiamond()}
                                {dealerHandState[0] ? dealerShowSpade() : dealerHideSpade()}
                                {dealerHandState[0] ? dealerShowClub() : dealerHideClub()}

                                <img className='club' alt='club' src={club} />
                                <img className='spade' alt='spade' src={spade} />
                                <img className='heart' alt='heart' src={heart} />
                                <img className='diamond' alt='diamond' src={diamond} />
                            </div>
                        </div>

                        <div className={classes.rankBR}>
                            {dealerHandState[0] ? dealerHandState[0].rank : '?'}
                        </div>
                    </div>

                    <div className={classes.bjCard}>
                        <div className={classes.rankTL}>
                            {dealerHandState[1] ? dealerHandState[1].rank : '?'}
                        </div>

                        <div className={classes.suite}>
                            <div className='suite'>
                                {dealerHandState[1] ? dealerShowHeart() : dealerHideHeart()}
                                {dealerHandState[1] ? dealerShowDiamond() : dealerHideDiamond()}
                                {dealerHandState[1] ? dealerShowSpade() : dealerHideSpade()}
                                {dealerHandState[1] ? dealerShowClub() : dealerHideClub()}

                                <img className='club' alt='club' src={club} />
                                <img className='spade' alt='spade' src={spade} />
                                <img className='heart' alt='heart' src={heart} />
                                <img className='diamond' alt='diamond' src={diamond} />
                            </div>
                        </div>

                        <div className={classes.rankBR}>
                            {dealerHandState[1] ? dealerHandState[1].rank : '?'}
                        </div>
                    </div>
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
                        <div className={classes.bjCard}>
                            <div className={classes.rankTL}>
                                {playerHandState[0] ? playerHandState[0].rank : '?'}
                            </div>
                            <div className={classes.suite}>
                                <div className='suite'>
                                    {playerHandState[0] ? playerShowHeart() : hideHeartPlayer()}
                                    {playerHandState[0] ? showDiamondPlayer() : hideDiamondPlayer()}
                                    {playerHandState[0] ? showSpadePlayer() : hideSpadePlayer()}
                                    {playerHandState[0] ? showClubPlayer() : hideClubPlayer()}

                                    <img className='player-club' alt='club' src={club} />
                                    <img className='player-spade' alt='spade' src={spade} />
                                    <img className='player-heart' alt='heart' src={heart} />
                                    <img className='player-diamond' alt='diamond' src={diamond} />
                                </div>
                            </div>
                            <div className={classes.rankBR}>
                                {playerHandState[0] ? playerHandState[0].rank : '?'}
                            </div>
                        </div>

                        <div className={classes.bjCard} >
                            <div className={classes.rankTL}>
                                {playerHandState[1] ? playerHandState[1].rank : '?'}
                            </div>
                            <div className={classes.suite}>
                                <div className='suite'>
                                    {playerHandState[1] ? playerShowHeart() : hideHeartPlayer()}
                                    {playerHandState[1] ? showDiamondPlayer() : hideDiamondPlayer()}
                                    {playerHandState[1] ? showSpadePlayer() : hideSpadePlayer()}
                                    {playerHandState[1] ? showClubPlayer() : hideClubPlayer()}

                                    <img className='player-club' alt='club' src={club} />
                                    <img className='player-spade' alt='spade' src={spade} />
                                    <img className='player-heart' alt='heart' src={heart} />
                                    <img className='player-diamond' alt='diamond' src={diamond} />
                                </div>
                            </div>
                            <div className={classes.rankBR}>
                                {playerHandState[1] ? playerHandState[1].rank : '?'}
                            </div>
                        </div>
                        {/* <Card /> */}
                    </div>
                </div>

            </div>
        </div >
    )
}