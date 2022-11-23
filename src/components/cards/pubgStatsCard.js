import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import pubgStatsImg from '../../static/slides/pubg-stats/pubg-stats-home.png'
import {FlippyStyle} from './FlippyStyle.js'
import {NavLink} from 'react-router-dom'

const bullets = [
    "API consuming web app",
    "Displays and updates player stats in real time",
    "Custom backend API to connect FE with PUBG's servers",

]

const DefaultCardContents = ({ children }) => (
    <React.Fragment>
        <NavLink style={{ textDecoration: 'none', }} to='/portfolio/pubg-stats'>
            <FrontSide className='front-side'>
                <h3 className='card-title'>PUBG Stats</h3>
                <img alt='screenshot of PUBG Stats app' style={{ width: '200px' }} src={pubgStatsImg} />

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
        <DefaultCardContents>
            I flip {flipDirection}ly on hover
        </DefaultCardContents>
    </Flippy>
);

class eCommerceCard extends Component {

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

export default eCommerceCard;