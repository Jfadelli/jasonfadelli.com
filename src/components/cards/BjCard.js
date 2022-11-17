import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import bjImg from '../../static/slides/blackjack/blackjack.png'
import { NavLink } from 'react-router-dom'
import {FlippyStyle} from './FlippyStyle.js'

const bullets = [
    "Playable React JS Blackjack",
    "Custom Playing Card Models",
    "Fast Responsive Gameplay",
    "Unique Styling",
]

const DefaultCardContents = ({ children }) => (
    <React.Fragment>
        <NavLink  style={{textDecoration:'none',}}to='/portfolio/blackjack'>
            <FrontSide className='front-side'>
                <h3 className='card-title'>Blackjack JS</h3>
                <img alt='screenshot of blackjack js' style={{ width: '200px' }} src={bjImg} />

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