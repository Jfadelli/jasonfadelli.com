import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { useStyles } from './style/style'
import './style/fade.css'

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

// Components
import Landing from './components/Landing'
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
import WorkExperience from './components/about/WorkExperience'



function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
     

      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames='fade'>
            <Switch location={location}>
                  <Route exact path='/' component={Home} />
      
              {/* Home */}
              <Route path='/home' component={Home} />

              {/* about */}
              <Route path='/portfolio/kwc-san-diego' component={Kwcsd} />
              <Route path='/portfolio/game-of-life' component={Gol} />
              <Route path='/portfolio/blackjack' component={Blackjack} />

              {/* contact */}
              <Route path='/contact/contact-form' component={Contact} />

              {/* about */}
              <Route path='/about/personal-life' component={PersonalLife} />
              <Route path='/about/Kikis-Coding' component={Kiki} />
              <Route path='/about/work-experience' component={WorkExperience} />
            </Switch>
          
          </CSSTransition>
        </TransitionGroup>
      )} />

    </div>
  );
}

export default App;
