import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { useStyles } from '../../../style/style'

import { items } from './items'
import { settings } from './carouselSettings'

function KwcCarousel() {
    return (
        <div style={{ marginTop: "50px", color: "#494949" }}>
            <Carousel {...settings}>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    )
}

function Item(props) {
    const classes = useStyles()
    return (
        <div className={classes.carouselCard} >
            <div className={classes.carouselCardHeader}>
                <h3 >{props.item.name}</h3>
            </div>
            <p>{props.item.description}</p>
            <img src={props.item.Items[0].Image} />
        </div>
    )
}

export default KwcCarousel