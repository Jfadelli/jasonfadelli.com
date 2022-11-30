import { makeStyles } from '@material-ui/styles'
// import { device } from './device'
import { colors } from '../../style/colors'
import { font } from '../../style/fontSizes'

export const useStyles = makeStyles(() => ({
    contactRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.main,
        height:'100vh',
        width:'auto'

    },
    contactContentWrapper: {
        margin:' 0 0 80px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        color: colors.dark,
        backgroundColor:'white',
        marginTop: '50px',
        fontSize: font.medium,
        borderRadius: '6px',
        boxShadow: '8px 8px 16px 0 rgba(0, 0, 0, 0.5)',
        width: '800px',
    },
    bg: {
        backgroundColor: 'rgb(204, 204, 204, .3)',
        width: '900px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '8px 8px 16px 0 rgba(0, 0, 0, 0.1)',
    },

    // contact us
    contactUs: {
        alignSelf: 'center',
        display: 'flex',
        height: '600px',
        width: '350px',
        flexDirection: 'column',
        textAlign: 'left',
        alignItems: 'center',
        '& label': {
            fontSize: '1.25rem',
            margin: '20px 0 2px',
            maxWidth: '325px',
            textAlign: 'center',
        },
        '& button': {
            margin: '20px 0',
            fontSize: '1.25rem',
            fontWeight: '600',
            height: '40px',
            width: '120px',
            color: colors.white,
            backgroundColor: colors.main,
            border: '2px solid ' + colors.dark,
            borderRadius: '4px',
            '&:hover': {
                color: colors.dark,
                backgroundColor: colors.white,
                border: '2px solid ' + colors.dark,
                cursor: 'pointer'

            }
        },
        '& input': {
            display: 'flex',
            margin: '0 0 2rem',
            outline: 'none',
            width: 'auto',
            height: '2.0rem',
            border: '1px solid ' + colors.main,
            borderRadius: '4px',
            fontSize: font.medium,
            maxWidth: '325px',
            minWidth: '325px',
        },

        '& textarea': {
            display: 'block',
            width: ' 325px',
            overflow: 'hidden',
            maxWidth: '380px',
            minHeight: '6rem',
            lineHeight: '20px',
            fontSize: font.medium,
            backgroundColor: colors.white,
            border: '1px solid ' + colors.dark,
            borderRadius: '6px',
            padding: '10px',
            color: colors.dark,
        }
    },
    contactImg: {
        maxWidth: '350px',
        maxHeight: '350px',
        margin: ' 0 20px',
        borderRadius: '6px',
        boxShadow: '0 10px 10px 2px rgba(0,0,0,0.2)',
        transition: '0.3s',
    },
    shadowBox: {
        display: 'flex',
        justifyContent: 'center',
        width: '420px',
        boxShadow: 'rgba(0, 0, 0, 0.45) 5px 10px 15px',
        borderRadius: '6px',
        padding: '10px',
        backgroundColor: 'green',
    }
}))