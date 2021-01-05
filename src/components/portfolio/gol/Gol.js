import React from 'react'
import { useStyles } from '../../../style/style'
import './game.css'
import Game from './game'

export default function Gol() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.contentWrapper}>
                <div className={classes.header}>
                    <br />
                    <h2>A Custom Rendition of...</h2>
                </div>
                <Game />
                <hr className={classes.horizLine} />
            </div>
        </div>
    )
}