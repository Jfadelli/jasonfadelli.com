import React from 'react';
import { useStyles } from '../style/style'
// import { Link } from 'react-router-dom'
// import { useMediaQuery } from '../hooks/mediaQuery'
import SocialMedia from '../components/socialMedia/socialMedia'
// import KwcCarousel from './portfolio/kwcsd/KwcCarousel'
// import GolCarousel from './portfolio/gol/GolCarousel'

import KwcCard from './cards/KwcCard'
import GolCard from './cards/GolCard'
import BjCard from './cards/BjCard'

export default function Home() {
  const classes = useStyles();
  // const isHidden = useMediaQuery('(min-width: 1023px)');

  return (
    <div className={classes.root}>
        <div className={classes.contentWrapper}>
          <div className={classes.header}>
            <h1>J_son F_delli</h1>
          </div>

          <SocialMedia />
          {/* <br />

          <hr />

          <h2>Recent Projects</h2>
          <Link className={classes.link} to='/portfolio/kwc-san-diego'><h3>KWC San Diego</h3></Link>

          <br />
          <KwcCarousel />

          <hr className={classes.horizLine} />

          <Link className={classes.link} to='/portfolio/game-of-life'><h3>Conway's Game of Life</h3></Link>

          <GolCarousel /> */}
          <div style={{margin: '5rem 0', display: 'flex', flexDirection:'row', justifyContent:'space-evenly', width:'75vw', height:'auto'}}>
          <KwcCard/>
          <GolCard />
          <BjCard />
          </div>

      </div>
    </div>
  );
}
