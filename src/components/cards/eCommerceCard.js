import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import bjImg from '../../static/slides/krk_wine_sd/krk_wine_ss.png'
import {FlippyStyle} from './FlippyStyle.js'


const bullets = [
    "Custom E-Commerce Site",
    "Fully Dynamic",
    "User Friendly CMS Interface",
    "Unique Styling",

]

const DefaultCardContents = ({ children }) => (
    <React.Fragment>
        <a style={{ "text-decoration": "none" }} href='https://krk-wine-sanity-stripe.vercel.app/'>
            <FrontSide className='front-side'>
                <h3 className='card-title'>KRK Wine Shop</h3>
                <img alt='screenshot of KRK Wine SD' style={{ width: '200px' }} src={bjImg} />

            </FrontSide>

            <BackSide className='back-side'>
                {bullets.map((e) => (
                    <div className='bullet-row'>
                        <li className='cardBullet'></li>
                        <p className="cardBulletText">{e}</p>
                    </div>
                ))}
            </BackSide>
        </a >
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