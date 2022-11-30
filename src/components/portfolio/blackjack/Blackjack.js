import React from 'react'
import Table from './components/table'
import { useStyles } from '../../../style/style'
import './style.css'
// import Nav from '../../Nav'

let localBackgroundColorVar = "#1e1e1e"

export default function Blackjack() {
    const classes = useStyles()
    return (
        <div className={classes.root} style={{backgroundColor:localBackgroundColorVar, height:'100vh', opactiy:'.9'}}>
                <div className={classes.content}>
                    <Table style={{zIndex:'100'}}/>
                </div>

        </div>
    )
}