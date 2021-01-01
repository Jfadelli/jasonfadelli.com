import React from 'react'
import { useStyles } from '../../style/style'
import './accordian.css'
// import '@fortawesome/free-solid-svg-icons'

import bio from '../../static/slides/bio.png'
import contact from '../../static/slides/contact.png'
import gallery from '../../static/slides/gallery.png'
import homeDektop from '../../static/slides/home-desktop.png'
import homeMobile from '../../static/slides/home-mobile.png'
import propInfo from '../../static/slides/prop-info.png'
import referrals from '../../static/slides/referrals.png'
import services from '../../static/slides/services.png'
import services2 from '../../static/slides/services-2.png'


export default function Kwcsd() {
    const classes = useStyles()

    return (
        <div className={classes.contentWrapper}>
            <div className={classes.flexCol}>
                <section className={classes.content}>
                    <h1> KWC San Diego</h1>

                    <h2>Abstract</h2>
                    <p>The pacific commercial partners previously had a dated and incomplete website. Initially their objective was to refurbish the existing site with new content, and better api integrations. It became clear that the best approach would be to create a new react based single page application to accommodate the needs of the pacific commercial partners.</p>

                    <p>The new SPA would need to accomplish 3 primary functions to meet the needs of the pacific commercial partners team. The application would need to host some basic marketing materials. Second, the app would need some custom API to handle scraping for some real estate listing data. And lastly, the app would need another API to handle some input forms etc.</p>

                    <hr className={classes.horizLine} />

                    <div style={{ justifyContent: 'space-around', alignItems: 'flex-start' }} className={classes.flexRow}>

                        <div className={classes.flexCol}>
                            <h2>Libraries Used</h2>
                            <div className={classes.list}>
                                <i class="fas fa-terminal">&nbsp; React</i><br />
                                <i class="fas fa-terminal">&nbsp; Material-UI</i><br />
                                <i class="fas fa-terminal">&nbsp; Axios</i><br />
                                <i class="fas fa-terminal">&nbsp; Styled-Components</i><br />
                                <i class="fas fa-terminal">&nbsp; React-Router</i><br />
                                <i class="fas fa-terminal">&nbsp; Yup</i><br />
                            </div>
                        </div>

                        <div className={classes.flexCol}>
                            <h2>Currently under development</h2>
                            <div className={classes.list}>
                                <i class="fas fa-code-branch">&nbsp; Backend for admin to add / edit content</i><br />
                                <i class="fas fa-code-branch">&nbsp; Captcha</i><br />
                                <i class="fas fa-code-branch">&nbsp; Dynamic bio pictures</i><br />

                                <i class="fas fa-code-branch">&nbsp; Upgrade responsive design</i><br />
                                <i class="fas fa-code-branch">&nbsp; A summer vacation at a lake</i><br />
                            </div>
                        </div>
                    </div>

                    <hr className={classes.horizLine} />
                    <a className={classes.link}href='https://www.kwcsandiego.com'>KWC San Diego</a>
                </section>
            </div>

            <div class="ia-container">

                <figure>
                    <img src={bio} alt="image01" />
                    <input type="radio" name="radio-set" checked="checked" />
                    <figcaption><span>Meet The Team</span></figcaption>

                    <figure>
                        <img src={contact} alt="image02" />
                        <input type="radio" name="radio-set" />
                        <figcaption><span>Contact Page</span></figcaption>

                        <figure>
                            <img src={gallery} alt="image02" />
                            <input type="radio" name="radio-set" />
                            <figcaption><span>Dynamic Gallery</span></figcaption>

                            <figure>
                                <img src={homeDektop} alt="image02" />
                                <input type="radio" name="radio-set" />
                                <figcaption><span>Home Screen</span></figcaption>
                                <figure>
                                    <img src={homeMobile} alt="image02" />
                                    <input type="radio" name="radio-set" />
                                    <figcaption><span>Responsive Design</span></figcaption>
                                    <figure>
                                        <img src={propInfo} alt="image02" />
                                        <input type="radio" name="radio-set" />
                                        <figcaption><span>Form Submission</span></figcaption>

                                        <figure>
                                            <img src={referrals} alt="image02" />
                                            <input type="radio" name="radio-set" />
                                            <figcaption><span>iFrame Media</span></figcaption>

                                            <figure>
                                                <img src={services} alt="image02" />
                                                <input type="radio" name="radio-set" />
                                                <figcaption><span>Marketing Content</span></figcaption>

                                                <figure>
                                                    <img src={services2} alt="image02" />
                                                    <input type="radio" name="radio-set" />
                                                    <figcaption><span>Custom Bullets</span></figcaption>

                                                </figure>
                                            </figure>
                                        </figure>
                                    </figure>
                                </figure>
                            </figure>
                        </figure>
                    </figure>
                </figure>
            </div>

            <div className={classes.flexCol}>
                <section className={classes.content}>
                    <h2>Credits</h2>
                    <div className={classes.list}>
                        <li>1. Jason Fadelli - Creator</li>
                        <li>2. Dang Lu - Co-Creator &nbsp;<sup>(The guy who fixed everything and I'm convinced doesn't ever sleep)</sup></li>
                    </div>
                </section>
            </div>
        </div>
    )
}

