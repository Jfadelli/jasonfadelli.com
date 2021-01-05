import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import { useMediaQuery } from '../hooks/mediaQuery'
import { useStyles } from '../style/style'

import Portfolio from './navLinks/Portfolio.js'
import About from './navLinks/About.js'
import Contact from './navLinks/Contact.js'
import Home from './navLinks/HomeLink.js'

// const url = window.location.href

// const checkHome = ( url => {
// 
//   if (window.location.href === 'http://localhost:3000/'){
//     console.log('true - url is =>',document.URL )
// }
// }, []);

export default function Nav() {
  const isRow = useMediaQuery('(min-width: 769px)');
  const classes = useStyles();
  // const [isHome, setIsHome ] = useState()

  return (
  <div className={classes.spacedDiv}>
    <div className={classes.navBar} style={styles.container(isRow)}>
      <Toolbar className={classes.navToolbar} style={styles.container(isRow)}>
        {/* <a href='/'> <img style={logoStyle.container(isSmall)} src={Logo} alt='keller williams commercial' /></a> */}
        <Home />
        <Portfolio />
        <About />
        <Contact />

      </Toolbar>
    </div>
  </div>
  );
}

const styles = {
  container: isRow => ({
    flexDirection: isRow ? 'row' : 'column',
    height: isRow ? '' : 'auto',
    alignContent: isRow ? '' : 'center',
    zIndex:'0'
  }),
};


