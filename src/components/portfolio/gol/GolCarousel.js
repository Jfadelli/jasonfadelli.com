import React from 'react'
// import { useStyles } from '../../style/style'
import './accordian.css'

import golHome from '../../../static/slides/gol/gol-home.png'
import golBlank from '../../../static/slides/gol/gol-blank.png'
import golAbout from '../../../static/slides/gol/gol-about.png'


export default function GolCarousel() {
    // const classes = useStyles()

    return (
        <div class="ia-container">
        
            <figure>
                <img src={golAbout} alt="Professional About Page" />
                <input type="radio" name="radio-set" />
                <figcaption><span>Professional Landing Page</span></figcaption>

                <figure>
                    <img src={golHome} alt="Automatically Seed the Game Board" />
                    <input type="radio" name="radio-set" />
                    <figcaption><span>Dynamic Property Gallery</span></figcaption>

                    <figure>
                        <img src={golBlank} alt="Start with a Blank Canvas" />
                        <input type="radio" name="radio-set" />
                        <figcaption><span>Contact Page with Validation</span></figcaption>

                    </figure>
                </figure>
            </figure>
        </div>

    )
}

