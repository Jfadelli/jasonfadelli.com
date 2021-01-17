import React from 'react'
import { useStyles } from '../../../../style/style'

export default function Card() {
    const classes = useStyles()
    const cardData = {
        suite: 'suite',
        rank: 'rank',

    }

    return (
        <div className={classes.bjCard}>
            <div className={classes.rankTL}>
                {cardData.rank}
            </div>
            <div className={classes.suite}>
               {cardData.suite} 
            </div>
            <div className={classes.rankBR}>
                {cardData.rank}
            </div>
        </div>
    )
}