// default react stuff
import React from 'react';
import Nav from '../../../nav/Nav'
import { NavLink } from 'react-router-dom'

import { useMediaQuery } from '@material-ui/core'
import { useStyles } from '../../../../style/style'

import PlayerCard from "./components/playerCard"
import Settings from "./components/settings"
import Favorites from "./components/favorites"
// import AddFavorite from "./components/addFavorite"

import './App.css';

import logo from './static/HK416.webp';

function App() {
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width: 769px)');

  return (
    <div className={classes.root}>
      <div className={classes.bg} style={mediaQueryStyle.container(isMobile)}>
        <Nav />
        <div className="App">
          <header className="App-header">

            <p style={{ color: "black" }}>
              PUBG STATS
            </p>
          </header>
          <div className="app-body">
            <div className="app-sidebar">
              <img src={logo} className="App-logo" alt="logo" />
              <Settings />
              <Favorites />
            </div>
            <div className="player-cards-body">

              <p style={{ color: 'black' }}>Uh-oh... something went wrong. Please come back later.</p>
              <NavLink to={'/home'}>Return Home</NavLink>
              <PlayerCard />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
const mediaQueryStyle = {
  container: isMobile => ({
      width: isMobile ? '850px' : 'auto',
  })
};

export default App;
