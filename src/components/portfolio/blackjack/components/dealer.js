import React from 'react';
import Card from './card'
import { useStyles } from '../../../../style/style'

export default function Dealer(){
    const classes = useStyles()
    return (
        <div className={classes.dealer}>
            <Card/>
            <Card/>
        </div>
    )
}