import React from 'react';
import { dealerChangeSuite } from './suiteHandler'
import club from '../static/club.svg'
import spade from '../static/spade.svg'
import diamond from '../static/diamond.svg'
import heart from '../static/heart.svg'

import { useStyles } from '../../../../style/style'

export default function DealerHand(props) {
    const classes = useStyles()
        return (
            <div style={{ display: 'flex' }}>
                {props.dealerHandState.map((i) => {
                    return (
                        <div className='bjCard'>
                            <div className={classes.rankTL}>
                                {i ? i.rank : '?'}
                            </div>
                            <div className={classes.suite}>
                                <div className='suite'>
                                    {i ? dealerChangeSuite(props) : null}

                                    <img className='club' alt='club' src={club} />
                                    <img className='spade' alt='spade' src={spade} />
                                    <img className='heart' alt='heart' src={heart} />
                                    <img className='diamond' alt='diamond' src={diamond} />
                                </div>
                            </div>
                            <div className={classes.rankBR}>
                                {i ? i.rank : '?'}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    // const hideFirstCard = (props) => {
    //     if(props.playerStayFlag !== true) {
            
    //     }
    // }
}