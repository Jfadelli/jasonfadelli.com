import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Fade from '@material-ui/core/Fade'
import Popper from '@material-ui/core/Popper'
import Paper from '@material-ui/core/Paper'

import { NavLink } from 'react-router-dom'

import { useMediaQuery } from '../hooks/mediaQuery'
import { useStyles } from '../style/style';
import { colors } from '../style/colors'

export default function MobileNav() {
    const isMobile = useMediaQuery('(max-width: 769px)');
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    return (
        <Box sx={{ flexGrow: 1 }} style={styles.container(isMobile)}>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper className={classes.mobileNavLinkContainer}>
                            <NavLink className={classes.mobileNavLink} to={'/home'}>Home</NavLink>
                            <NavLink className={classes.mobileNavLink} to={'/about/work-experience'}>Resume</NavLink>
                            <NavLink className={classes.mobileNavLink} to={'/contact/contact-form'}>Contact</NavLink>
                        </Paper>
                    </Fade>
                )}
            </Popper>
            <AppBar style={{ backgroundColor: colors.main }} >
                <Toolbar>
                    <Button onClick={handleClick('bottom-start')}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />

                        </IconButton>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}


const styles = {
    container: isMobile => ({
        display: isMobile ? 'flex' : 'none',
        backgroundColor: 'red'
    })
}