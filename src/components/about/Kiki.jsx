import React from 'react'
import { useStyles } from '../../style/style'
import './style.css'

export default function Kiki() {
    const classes = useStyles()

    return (
        <div>
            <div className={classes.contentWrapper}>
                <div className={classes.flexCol}>
                    
            <p>I've been trying to find a way to get my daughter (9yo) interested in coding. I asked her to make something that I would put on this website, and her eyes lit up. So we made a simple grid/canvas picture out of divs and had a great time working together on the design.</p>
            </div>
            </div>
            <div class="body">
                <div class="canvas">
                    {/* <!-- row 1 --> */}
                    <section class="gray"></section>
                    <section class="black"></section>
                    <section class="black" ></section>
                    <section class="black" ></section>
                    <section class="black" ></section>
                    <section class="black" ></section>
                    <section class="black" ></section>
                    <section class="gray" ></section>

                    {/* <!-- row 2-->    */}
                    <section class="black" ></section>
                    <section class="black" ></section>
                    <section class="black" ></section>
                    <section class="yellow" ></section>
                    <section class="yellow" ></section>
                    <section class="black" ></section>
                    <section class="black" ></section>
                    <section class="black" ></section>

                    {/* <!-- row 3--> */}
                    <section class="black" ></section>
                    <section class="yellow" ></section>
                    <section class="yellow" ></section>
                    <section class="red" ></section>
                    <section class="red" ></section>
                    <section class="yellow" ></section>
                    <section class="yellow" ></section>
                    <section class="black" ></section>

                    {/* <!-- row 4--> */}
                    <section class="black" ></section>
                    <section class="tan" ></section>
                    <section class="tan" ></section>
                    <section class="tan" ></section>
                    <section class="tan" ></section>
                    <section class="tan" ></section>
                    <section class="tan" ></section>
                    <section class="black" ></section>

                    {/* <!-- row 5--> */}
                    <section class="black" ></section>
                    <section class="tan" ></section>
                    <section class="blue" ></section>
                    <section class="tan" ></section>
                    <section class="tan" ></section>
                    <section class="blue" ></section>
                    <section class="tan" ></section>
                    <section class="black" ></section>

                    {/* <!-- row 6--> */}
                    <section class="black" ></section>
                    <section class="tan" ></section>
                    <section class="tan" ></section>
                    <section class="tan" ></section>
                    <section class="tan" ></section>
                    <section class="tan" ></section>
                    <section class="tan" ></section>
                    <section class="black" ></section>

                    {/* <!-- row 7--> */}
                    <section class="black" ></section>
                    <section class="tan" ></section>
                    <section class="tan" ></section>
                    <section class="pink" ></section>
                    <section class="pink" ></section>
                    <section class="tan" ></section>
                    <section class="tan" ></section>
                    <section class="black" ></section>

                    {/* <!-- row 8--> */}
                    <section class="black" ></section>
                    <section class="black" ></section>
                    <section class="tan" ></section>
                    <section class="tan" ></section>
                    <section class="tan" ></section>
                    <section class="tan" ></section>
                    <section class="black" ></section>
                    <section class="black" ></section>
                </div>
            </div>
        </div>
    )
}