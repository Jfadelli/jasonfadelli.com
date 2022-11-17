import React from 'react';
import { playerChangeSuite } from './suiteHandler'
import { useStyles } from '../../../../style/style'
import club from '../static/club.svg'
import diamond from '../static/diamond.svg'
import heart from '../static/heart.svg'
import spade from '../static/spade.svg'

export default function PlayerHand(props) {
    const classes = useStyles()
        return (
            <div style={{ display: 'flex' }}>
                {props.playerHandState.map((i) => {
                    return (
                        <div className='bjCard'>
                            <div className={classes.rankTL}>
                                {i ? i.rank : '?'}
                            </div>
                            <div className={classes.suite}>
                                <div className='suite'>
                                    {i ? playerChangeSuite(props) : null}

                                    <img className='player-club' alt='club' src={club} />
                                    <img className='player-spade' alt='spade' src={spade} />
                                    <img className='player-heart' alt='heart' src={heart} />
                                    <img className='player-diamond' alt='diamond' src={diamond} />
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
}