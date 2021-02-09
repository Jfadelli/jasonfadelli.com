import React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from './style';
import { NavLink } from 'react-router-dom'

export default function ServicesOffered() {
  const classes = useStyles();


  return (
    <div className={classes.navRoot}>
      <div>
        <NavLink className={classes.link} to='/home' >
          <Button className={classes.navButton}> Home </Button>
        </NavLink>
      </div>
    </div>
  );
}