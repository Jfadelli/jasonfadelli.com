import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import kwcImg from '../../static/slides/kwcsd/home-desktop.png'
import './style.css'

const FlippyStyle = {
  width: '200px',
  height: '300px',
  textAlign: 'center',
  color: '#FFF',
  fontFamily: 'sans-serif',
  fontSize: '25px',
  justifyContent: 'center'
}

const DefaultCardContents = ({ children }) => (
  <React.Fragment>
    <FrontSide className='frontSide'>
      KWC <br />San Diego
      <img alt='screenshot of kwc san diego' style={{ width: '200px' }} src={kwcImg} />

    </FrontSide>
    <BackSide className='backSide'>
      <li>Fast Responsive Design</li>
      <li>Custom API Integration</li>
      <li>Better than IDX Web Listings</li>
      <li>Custom Page Animations</li>
    </BackSide>
  </React.Fragment>);

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