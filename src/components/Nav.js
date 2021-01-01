import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import { useMediaQuery } from '../hooks/mediaQuery'
import { useStyles } from '../style/style'

import Portfolio from './navLinks/Portfolio.js'
import About from './navLinks/About.js'
import Contact from './navLinks/Contact.js'
import Home from './navLinks/HomeLink.js'

export default function Nav() {
  const isRow = useMediaQuery('(min-width: 769px)');
  const isSmall = useMediaQuery('(min-width: 769px)');
  const classes = useStyles();

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

const logoStyle = {
  container: isSmall => ({
    display: isSmall ? 'flex' : 'none',
    height: isSmall ? '88px': '0',
    width: isSmall ? '150px' : '0',
    margin: isSmall ?  '0 100px 0 auto' : 'auto'
  })
}
