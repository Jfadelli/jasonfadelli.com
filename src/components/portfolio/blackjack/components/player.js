import React from 'react';
import Card from './card'
import { useStyles } from '../../../../style/style'



export default function Player(){
    const classes = useStyles()
    return (
        <div className={classes.player}>
            <Card/>
            <Card />
        </div>
    )
}