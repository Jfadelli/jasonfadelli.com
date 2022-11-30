import React from 'react'
import { useStyles } from '../../../style/style'
import KrkCarousel from './KrkCarousel'
import Nav from '../../nav/Nav'

import { pubgStatsStory } from './krkWineStory'
import { stackAndFeatures } from './stackAndFeatures'

export default function KrkWine() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Nav />
            <div className={classes.contentWrapper}>

                <div className={classes.content}>

                    <div className={classes.kwcAboutContent}>
                        <h1> KRK WINE </h1>
                        <h3>e-commerce web app </h3>
                        <br /><br />
                        <h2>Abstract</h2>
                        <p className={classes.bioContent}>
                            {krkWineStory.map((e) => (
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
                                {stackAndFeatures.stack.map((e) => (
                                    <div>
                                        <i className="fas fa-terminal">&nbsp;{e} </i><br />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={classes.flexCol}>
                            <div className={classes.list}>
                                <h2>Project / Site Features:</h2>
                                {stackAndFeatures.features.map((e) => (
                                    <div>
                                        <i className="fas fa-code-bran">&nbsp;{e} </i><br />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <hr className={classes.horizLine} />
                <div className={classes.content}>

                    <a className={classes.link} href='https://krk-wine-sanity-stripe.vercel.app/'>Visit KRK Wine Shop</a>
                    <br /><br />
                </div>

                <div className={classes.kwcCarousel}>
                    <KrkCarousel />
                </div>
                <div className={classes.content}>
                <br /><br /><br /><br />
                    <a className={classes.link} href='https://krk-wine-sanity-stripe.vercel.app/'>Visit KRK Wine Shop</a>
                    <br /><br /><br /><br /><br /><br /><br /><br />
                </div>
            </div>
        </div>
    )
}

