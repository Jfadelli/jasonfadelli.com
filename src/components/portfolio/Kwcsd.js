import React from 'react'
import { useStyles } from '../../style/style'

export default function Kwcsd() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.contentWrapper}>
                <div className={classes.header}>
                    <h1>KWC San Diego</h1>
                    <h2>A Custom React App for a Real Estate Broker</h2>
                </div>

                <hr className={classes.horizLine} />
                <h3>Sub Heading</h3> 
                <section className={classes.content}>
                    <p>Content</p>
                </section>

                <hr className={classes.horizLine} />
            
                <h3>Sub Heading</h3>
                <section className={classes.content}>
                    <p> Content </p><br/>
                    <p> Content </p>
                    </section>
                <hr className={classes.horizLine} />

                <h4>Disclaimer</h4>
            </div>
        </div>
    )
}