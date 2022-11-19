import React from 'react'
import {useStyles} from '../../../style/style'
// import './accordian.css'
// import '@fortawesome/free-solid-svg-icons'
// import KwcCarousel from './KwcCarousel'
import Nav from '../../Nav'

import { krkWineStory } from './krkWineStory'

export default function KrkWine() {
    const classes = useStyles()
// let classes = ""
    return (
        <div className={classes.root}>
            <Nav />
            <div className={classes.contentWrapper}>

                <div className={classes.content}>
                    <div className={classes.flexCol} >
                        <div className={classes.kwcAboutContent}>
                            <h1> KRK WINE ECOMMERCE SITE</h1>

                            <h2>Abstract</h2>
                            <p className={classes.bioContent}>
                            {krkWineStory.map((e) =>  (
                                <div>
                                    {e}
                                </div>
                            ))}
                        </p>

                            <hr className={classes.horizLine} />
                        </div>


                        <div style={{ alignItems: 'flex-start' }} className={classes.flexRow}>

                            <div className={classes.flexCol}>
                                <div className={classes.list}>
                                    <h2>Stack</h2>
                                    <i className="fas fa-terminal">&nbsp; Next.js</i><br />
                                    <i className="fas fa-terminal">&nbsp; Sanity</i><br />
                                    <i className="fas fa-terminal">&nbsp; Stripe</i><br />
                                    <i className="fas fa-terminal">&nbsp; Vercel</i><br />
                                    <i className="fas fa-terminal">&nbsp; Github</i><br />
                                    <i className="fas fa-terminal">&nbsp; </i><br />

                                </div>
                            </div>

                            <div className={classes.flexCol}>
                                <div className={classes.list}>
                                    <h2>Project / Site Features:</h2>
                                    <i className="fas fa-code-branch">&nbsp; Fast and responsive web shop</i><br />
                                    <i className="fas fa-code-branch">&nbsp; Easy to use backend interface for admin </i><br />
                                    <i className="fas fa-code-branch">&nbsp; Easily scaleable for larger deployments </i><br />
                                    <i className="fas fa-code-branch">&nbsp; </i><br />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className={classes.horizLine} />

                <div className={classes.kwcCarousel}>
                    {/* <KwcCarousel /> */}
                </div>
                <div className={classes.content}>

                    <a className={classes.link} href='https://www.kwcsandiego.com'>Visit KRK Wine Shop</a>
                    <br /><br />
                </div>
            </div>
        </div>
    )
}

