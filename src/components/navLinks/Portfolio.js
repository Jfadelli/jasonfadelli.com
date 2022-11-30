import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { useStyles } from './navStyle';
import { NavLink } from 'react-router-dom';

export default function Portfolio() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.navRoot}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={classes.navButton}
        >
          Projects
        </Button>
        <Popper className={classes.popper} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList className={classes.menuList} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <NavLink className={classes.link} to = '/portfolio/krk-wine'><MenuItem className={classes.menuItem} onClick={handleClose}>KRK Wine</MenuItem></NavLink>
                    <NavLink className={classes.link} to = '/portfolio/kwc-san-diego' ><MenuItem className={classes.menuItem} onClick={handleClose} >KWC San Diego</MenuItem></NavLink>
                    <NavLink className={classes.link} to = '/portfolio/pubg-stats'><MenuItem className={classes.menuItem} onClick={handleClose}>Pubg Stats</MenuItem></NavLink>
                    <NavLink className={classes.link} to = '/portfolio/game-of-life'><MenuItem className={classes.menuItem} onClick={handleClose}>Game of Life</MenuItem></NavLink>
                    <NavLink className={classes.link} to = '/portfolio/blackjack'><MenuItem className={classes.menuItem} onClick={handleClose}>Blackjack</MenuItem></NavLink>
                    
                    {/* <NavLink className={classes.link} to = '/portfolio/human-rights-first'><MenuItem className={classes.menuItem} onClick={handleClose}>Human Rights First</MenuItem></NavLink> */}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        
      </div>
    </div>
  );
}