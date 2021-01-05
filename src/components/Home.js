import React from 'react';
import { useStyles } from '../style/style'
import { Link } from 'react-router-dom'
// import { useMediaQuery } from '../hooks/mediaQuery'
import SocialMedia from '../components/socialMedia/socialMedia'
import KwcCarousel from './portfolio/kwcsd/KwcCarousel'
import GolCarousel from './portfolio/gol/GolCarousel'

export default function Home() {
  const classes = useStyles();
  // const isHidden = useMediaQuery('(min-width: 1023px)');

  return (
    <div className={classes.root}>
      <div className={classes.contentWrapper}>
        <div className={classes.header}>
          <h1>J_son F_delli</h1>
          <h2>Professional Web Developer</h2>
        </div>
        <SocialMedia />
        <br />

        <hr />

        <h2>Recent Projects</h2>

        <section className={classes.content}>
          <Link className={classes.link} to='/portfolio/kwc-san-diego'><h3>KWC San Diego</h3></Link>

        </section>
        <br/>
        <KwcCarousel />

        <hr className={classes.horizLine} />

        <Link className={classes.link} to='/portfolio/game-of-life'><h3>Conway's Game of Life</h3></Link>

        <GolCarousel />


        <hr className={classes.horizLine} />

        <section className={classes.content}>
          <h3>Sub Heading</h3>
          <p>Content</p>
          <h4>Disclaimer</h4>
        </section>
      </div>
    </div>
  );
}
