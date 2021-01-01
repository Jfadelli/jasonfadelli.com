import React from 'react'
import { SocialIcon } from 'react-social-icons';

const style = {
    margin:'0 10px'}

export default function SocialMedia() {
    return(
        <div>
            <SocialIcon style={style} url="http://linkedin.com/in/jfadelli" />
            <SocialIcon style={style} url="https://github.com/Jfadelli" />
            <SocialIcon style={style} url="https://www.facebook.com/jfadelli" />
            <SocialIcon style={style} url="https://app.codesignal.com/profile/jason_f61" />
            <SocialIcon style={style} url="https://jfadelli.medium.com/" />
        </div>

    )
}