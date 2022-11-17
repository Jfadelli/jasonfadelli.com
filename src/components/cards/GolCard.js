import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import golImg from '../../static/slides/gol/gol-home.png'
import { NavLink } from 'react-router-dom'
import {FlippyStyle} from './FlippyStyle.js'

const bullets = [
    "Custom Page Animations",
    "Custom React Application",
    "Deep Logical Operators",
    "0 Player Gameplay",
    "Unique Styling"
]

const DefaultCardContents = ({ children }) => (
    <React.Fragment>
        <NavLink style={{ textDecoration: 'none', }} to='/portfolio/game-of-life'>
            <FrontSide className='front-side'>
                <h3 className='card-title'>Conway's <br/> Game of Life</h3>

                <img alt='screenshot of kwc san diego' style={{ width: '200px' }} src={golImg} />

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

class GolCard extends Component {
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
                    <FlippyOnHover content='TEST' />
                </div>
            </div>
        );
    }
}

export default GolCard;