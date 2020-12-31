import React from 'react'
import { useStyles } from '../../style/style'

export default function Gol() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.contentWrapper}>
                <div className={classes.header}>
                    <h1>Conway's Game of Life</h1>
                    <h2>A fun JSX rendition of Conway's Game of Life</h2>
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
                <section className={classes.content}>
                <h4>Disclaimer</h4>
                </section>
            </div>
        </div>
    )
}