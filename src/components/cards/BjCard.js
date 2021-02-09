import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import bjImg from '../../static/slides/blackjack/blackjack.png'
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
            Blackjack JS
            <img alt='screenshot of blackjack js' style={{ width: '200px' }} src={bjImg} />

        </FrontSide>
        <BackSide className='backSide'>
            <li>Playable React JS Blackjack</li>
            <li>Custom Playing Card Models</li>
            <li>Fast Responsive Gameplay</li>
            <li>Unique Styling</li>
        </BackSide>
    </React.Fragment>);

const FlippyOnHover = ({ flipDirection = 'horizontal' }) => (
    <Flippy
        flipOnHover={true}
        flipDirection={flipDirection}
        style={FlippyStyle}
    >
        <DefaultCardContents>
            I flip {flipDirection}ly on hover
      </DefaultCardContents>
    </Flippy>
);

class BjCard extends Component {
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

export default BjCard;