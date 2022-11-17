import React from 'react'
// import { useStyles } from '../../style/style'
import './accordian.css'

import bio from '../../../static/slides/kwcsd/bio.png'
import contact from '../../../static/slides/kwcsd/contact.png'
import gallery from '../../../static/slides/kwcsd/gallery.png'
import homeDektop from '../../../static/slides/kwcsd/home-desktop.png'
import propInfo from '../../../static/slides/kwcsd/prop-info.png'
import referrals from '../../../static/slides/kwcsd/referrals.png'
import services from '../../../static/slides/kwcsd/services.png'
import services2 from '../../../static/slides/kwcsd/services-2.png'

export default function KwcCarousel() {
    // const classes = useStyles()

    return (
        <div class="ia-container">

            <figure>
                <img src={services2} alt="image02" />
                <input type="radio" name="radio-set" />
                <figcaption><span>Custom Bullets</span></figcaption>

                <figure>
                    <img src={gallery} alt="Dynamic Property Gallery" />
                    <input type="radio" name="radio-set" />
                    <figcaption><span>Dynamic Property Gallery</span></figcaption>


                    <figure>
                        <img src={services} alt="Marketing Content" />
                        <input type="radio" name="radio-set" />
                        <figcaption><span>Marketing Content</span></figcaption>

                        <figure>
                            <img src={bio} alt="Team Biographic Content" />
                            <input type="radio" name="radio-set" />
                            <figcaption><span>Team Biographic Content</span></figcaption>
                            <figure>

                                <img src={propInfo} alt="image02" />
                                <input type="radio" name="radio-set" />
                                <figcaption><span>Form Submission</span></figcaption>

                                <figure>
                                    <img src={referrals} alt="image02" />
                                    <input type="radio" name="radio-set" />
                                    <figcaption><span>iFrame Media</span></figcaption>

                                    <figure>

                                        <img src={contact} alt="image02" />
                                        <input type="radio" name="radio-set" />
                                        <figcaption><span>Contact Page with Validation</span></figcaption>

                                        <figure>
                                            <img src={homeDektop} alt="Professional Landing Page" />
                                            <input type="radio" name="radio-set" />
                                            <figcaption><span>Professional Landing Page</span></figcaption>



                                        </figure>
                                    </figure>
                                </figure>
                            </figure>
                        </figure>
                    </figure>
                </figure>
            </figure>
        </div>

    )
}

