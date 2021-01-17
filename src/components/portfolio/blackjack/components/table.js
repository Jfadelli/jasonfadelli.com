import React, { useState } from 'react'
import { useStyles } from '../../../../style/style'

// import Player from './player'
import Dealer from './dealer'

export default function Table() {
    const classes = useStyles()
    const [hand, setHand] = useState()

    let suites = ['hearts', 'diamonds', 'spades', 'clubs']
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
    }

    const playerHit = () => {
        let randomIndex
        randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
        playerHand.push(deck[randomIndex])
        deck.pop(randomIndex)
    }

    const dealerHit = () => {
        let randomIndex
        randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
        dealerHand.push(deck[randomIndex])
        deck.pop(randomIndex)
    }

    const viewPlayerHand = () => {
        let handSize = playerHand.length
        let i;
        console.log('player Hand')
        for (i = 0; i < handSize; i++) {
            console.log(playerHand[i])
        }
        console.log(playerHand[0].rank)
    }

    const viewDealerHand = () => {
        let handSize = dealerHand.length
        let i;
        console.log('Dealer Hand')
        for (i = 0; i < handSize; i++) {
            console.log(dealerHand[i])
        }
    }

    const deal = () => {
        newGame()
        let randomIndex;

        randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
        playerHand.push(deck[randomIndex])
        deck.pop(randomIndex)

        randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
        dealerHand.push(deck[randomIndex])
        deck.pop(randomIndex)

        randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
        playerHand.push(deck[randomIndex])
        deck.pop(randomIndex)

        randomIndex = Math.floor(Math.random() * Math.floor(deck.length))
        dealerHand.push(deck[randomIndex])
        deck.pop(randomIndex)
    }

    return (
        <div className={classes.bjTable}>
            <div className={classes.dealerArea}>
                <Dealer />
            </div>
            <div className={classes.controls}>
                <button className={classes.shuffle} onClick={newGame}> New Game </button>
                {/* <button className={classes.shuffle} onClick={viewDeck}>View Deck</button> */}
                <button className={classes.shuffle} onClick={deal}> Deal Cards </button>
                <button className={classes.shuffle} onClick={viewPlayerHand}>View Hand</button>
                <button className={classes.shuffle} onClick={viewDealerHand}>View Dealer</button>
                <button className={classes.shuffle} onClick={dealerHit}>Dealer Hit</button>
                <button className={classes.shuffle} onClick={playerHit}>player Hit</button>

            </div>
            <div className={classes.playerArea}>
                <div className={classes.player}>

                    <div className={classes.bjCard} onChange={'t'}>
                        <div className={classes.rankTL}>
                            {playerHand[0] ? playerHand[0].rank : 'rank'}
                        </div>
                        <div className={classes.suite}>
                            {playerHand[0] ? playerHand[0].suite : 'suite'}
                        </div>
                        <div className={classes.rankBR}>
                            {playerHand[0] ? playerHand[0].rank : 'rank'}
                        </div>
                    </div>

                    <div className={classes.bjCard}>
                        <div className={classes.rankTL}>
                            {playerHand.rank}
                        </div>
                        <div className={classes.suite}>
                            {playerHand.suite}
                        </div>
                        <div className={classes.rankBR}>
                            {playerHand.rank}
                        </div>
                    </div>
                    {/* <Card /> */}
                </div>
            </div>

        </div>
    )
}