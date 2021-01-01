import React from 'react'
// import { useStyles } from '../../style/style'
import './accordian.css'

import bio from '../../static/slides/bio.png'
import contact from '../../static/slides/contact.png'
import gallery from '../../static/slides/gallery.png'
import homeDektop from '../../static/slides/home-desktop.png'
import homeMobile from '../../static/slides/home-mobile.png'
import propInfo from '../../static/slides/prop-info.png'
import referrals from '../../static/slides/referrals.png'
import services from '../../static/slides/services.png'
import services2 from '../../static/slides/services-2.png'

export default function KwcCarousel() {
    // const classes = useStyles()

    return (
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

    )
}

