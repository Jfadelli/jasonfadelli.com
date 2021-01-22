import React from 'react'

import { useStyles } from '../../../../../style/style'
import club from '../../static/club.svg'
import spade from '../../static/spade.svg'
import diamond from '../../static/diamond.svg'
import heart from '../../static/heart.svg'

import { dealerChangeSuite } from '../suiteHandler'

export default function DealerCardTwo(props) {
    const classes = useStyles()
    let dealerHandState = props.dealerHandState

    return (
        <div className={classes.bjCard}>
            <div className={classes.rankTL}>
                {dealerHandState[1] ? dealerHandState[1].rank : '?'}
            </div>

            <div className={classes.suite}>
                <div className='suite'>
                    {dealerHandState[1] ? dealerChangeSuite({ dealerHandState }) : null}
                    {dealerHandState[1] ? dealerChangeSuite({ dealerHandState }) : null}
                    {dealerHandState[1] ? dealerChangeSuite({ dealerHandState }) : null}
                    {dealerHandState[1] ? dealerChangeSuite({ dealerHandState }) : null}

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
    )
}