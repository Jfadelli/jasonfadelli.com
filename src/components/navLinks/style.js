import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../style/colors'

export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      overflow: "visible !importants",
      position:'relative',
      zIndex: 'auto'
    },
    navButton: {
      fontFamily: 'Tahoma, Arial, Helvetica, sans-serif',
      display: 'flex',
      fontWeight:'550',
      whiteSpace: 'nowrap',
      width: '150px',
      fontSize: "1.5rem",
      color: colors.alt,
      lineHeight: '1.5rem',
      margin: '0 20% 0 20%',
      position:'relative',
      zIndex: '6000',
      textTransform: 'none'
    },
    link:{
        color: "black",
        textDecoration:'none',
    },
    menuList:{
      backgroundColor:'white',
      margin: '10px',
      position:'relative',
      zIndex: '8000',
    },
    popper:{
      position: 'relative',
      zIndex:'7000'
    }
}));

  