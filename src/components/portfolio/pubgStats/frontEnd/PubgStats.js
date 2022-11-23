// default react stuff
import logo from './static/HK416.webp';
import './App.css';
import React from 'react';
import {NavLink} from 'react-router-dom'

import PlayerCard from "./components/playerCard"
import Settings from "./components/settings"
// import AddFavorite from "./components/addFavorite"
import Favorites from "./components/favorites"


function App() {
  return (
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
          
        <p style={{color:'black'}}>Uh-oh... something went wrong. Please come back later.</p>
        <NavLink to={'/home'}>Return Home</NavLink>
          <PlayerCard />
        </div>

      </div>
    </div>
  );
}

export default App;
