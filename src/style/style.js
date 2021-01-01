import { makeStyles } from '@material-ui/styles'
import { colors } from './colors'
import bg from '../static/bg.jpg'

const theme = {
    text: colors.darkColor,
    bg: colors.secondaryColor,
    dark: colors.darkColor,
}

export const useStyles = makeStyles(() => ({
    app:{
        fontFamily: 'Arial, Helvetica, sans-serif',
        // backgroundImage: `url(${bg})`,
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        backgroundColor: theme.bg,
        height: '100%',
        minHeight: '100vh'
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        flexGrow: 1,
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
    },

    hero:{
        maxWidth: '1024px',
        borderRadius: '10px',
        margin: '20px auto',
        '& @media (max-width 1024px)':{ display: 'none'}
    },

    header:{
        color: colors.secondaryColo,
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        fontSize: '2rem', 
    },

    // content 
    contentWrapper:{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        color: theme.text,
        fontSize: '1rem',
        '& h1':{
            fontSize: '4rem',
            padding: '0',
            margin: '5px 0 3vh 0',
            textAlign: 'center',
            width: 'auto'
        },
        '& h2':{
            display:'flex',
            fontSize: '2rem',
            justifyContent: 'center',
            padding: '0',
            margin: '-1vh 0 1vh',
            textAlign: 'center',
            width: 'auto',
        },
        '& h3':{
            fontSize:'1.5rem',
            fontWeight:'400',
            textAlign: 'center',
            margin: '1vh 0 0vh 0',
            padding: '0'  
        },
        '&h4':{
            fontSize: '1 rem',
            textDecoration: 'bold',
            margin: '0'
        },

    },

    content:{
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyCntent: 'center',
        alignItems:'center',
        width:'100vw',
        maxWidth: '1024px',
        '& p':{ 
            margin: '1rem 0 .5rem'
        }
    },

    gallery:{
        alignSelf:'center',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '375px',
        maxWidth: '1024px',
    },

    link:{
        textDecoration: 'none',
        color: colors.accentColor,
        fontWeight: '500',
        fontSize: '1.5rem',
        textAlign:'center',
        borderBottom: 'dotted black 1px',
        lineHeight: '3rem',
        width: '50%',
        '&:hover':{
            color: colors.primaryColor,
            borderBottom: 'dotted rgb(230 70 1) 1px'
        }
    },

    linkToLoopnet:{
        textDecoration: 'none',
        color: colors.secondaryColor,
        fontWeight: '400',
        fontSize: '2rem', 
        margin: '0 0 2vh 0',
        textAlign:'center',
        '&:hover':{
            color: 'rgb(230 70 1)',
        }
    },

    // decorations
    horizLine:{
        margin: '1vh auto 4vh auto',
        border: '1px dotted '+ theme.dark,
        borderRadius: '90px',
        maxWidth: '1024px',
        width: '100%'
    },

    // flex
    flexRow: {
        display: "flex",
        flexDirection:'row',
        justifyContent: "space-evenly",
        alignSelf:'center',
        maxWidth: '1024px',
        minWidth: '1023px',
        width: '100%',
    },
    flexCol: { 
        display: "flex",
        flexDirection: "column",    
        justifyContent: "center",
        textAlign: "left",
        margin: "2vh 5%",
    },

    // font styles
    p:{
        fontSize: "1rem",
    },
    list:{
        fontSize: "1.15rem",
        margin: " .5rem 0",
        padding: "0 0 0 .5rem",
        '& li, ol, ul, i':{
            padding: "0 0 .5rem 1rem",
        }
    },
    heading:{
        display: 'flex',
        alignSelf: 'center',
        textAlign:'center',
        fontSize: "1.5rem",
        margin: "0 8rem",
        padding: "0rem",
    },
    subHeading:{
        font: colors.darkColor,
        margin: '2rem 0',
        textAlign: 'center',
    },

    // referrals page
    iFrame:{
        margin: '4vh 0 0 0',
        maxWidth: '90%',
        maxHeight: '50vh',
    },

    // navbar
    topSpace:{
        padding:'.25vh'
    },

    navBar:{ 
        display: 'flex',
        flexWrap: 'none',
        flexDirection: 'row',
        justifyContent: 'center',

        backgroundColor: colors.primaryColor,
        height: '3.5rem',
        margin: '1rem 0 2rem',
        position: 'relative',
        zIndex:' 500',
        width: '100%',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 10px 5px',

    },
    navToolbar:{
        display:'flex'

    },

    // contact us
    contactUs:{
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        '& label':{
            fontSize: '1.25rem',
            margin: '0 0 .5rem',
            maxWidth: '400px',
        },
        '& button':{
            margin: '2rem 2rem 2rem 150px',
            fontSize: '1.25rem',
            fontWeight: '600',
            height: '30px',
            width: '120px',
            color: colors.primaryColor,
            backgroundColor: colors.secondaryColor,
            borderRadius: '4px'
        },
        '& input':{
            display: 'flex',
            margin: '0 0 2rem',
            outline: 'none',
            width: 'auto',
            height: '2.0rem',
            border: '2px solid rgb(185, 185, 185)',
            borderRadius: '4px',
            fontSize: '1.25rem',
            maxWidth: '400px',
            minWidth: '400px',
        },

        '& textarea':{
            display: 'block',
            width:' 400px',
            overflow: 'hidden',
            maxWidth: '400px',
            minHeight: '6rem',
            lineHeight: '20px',
            fontSize: '1.5rem',
            backgroundColor: colors.secondaryColor
        }
 
    },
    contactImg: {
        maxWidth: '500px',
        maxHeight: '500px',
        margin: ' 0 20px',
        borderRadius: '6px',
        boxShadow: '0 10px 10px 2px rgba(0,0,0,0.2)',
        transition: '0.3s',
    },
}));