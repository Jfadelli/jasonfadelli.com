import React from 'react'

import { useStyles } from '../../../../../style/style'
import club from '../../static/club.svg'
import spade from '../../static/spade.svg'
import diamond from '../../static/diamond.svg'
import heart from '../../static/heart.svg'

import { playerChangeSuite } from '../suiteHandler'

export default function PlayerCardOne(props) {
    const classes = useStyles()
    let playerHandState = props.playerHandState

    return (
        <div className={classes.bjCard}>
            <div className={classes.rankTL}>
                {playerHandState[0] ? playerHandState[0].rank : '?'}
            </div>
            <div className={classes.suite}>
                <div className='suite'>
                    {playerHandState[0] ? playerChangeSuite({ playerHandState }) : null}
                    {playerHandState[0] ? playerChangeSuite({ playerHandState }) : null}
                    {playerHandState[0] ? playerChangeSuite({ playerHandState }) : null}
                    {playerHandState[0] ? playerChangeSuite({ playerHandState }) : null}

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
    )
}