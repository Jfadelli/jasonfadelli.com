import React from 'react'
import './game.css';
import {Route} from 'react-router-dom'
import { useStyles } from '../../../style/style'

import About from './components/about'
import Home from './components/home'

export default function Game() {
	const classes = useStyles()
		return (
			<div className={classes.contentWrapper}>
				<Route exact path ='/portfolio/game-of-life' component={Home}/>
				<Route exact path ='/portfolio/game-of-life/about' component={About} />
			</div>
	);
}

