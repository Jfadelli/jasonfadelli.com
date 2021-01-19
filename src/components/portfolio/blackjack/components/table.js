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
    const [hand, setHand] = useState({ Card: { rank: '', suite: '' } })
    const [dealerHandState, setDealerHandState] = useState({ Card: { rank: '', suite: '' } })
    const [playerScore, setPlayerScore] = useState([])
    const [dealerScore, setDealerScore] = useState([])
    const [deckInPlay, setDeckInPlay] = useState([])

    let suites = ['hearts', 'diamonds', 'clubs', 'spades']
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a']

    let deck = []
    let dealerHand = [];
    let playerHand = [];

    class Card {
        constructor(rank, suite) {
            this.rank = rank;
            this.suite = suite;
        }
    }



    const showHeart = () => {
        let i;
        for (i = 0; i < dealerHandState.length; i++) {
            const heartQS = document.querySelectorAll('.heart')[i]
            const diamondQS = document.querySelectorAll('.diamond')[i]
            const clubQS = document.querySelectorAll('.club')[i]
            const spadeQS = document.querySelectorAll('.spade')[i]
            if (dealerHandState[i].suite === 'hearts') {

                try { heartQS.style.display = 'flex' } catch { break; }
                try { diamondQS.style.display = 'none' } catch { break; }
                try { clubQS.style.display = 'none' } catch { break; }
                try { spadeQS.style.display = 'none' } catch { break; }
            }
        }
    }


    const hideHeart = () => {
        let i;
        for (i = 0; i < dealerHandState.length; i++) {
            const heartQS = document.querySelectorAll('.heart')[i]
            if (!dealerHandState[i]) { break; }
            else if (dealerHandState[i].suite !== 'hearts') {
                try { heartQS.style.display = 'none' } catch { break; }
            }
        }
    }

    const showDiamond = () => {
        let i;
        for (i = 0; i < dealerHandState.length; i++) {
            const heartQS = document.querySelectorAll('.heart')[i]
            const diamondQS = document.querySelectorAll('.diamond')[i]
            const clubQS = document.querySelectorAll('.club')[i]
            const spadeQS = document.querySelectorAll('.spade')[i]
            if (dealerHandState[i].suite === 'diamonds') {
                try { heartQS.style.display = 'none' } catch { break; }
                try { diamondQS.style.display = 'flex' } catch { break; }
                try { clubQS.style.display = 'none' } catch { break; }
                try { spadeQS.style.display = 'none' } catch { break; }
            }
        }

    }

    const hideDiamond = () => {
        let i;
        for (i = 0; i < dealerHandState.length; i++) {
            const diamondQS = document.querySelector('.diamond')[i]
            if (!dealerHandState[i]) { break; }
            else if (dealerHandState[i].suite !== 'diamonds') {
                try { diamondQS.style.display = 'none' } catch { break; }
            }
        }
    }

    const showSpade = () => {
        let i;
        for (i = 0; i < dealerHandState.length; i++) {
            const heartQS = document.querySelectorAll('.heart')[i]
            const diamondQS = document.querySelectorAll('.diamond')[i]
            const clubQS = document.querySelectorAll('.club')[i]
            const spadeQS = document.querySelectorAll('.spade')[i]
            if (dealerHandState[i].suite === 'spades') {
                try { heartQS.style.display = 'none' } catch { break; }
                try { diamondQS.style.display = 'none' } catch { break; }
                try { clubQS.style.display = 'none' } catch { break; }
                try { spadeQS.style.display = 'flex' } catch { break; }
            }
        }
    }

    const hideSpade = () => {
        let i;
        for (i = 0; i < dealerHandState.length; i++) {
            const spadeQS = document.querySelector('.spade')[i]
            if (!dealerHandState[i]) { break; }
            else if (dealerHandState[i].suite !== 'spades') {
                try { spadeQS.style.display = 'none' } catch { break; }
            }
        }
    }
    const showClub = () => {
        let i;
        for (i = 0; i < dealerHandState.length; i++) {
            const heartQS = document.querySelectorAll('.heart')[i]
            const diamondQS = document.querySelectorAll('.diamond')[i]
            const clubQS = document.querySelectorAll('.club')[i]
            const spadeQS = document.querySelectorAll('.spade')[i]
            if (dealerHandState[0].suite === 'clubs') {
                try { heartQS.style.display = 'none' } catch { break; }
                try { diamondQS.style.display = 'none' } catch { break; }
                try { clubQS.style.display = 'flex' } catch { break; }
                try { spadeQS.style.display = 'none' } catch { break; }
            }
        }

    }

    const hideClub = () => {
        let i;
        for (i = 0; i < dealerHandState.length; i++) {
            const clubQS = document.querySelector('.club')[i]
            if (!dealerHandState[i]) { break; }
            else if (dealerHandState[0].suite !== 'clubs') {
                try { clubQS.style.display = 'none' } catch { break; }
            }
        }
    }

    const showHeartPlayer = () => {
        let i;
        for (i = 0; i < hand.length; i++) {
            const heartQS = document.querySelectorAll('.player-heart')[i]
            const diamondQS = document.querySelectorAll('.player-diamond')[i]
            const clubQS = document.querySelectorAll('.player-club')[i]
            const spadeQS = document.querySelectorAll('.player-spade')[i]
            if (hand[i].suite === 'hearts') {

                try { heartQS.style.display = 'flex' } catch { break; }
                try { diamondQS.style.display = 'none' } catch { break; }
                try { clubQS.style.display = 'none' } catch { break; }
                try { spadeQS.style.display = 'none' } catch { break; }
            }
        }
    }


    const hideHeartPlayer = () => {
        let i;
        for (i = 0; i < hand.length; i++) {
            const heartQS = document.querySelectorAll('.player-heart')[i]
            if (!hand[i]) { break; }
            else if (hand[i].suite !== 'hearts') {
                try { heartQS.style.display = 'none' } catch { break; }
            }
        }
    }

    const showDiamondPlayer = () => {
        let i;
        for (i = 0; i < hand.length; i++) {
            const heartQS = document.querySelectorAll('.player-heart')[i]
            const diamondQS = document.querySelectorAll('.player-diamond')[i]
            const clubQS = document.querySelectorAll('.player-club')[i]
            const spadeQS = document.querySelectorAll('.player-spade')[i]
            if (hand[i].suite === 'diamonds') {

                try { heartQS.style.display = 'none' } catch { break; }
                try { diamondQS.style.display = 'flex' } catch { break; }
                try { clubQS.style.display = 'none' } catch { break; }
                try { spadeQS.style.display = 'none' } catch { break; }
            }
        }

    }

    const hideDiamondPlayer = () => {
        let i;
        for (i = 0; i < hand.length; i++) {
            const diamondQS = document.querySelector('.diamond')[i]
            if (!hand[i]) { break; }
            else if (hand[i].suite !== 'diamonds') {
                try { diamondQS.style.display = 'none' } catch { break; }
            }
        }
    }

    const showSpadePlayer = () => {
        let i;
        for (i = 0; i < hand.length; i++) {
            const heartQS = document.querySelectorAll('.player-heart')[i]
            const diamondQS = document.querySelectorAll('.player-diamond')[i]
            const clubQS = document.querySelectorAll('.player-club')[i]
            const spadeQS = document.querySelectorAll('.player-spade')[i]
            if (hand[i].suite === 'spades') {
                try { heartQS.style.display = 'none' } catch { break; }
                try { diamondQS.style.display = 'none' } catch { break; }
                try { clubQS.style.display = 'none' } catch { break; }
                try { spadeQS.style.display = 'flex' } catch { break; }
            }
        }
    }

    const hideSpadePlayer = () => {
        let i;
        for (i = 0; i < hand.length; i++) {
            const spadeQS = document.querySelector('.player-spade')[i]
            if (!hand[i]) { break; }
            else if (hand[i].suite !== 'spades') {
                try { spadeQS.style.display = 'none' } catch { break; }
            }
        }
    }
    const showClubPlayer = () => {
        let i;
        for (i = 0; i < hand.length; i++) {
            const heartQS = document.querySelectorAll('.player-heart')[i]
            const diamondQS = document.querySelectorAll('.player-diamond')[i]
            const clubQS = document.querySelectorAll('.player-club')[i]
            const spadeQS = document.querySelectorAll('.player-spade')[i]
            if (hand[0].suite === 'clubs') {
                try { heartQS.style.display = 'none' } catch { break; }
                try { diamondQS.style.display = 'none' } catch { break; }
                try { clubQS.style.display = 'flex' } catch { break; }
                try { spadeQS.style.display = 'none' } catch { break; }
            }
        }

    }

    const hideClubPlayer = () => {
        let i;
        for (i = 0; i < hand.length; i++) {
            const clubQS = document.querySelector('.player-club')[i]
            if (!hand[i]) { break; }
            else if (hand[0].suite !== 'clubs') {
                try { clubQS.style.display = 'none' } catch { break; }
            }
        }
    }


    const newGame = () => {
        playerHand = []
        dealerHand = [];
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

        setHand(playerHand)
        setDealerHandState(dealerHand)
        checkPoints()
    }

    const playerHit = () => {
        deck = deckInPlay
        let randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
        let tempHand = hand
        tempHand.push(deck[randomIndex])
        deck.pop(randomIndex)
        setDeckInPlay(deck)
        setHand(tempHand)
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
        let handSize = hand.length
        let i;
        for (i = 0; i < handSize; i++) {
            console.log(hand[i])
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
        viewPlayerHand();
        viewDealerHand();
    }

    const checkPoints = () => {
        setPlayerScore(0)
        setDealerScore(0)
        let playerHandSize = hand.length
        let dealerHandSize = dealerHandState.length
        let i;
        let playerTempScore = 0
        let dealerTempScore = 0

        for (i = 0; i < playerHandSize; i++) {
            if (hand[i].rank === '2') { playerTempScore += 2 }
            else if (hand[i].rank === '3') { playerTempScore += 3 }
            else if (hand[i].rank === '4') { playerTempScore += 4 }
            else if (hand[i].rank === '5') { playerTempScore += 5 }
            else if (hand[i].rank === '6') { playerTempScore += 6 }
            else if (hand[i].rank === '7') { playerTempScore += 7 }
            else if (hand[i].rank === '8') { playerTempScore += 8 }
            else if (hand[i].rank === '9') { playerTempScore += 9 }
            else if (hand[i].rank === '10' || 'j' || 'q' || 'k') { playerTempScore += 10; }
            else if (hand[i].rank === 'a') { playerTempScore += 11; }
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
                <div class="circTxt" id="test">
                </div>
            </div>
            <div className={classes.bjTable}>

                <div className={classes.dealerArea}>

                    <div className={classes.bjCard}>
                        <div className={classes.rankTL}>
                            {dealerHandState[0] ? dealerHandState[0].rank : '?'}
                        </div>

                        <div className={classes.suite}>
                            <div class='suite'>
                                {dealerHandState[0] ? showHeart() : hideHeart()}
                                {dealerHandState[0] ? showDiamond() : hideDiamond()}
                                {dealerHandState[0] ? showSpade() : hideSpade()}
                                {dealerHandState[0] ? showClub() : hideClub()}

                                <img class='club' alt='club' src={club} />
                                <img class='spade' alt='spade' src={spade} />
                                <img class='heart' alt='heart' src={heart} />
                                <img class='diamond' alt='diamond' src={diamond} />
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
                            <div class='suite'>
                                {dealerHandState[1] ? showHeart() : hideHeart()}
                                {dealerHandState[1] ? showDiamond() : hideDiamond()}
                                {dealerHandState[1] ? showSpade() : hideSpade()}
                                {dealerHandState[1] ? showClub() : hideClub()}

                                <img class='club' alt='club' src={club} />
                                <img class='spade' alt='spade' src={spade} />
                                <img class='heart' alt='heart' src={heart} />
                                <img class='diamond' alt='diamond' src={diamond} />
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
                <div className={classes.playerArea}>

                    <div className={classes.player}>


                        <div className={classes.bjCard}>
                            <div className={classes.rankTL}>
                                {hand[0] ? hand[0].rank : '?'}
                            </div>
                            <div className={classes.suite}>
                                <div class='suite'>
                                    {hand[0] ? showHeartPlayer() : hideHeartPlayer()}
                                    {hand[0] ? showDiamondPlayer() : hideDiamondPlayer()}
                                    {hand[0] ? showSpadePlayer() : hideSpadePlayer()}
                                    {hand[0] ? showClubPlayer() : hideClubPlayer()}

                                    <img class='player-club' alt='club' src={club} />
                                    <img class='player-spade' alt='spade' src={spade} />
                                    <img class='player-heart' alt='heart' src={heart} />
                                    <img class='player-diamond' alt='diamond' src={diamond} />
                                </div>
                            </div>
                            <div className={classes.rankBR}>
                                {hand[0] ? hand[0].rank : '?'}
                            </div>
                        </div>

                        <div className={classes.bjCard} >
                            <div className={classes.rankTL}>
                                {hand[1] ? hand[1].rank : '?'}
                            </div>
                            <div className={classes.suite}>
                                <div class='suite'>
                                    {dealerHandState[1] ? showHeartPlayer() : hideHeartPlayer()}
                                    {dealerHandState[1] ? showDiamondPlayer() : hideDiamondPlayer()}
                                    {dealerHandState[1] ? showSpadePlayer() : hideSpadePlayer()}
                                    {dealerHandState[1] ? showClubPlayer() : hideClubPlayer()}

                                    <img class='player-club' alt='club' src={club} />
                                    <img class='player-spade' alt='spade' src={spade} />
                                    <img class='player-heart' alt='heart' src={heart} />
                                    <img class='player-diamond' alt='diamond' src={diamond} />
                                </div>
                            </div>
                            <div className={classes.rankBR}>
                                {hand[1] ? hand[1].rank : '?'}
                            </div>
                        </div>
                        {/* <Card /> */}
                    </div>
                </div>

            </div>
        </div >
    )
}