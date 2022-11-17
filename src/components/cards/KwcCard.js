import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import kwcImg from '../../static/slides/kwcsd/home-desktop.png'
import { NavLink } from 'react-router-dom'
import {FlippyStyle} from './FlippyStyle.js'

const bullets = [
  "Unique Styling",
  "Fast Responsive Design",
  "FaCustom API Integration",
  "Better than IDX Web Listings",
  "Custom Page Animations"
]

const DefaultCardContents = ({ children }) => (
  <React.Fragment>
            <NavLink style={{ textDecoration: 'none', }} to='/portfolio/kwc-san-diego'>

    <FrontSide className='front-side'>
    <h3 className='card-title'>KWC San Diego</h3>
      
      <img alt='screenshot of kwc san diego' style={{ width: '200px' }} src={kwcImg} />

    </FrontSide>
    <BackSide className='back-side'>
      {bullets.map((e) => (
        <div className='bullet-row'>
          <li className='cardBullet'></li>
          <p className="cardBulletText">{e}</p>
        </div>
      ))}
    </BackSide>
    </NavLink>
  </React.Fragment >);

const FlippyOnHover = ({ flipDirection = 'horizontal' }) => (
  <Flippy
    flipOnHover={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents />
  </Flippy>
);

class kwcCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };

    setInterval(() => {
      this.setState({
        isFlipped: !this.state.isFlipped
      });
    }, 3000);
  }

  render() {
    return (
      <div className="homeCards">
        <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap' }}>
          <FlippyOnHover />
        </div>
      </div>
    );
  }
}

export default kwcCard;