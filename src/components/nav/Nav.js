import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import { useMediaQuery } from '../../hooks/mediaQuery'
import { useStyles } from '../../style/style'

import MobileNav from './mobileNav'

import Portfolio from '../navLinks/Portfolio.js'
import About from '../navLinks/About.js'
import Contact from '../navLinks/Contact.js'
import Home from '../navLinks/HomeLink.js'

export default function Nav() {
  const isRow = useMediaQuery('(min-width: 769px)');

  const classes = useStyles();

  return (
    <div>
      <MobileNav />
      <div className={classes.navBar} style={styles.container(isRow)} >

        <Toolbar className={classes.navToolbar} >
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
    display: isRow ? 'flex' : 'none',
    flexDirection: isRow ? 'row' : 'column',
    height: isRow ? 'auto' : '1px',
    alignContent: isRow ? '' : 'center',
    width: '100%',
    zIndex: '2'
  })

};



