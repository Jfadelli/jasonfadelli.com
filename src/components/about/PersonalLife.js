import React from 'react'
import { useStyles } from '../../style/style'
import SocialMedia from '../socialMedia/socialMedia'
// import '@fortawesome/free-solid-svg-icons'


export default function PeronalLife() {
    const classes = useStyles()

    return (
        <div className={classes.contentWrapper}>
            <div className={classes.content}>
                <div className={classes.flexCol}>
                    <h1> Personal Life</h1>

                    <h2>...</h2>
                    <p>I was born in Palo Alto CA and grew up in several cities as a youngster. My high school days took me out to Palm Desert where I earned my diploma, and I played on the Varsity Water Polo team. I spent most of my free time, playing computer games, and daydreaming about my big bright future.</p>

                    <p>Time went by...</p>

                    <p>In my early twenties I found myself working as a bartender and raising my daughter, in sunny San Diego.</p>

                    <p>I have been in and out of community college throughout the years and never really found a subject that I wanted to really pursue, so I always found myself dropping back out.</p>
                    
                    <p>I got a job working as a real estate agent, then a commercial real estate agent, then a commercial real estate broker. And again, that did not really seem check my boxes. The long hours on the phone trying to convince people to buy or sell, just got to be too much.</p>

                    <p>I realized that the things I enjoyed most about real estate was the software. Making spreadsheets with macros, and configuring our CRM, and developing an app to handle real estate referrals, was the only thing that kept me interested in my job.</p>

                    <p>I found an online school called Lambda. My best friend had been in the curriculum and it just seemed like a perfect opportunity to commit myself to something new. And that is what I did. Now here I am 12 months later, and I can code JavaScript, React, Python, Express, Node... the list goes on.</p>

                    <p>If you read this, and liked my story, let me know about it with an email, or contact me through my social.</p>
                    <hr className={classes.horizLine} />
                    <div className={classes.flexRow}>
                        <div className={classes.list} style={{justifyContent:'center'}}>
                        
                            <h2>My interests!</h2>
                            <br/>
                            <i className="fas fa-basketball-ball">&nbsp; Basketball</i><br />
                            <i className="fas fa-volleyball-ball">&nbsp; Beach Volleyball</i><br />
                            <i className="fas fa-dumbbell">&nbsp; Weight Training</i><br />
                            <i className="fas fa-utensils">&nbsp; Food</i><br />
                            <i className="fas fa-baby">&nbsp; Dad Life</i><br />
                            <i className="fas fa-heart">&nbsp; My Girlfriend</i><br />
                            <br/>
                        </div>
                    </div>

                    <hr className={classes.horizLine} />

                    <div style={{ alignItems: 'flex-start' }} className={classes.flexRow}>
                        <SocialMedia />  
                        
                    </div>
                    <br/>

                    <hr className={classes.horizLine} />
                </div>
            </div>
        </div>
    )
}