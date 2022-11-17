import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../style/colors'

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflow: "visible !importants",
    position: 'relative',
    zIndex: 'auto'
  },
  navButton: {
    fontFamily: 'Tahoma, Arial, Helvetica, sans-serif',
    fontWeight: '550',
    whiteSpace: 'nowrap',
    width: '100%',
    fontSize: "1.25rem",
    color: colors.alt,
    backgroundColor: colors.main,
    border: '1px solid ' + colors.alt,
    lineHeight: '1rem',
    height: '2rem',
    margin: '0 20% 0 20%',
    position: 'relative',
    zIndex: '6000',
    textTransform: 'none'
  },
  link: {
    color: colors.dark,
    textDecoration: 'none',
  },

  menuList: {
    margin: '10px',
    position: 'relative',
    zIndex: '8000',
    fontSize: '100px'
  },
  menuItem: {
    fontSize: '1rem',
    fontWeight: '700',
    borderRadius: '6px'
  },
  popper: {
    position: 'relative',
    zIndex: '7000',
  }
}));