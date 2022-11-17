import React from 'react'
import { useStyles } from '../../style/style'
import SocialMedia from '../socialMedia/socialMedia'
import { workExperience } from './work-experience'

export default function WorkExperience() {
    const classes = useStyles()

    const workExperienceArray = []
    Object.keys(workExperience).forEach((e) => workExperienceArray.push(e))


    return (
        <div className={classes.root}>
            <div className={classes.contentWrapper}>
                <div className={classes.content}>
                    <div className={classes.flexCol}>
                        <h1>Work Experience</h1>
                        <p className={classes.bioContent}>
                            {Object.keys(workExperience).map((e) => (
                                <div>
                                    <h2>{workExperience[e].CompanyName}</h2>
                                    <h3>{workExperience[e].Role}</h3>
                                    <p>{workExperience[e].Duties}</p>
                                    <p>{workExperience[e].TimeFrame}</p>
                                    <hr className={classes.horizLine} />
                                </div>

                            ))}

                        </p>


                        <div style={{ alignItems: 'flex-start' }} className={classes.flexRow}>
                            <SocialMedia />

                        </div>
                        <br />


                    </div>
                </div>
            </div>
        </div>

    )
}