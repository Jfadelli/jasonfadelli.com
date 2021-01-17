import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { useStyles } from './style/style'
import './fade.css'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

// Components
import Nav from './components/Nav'
import Home from './components/Home'

// Portfolio
import Kwcsd from './components/portfolio/kwcsd/Kwcsd'
import Gol from './components/portfolio/gol/Gol'
import Blackjack from './components/portfolio/blackjack/Blackjack'

// Contact
import Contact from './components/contact/ContactForm'

// About
import PersonalLife from './components/about/PersonalLife'
import Kiki from './components/about/Kiki'



function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      {/* <div className={classes.topSpace} /> */}
      <Nav />

      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames='fade'>
            <Switch location={location}>
              <Route exact path='/' component={Home} />

              {/* about */}
              <Route path='/portfolio/kwc-san-diego' component={Kwcsd} />
              <Route path='/portfolio/game-of-life' component={Gol} />
              <Route path='/portfolio/blackjack' component={Blackjack} />

              {/* contact */}
              <Route path='/contact/contact-form' component={Contact} />

              {/* about */}
              <Route path='/about/personal-life' component={PersonalLife} />
              <Route path='/about/Kikis-Coding' component={Kiki} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />

    </div>
  );
}

export default App;
