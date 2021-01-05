import React from 'react'
import {Link} from 'react-router-dom'
import { useStyles } from '../../../../style/style'

export default function About() {
    const classes = useStyles()
        
        return (
            <div className={classes.contentWrapper}>
                <div className={classes.content}>
            <div className={classes.flexCol}>
                <Link className={classes.link} to='/portfolio/game-of-life/'>Back to the Game</Link>
                <h1>Introduction</h1>
                <p>Conway's Game of Life is a cellular automaton devised by the British mathematician 
                John Horton Conway in 1970.[1] It is a zero-player game, meaning that its evolution 
                is determined by its initial state, requiring no further input. One interacts with 
                the Game of Life by creating an initial configuration and observing how it evolves. 
                It is Turing complete and can simulate a universal constructor or any other Turing 
                machine. [1]

                This repository contains a fully functional Javascript powered application as well 
                as an unfinished Python file. This entire document pretains to the JS creation. I 
                thought it could be favorable to include both versions in the repository.

                If you are interested in using the application that I have created, it can be found 
                here ____. The instructions are below. 
                </p>

                <h3>Instructions:</h3>
                <p>This is a zero player game. The only control given are the initial parameters. 
                
                The game will automatically load with a randomly seeded board. The rules that 
                the game follows to decide how the board will behave, are as follows:
                </p>

                <h3>Conway's Game of Life Rules:</h3>
                <div className={classes.list}>
                    <ol>1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.</ol>
                    <ol>2. Any live cell with two or three live neighbours lives on to the next generation.</ol>
                    <ol>3. Any live cell with more than three live neighbours dies, as if by overpopulation.</ol>
                    <ol>4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</ol>
                </div>
                <h3>These rules can be distilled into the following:</h3>
                <div className={classes.list}>
                    <ol>1. Any live cell with two or three live neighbours survives.</ol>
                    <ol>2. Any dead cell with three live neighbours becomes a live cell.</ol>
                    <ol>3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.</ol>
                </div>

                <h3>Controls:</h3>
                <div className={classes.list}>
                    <ul>Play: Sets the game into motion.</ul>
                    <ul>Pause: Pauses the game.</ul>
                    <ul>Clear: Clears the game board.</ul>
                    <ul>Seed: Randomly generates a new seed.</ul>
                    <ul>Step Forward: Ticks the game forward one generation.</ul>
                    <ul>Speed: Chooses the rate at with the generations progress.</ul>
                    <ul>Size: selects the size of the game board.</ul>
                </div>      

                <h3>The Requirement</h3>
                <p>I was tasked with recreating the Game of Life (GOL) in whatever language I saw fit. 
                So far with my education at lambda I have had experience with, HTML, CSS, Javascript, 
                mostly in the form of React, and with Python. I elected to complete the task using React,
                as that is the language that I am most framiliar with. 
                </p>
                <br/>
                <h3>My Thought Process</h3>
                <p>Initial planning lead me to outline several basic components that I would need to create 
                in order to replicate Conway's GOL. Those components are as follows:
                </p>
                <div className={classes.list}>
                    <ol>1. Game board</ol>
                    <ol>2. Box/Cell</ol>
                    <ol>3. Selection Method</ol>
                    <ol>4. Play Method</ol>
                    <ol>5. Logic Operations</ol>
                </div>

                <h3>Component Design</h3>
                <div className={classes.list}>

                    <ol className={classes.specOL}>1. The Game Board</ol>
                    <ul className={classes.specUL}>The gameboard is constructed of a react class called Grid. It is 
                    initialized as an array of rows with a nested for loop that creates 
                    an array of columns and uniquly identifies each cell as boxId i_j.</ul>
                    <ol className={classes.specOL}>2. The Box/Cell</ol>
                    <ul className={classes.specUL}>Each box is passed in from the array as props and is renderd as a div 
                    that contains a unique ID and allows the onclick event, select box. </ul>

                    <ul className={classes.specUL}>The select box, triggers both a value of true, and tells the CSS to 
                    either render the box as, white (off state) or green (on state)</ul>

                    <ol className={classes.specOL}>3. The Selection Method</ol>
                    <ul className={classes.specUL}>Per the design spec the selection method needed to buffer the existing 
                    array and my selection method follows that guidline. The function clones 
                    the array with a helper function (it uses a cool trick that leverages 
                    parse and stringify) and checks to see if they new buffered array has 
                    any changes. Once it determines that the array does have a difference, 
                    it overwrites the original "current" array.</ul>

                    <ol className={classes.specOL}>4. The Play Method</ol>
                    <ul className={classes.specUL}>The play method also leverages teh double buffer design. It clones the 
                    array and then applies the logical parameteres defined be the rules. 
                    Once complete, the buffered array takes the place of the current array, 
                    and the generation counter increments by 1.</ul>

                    <ol className={classes.specOL}>5. The Logic Operations</ol>
                    <ul className={classes.specUL}>Each generation of the game is determined by applying a check to every 
                    single cell on the board. That check looks at all of the neighboring 
                    cells (eight per cell) and counts how many cells are alive or dead. If 
                    the cell has the magic number of 3 living cells, it will become alive. 
                    Otherwise the caell dies or remains dead. </ul>
                </div>
                <h3>Sources</h3>
                <ol className={classes.specOL}><a href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'>[1] https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life</a></ol>
                <ol className={classes.specOL}><a href='https://www.youtube.com/watch?v=PM0_Er3SvFQ'>[2] https://www.youtube.com/watch?v=PM0_Er3SvFQ</a></ol>
            </div>
            </div>
            </div>

        )
    }
