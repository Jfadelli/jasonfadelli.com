import React from 'react'
import { useStyles } from '../../style/style'
import SocialMedia from '../socialMedia/socialMedia'
import { LifeStory } from './life-story'

export default function PeronalLife() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.contentWrapper}>
                <div className={classes.content}>
                    <div className={classes.flexCol}>
                        <h1> Personal Life</h1>
                        <p className={classes.bioContent}>
                            {LifeStory.map((e) =>  (
                                <div>
                                    {e}
                                </div>
                            ))}
                        </p>
                        <hr className={classes.horizLine} />
                        <div className={classes.flexRow}>
                            <div className={classes.list} style={{ justifyContent: 'center' }}>

                                <h2>My interests!</h2>
                                <br />
                                <i className="fas fa-basketball-ball">&nbsp; Basketball</i><br />
                                <i className="fas fa-volleyball-ball">&nbsp; Beach Volleyball</i><br />
                                <i className="fas fa-dumbbell">&nbsp; Weight Training</i><br />
                                <i className="fas fa-utensils">&nbsp; Food</i><br />
                                <i className="fas fa-baby">&nbsp; Dad Life</i><br />
                                <i className="fas fa-heart">&nbsp; My Girlfriend</i><br />
                                <br />
                            </div>
                        </div>

                        <hr className={classes.horizLine} />

                        <div style={{ alignItems: 'flex-start' }} className={classes.flexRow}>
                            <SocialMedia />

                        </div>
                        <br />

                        <hr className={classes.horizLine} />
                    </div>
                </div>
            </div>
        </div>

    )
}