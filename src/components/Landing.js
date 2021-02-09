import React from 'react';
import { useStyles } from '../style/style'
import { Link } from 'react-router-dom'

const Landing = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div id="landingPage" className={classes.landing}>
                <Link to='./home' className={classes.enterButton}>JasonFadelli.com</Link>
            </div>
        </div>
    );
}

export default Landing;

