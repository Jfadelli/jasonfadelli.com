import React from 'react';
// import { Link } from 'react-router-dom';
import { useStyles } from '../style/style'
import { useMediaQuery } from '../hooks/mediaQuery'

import Hero from '../static/hero.png';

import SocialMedia from '../components/socialMedia/socialMedia'
import KwcCarousel from './portfolio/KwcCarousel'


export default function Home() {
  const classes = useStyles();
  const isHidden = useMediaQuery('(min-width: 1023px)');

  return (
    <div className={classes.root}>
      <div className={classes.contentWrapper}>
        {/* <img style={styles.container(isHidden)} className={classes.hero} src={Hero} alt='banner horizon'/> */}
        <div className={classes.header}>
          <h1>J_son F_delli</h1>
          <h2>Professional Web Developer</h2>
        </div> 
          <section className={classes.content}>
            <SocialMedia/>
          </section>
          
          <hr />
          
          <h2>Recent Projects</h2>
          
          <section className={classes.content}>
            <h3>KWC San Diego</h3>
            <KwcCarousel/>
          </section>
          
          <hr className={classes.horizLine} />
          
          <h3>Sub Heading</h3>
          <section className={classes.content}>
            <p>Content</p>
          </section>

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

const styles = {
  container: isHidden => ({
    display: isHidden ? 'flex' : 'none',
    justifyContent: 'space-around'
  })
};