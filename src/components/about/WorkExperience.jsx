import React from 'react'
import { useMediaQuery } from '@material-ui/core';
import { useStyles } from '../../style/style'

import { workExperience } from './work-experience'
import SocialMedia from '../socialMedia/socialMedia'
import Nav from '../nav/Nav'


export default function WorkExperience() {
    const classes = useStyles()
    const isMobile = useMediaQuery('(min-width: 769px)');
    const workExperienceArray = []

    Object.keys(workExperience).forEach((e) => workExperienceArray.push(e))
    return (
        <div className={classes.root}>
            <div className={classes.bg} style={mediaQueryStyle.container(isMobile)}>
                <Nav />
                <div className={classes.contentWrapper}>
                    <div className={classes.content}>
                        <div className={classes.flexCol}>
                            <h1>Work Experience</h1>
                            <p className={classes.bioContent}>
                                {Object.keys(workExperience).map((e) => (
                                    <div className="bio-card">
                                        <h2 className='bio-company-name'>{workExperience[e].CompanyName}</h2>
                                        <hr className='bio-card-h-line-1' />
                                        <div className='bio-card-content-container'>
                                            <div className='bio-card-left-container'>
                                                <h3 className='bio-card-role'>Role:<br />{workExperience[e].Role}</h3>
                                                <p className='bio-card-timeframe'>Time Period:<br />{workExperience[e].TimeFrame}</p>
                                            </div>
                                            <vl />
                                            <div className='bio-card-right-container'>
                                                <h3 className='bio-card-duties'>Duties:</h3>
                                                <hr className='bio-card-h-line-2' />
                                                <p>{workExperience[e].Duties}</p>
                                            </div>
                                        </div>
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
        </div>

    )
}
const mediaQueryStyle = {
    container: isMobile => ({
        width: isMobile ? '850px' : 'auto',
    })
  };