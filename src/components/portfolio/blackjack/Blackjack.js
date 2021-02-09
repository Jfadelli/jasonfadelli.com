import React from 'react'
import Table from './components/table'
import { useStyles } from '../../../style/style'
import './style.css'

export default function Blackjack() {
    const classes = useStyles()
    return (
        <div className={classes.contentWrapper}>
            <div className={classes.content}>
                <Table />
            </div>
        </div>
    )
}