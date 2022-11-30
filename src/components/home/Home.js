import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useStyles } from '../../style/style'

import SocialMedia from '../socialMedia/socialMedia'
import KwcCard from '../cards/KwcCard'
import GolCard from '../cards/GolCard'
import BjCard from '../cards/BjCard'
import ECommerceCard from '../cards/eCommerceCard'
import PubgStatsCard from '../cards/pubgStatsCard'
import Nav from '../nav/Nav'


export default function Home() {
  const isMobile = useMediaQuery('(min-width: 769px)');
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <div className={classes.bg} style={mediaQueryStyle.container(isMobile)}>
        <Nav />
        <div className={classes.contentWrapper}>
          <div className={classes.home}>
            <div className={classes.header}>
              <h1>Jason Fadelli</h1>
              <h2>Web Developer</h2>
              <div className={classes.headerBody}>
                <p>
                  Please take a look at a few of my recent projects and each out to me if you want to talk about  coding or computers.
                </p>
              </div>
              
            </div>


            <SocialMedia />
            <h2 style={{marginBottom:'-20px'}}>Projects</h2>
            <div className={classes.cardWrapper}>
              <div className={classes.cardContainer}>
                <KwcCard />
                <PubgStatsCard />
                <ECommerceCard />
                <GolCard />
                <BjCard />
              </div>
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