import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '@material-ui/core'

import { useStyles } from '../../../style/style'
import './game.css'
import Game from './game'
import Nav from '../../nav/Nav'

export default function Gol() {
    const classes = useStyles()
    const isMobile = useMediaQuery('(min-width: 769px)');

    return (
        <div className={classes.root}>
            <div className={classes.bg} style={mediaQueryStyle.container(isMobile)}>
                <Nav />
                <div className={classes.contentWrapper} >
                    <div className={classes.header}>
                        <h2>A Custom Rendition of...</h2>
                    </div>

                    <Game style={{ maxWidth: '1024px' }} />
                    <div className={classes.flexRow}>
                        <Link className={classes.link} to='/'>Find this app on GitHub</Link>
                    </div>
                    <br />
                    {/* <hr className={classes.horizLine} /> */}
                </div>
            </div>
        </div>
    )
}

const mediaQueryStyle = {
    container: isMobile => ({
        width: isMobile ? '850px' : 'auto',
    })
  };