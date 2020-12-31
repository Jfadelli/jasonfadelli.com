import React from 'react';
import { Route } from 'react-router-dom'
import { useStyles} from './style/style'

// Components
import Nav from './components/Nav'
import Home from './components/Home'

  // Portfolio
import Kwcsd from './components/portfolio/Kwcsd'
import Gol from './components/portfolio/Gol'

  // Contact
import Contact from './components/contact/ContactForm'



function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.topSpace} />
      <Nav />
      <Route exact path='/' component={Home}/>

      {/* about */}
      <Route path='/portfolio/kwc-san-diego' component={Kwcsd}/>
      <Route path='/portfolio/game-of-life' component={Gol}/>

      {/* contact */}
      <Route path='/contact/contact-form' component={Contact}/>
  
    </div>
  );
}

export default App;
