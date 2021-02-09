import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import golImg from '../../static/slides/gol/gol-home.png'
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
            Conway's Game of Life
            <img alt='screenshot of kwc san diego' style={{ width: '200px' }} src={golImg} />

        </FrontSide>
        <BackSide className='backSide'>
            <li>Custom React Application</li>
            <li>Deep Logical Operators</li>
            <li>0 Player Gameplay</li>
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