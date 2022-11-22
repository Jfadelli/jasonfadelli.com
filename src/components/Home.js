import React from 'react';
import { useStyles } from '../style/style'

import SocialMedia from '../components/socialMedia/socialMedia'
import KwcCard from './cards/KwcCard'
import GolCard from './cards/GolCard'
import BjCard from './cards/BjCard'
import ECommerceCard from './cards/eCommerceCard'
import Nav from './Nav'

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
          <div className={classes.cardWrapper}>
            <div className={classes.cardContainer}>
              <KwcCard />
              <ECommerceCard />
              <GolCard />
              <BjCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
