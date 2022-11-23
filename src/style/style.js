import { makeStyles } from '@material-ui/styles'
// import { device } from './device'
import { colors } from './colors'
import { font } from './fontSizes'

export const useStyles = makeStyles(() => ({
    app: {
        position: 'absolute',
        fontFamily: 'Tahoma, Arial, Helvetica, sans-serif',
        width: 'auto',
        minHeight: '100%',
        left: '0',
        right: '0',
        // overflow:'hidden',

    },

    landing: {
        // position: 'absolute',
        // top: 50,
        // left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100vw',
        height: '95vh',
        // overflow: 'hidden',
        zIndex: '1000',
        visibility: 'visible',
        opacity: '.2',
        transition: 'opacity 2s linear',
    },


    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    bg:{
        backgroundColor:'rgb(204, 204, 204, .3)',
        width:'900px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        boxShadow: '8px 8px 16px 0 rgba(0, 0, 0, 0.1)',
    },
    hero: {
        maxWidth: '1024px',
        borderRadius: '10px',
        margin: '20px auto',
        '& @media (max-width 1024px)': { display: 'none' }
    },

    header: {
        color: colors.dark,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: font.large,
        margin: '1rem 0 ',
    },

    // content 
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: colors.dark,
        // backgroundColor:'green',
        marginTop: '25px',
        fontSize: font.medium,
        borderRadius: '6px',
        boxShadow: '8px 8px 16px 0 rgba(0, 0, 0, 0.5)',
        width: '800px',
        '& h1': {
            fontSize: font.extraLarge,
            padding: '0',
            margin: '5px 0 1vh 0',
            textAlign: 'center',
            width: 'auto',
        },
        '& h2': {
            display: 'flex',
            fontSize: font.medium,
            justifyContent: 'center',
            padding: '0',
            margin: '0 0 1vh',
            textAlign: 'center',
            width: 'auto',
        },
        '& h3': {
            fontSize: font.small,
            fontWeight: '400',
            textAlign: 'center',
            margin: '1vh 5% 0vh 5%',
            padding: '0',
            color: 'black',
            textDecoration: 'none',
        },
        '&h4': {
            fontSize: '1 rem',
            textDecoration: 'bold',
            margin: '0'
        },
        '& p': {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: font.small,
            maxWidth: '700px'
        }
    },

    headerBody: {
        display: 'flex',
        justifyContent: 'center',
    },

    kwcCarousel: {

    },

    carouselCard: {
        display: 'flex',
        flexDirection: 'column',
        // width: '800px',
        height: 'auto',
        borderRadius: '10px',
        border: '0px solid gray',
        '& img': {
            borderRadius: '10px',

        },
        '&p': {
            backgroundColor: 'gray'
        }
    },
    carouselCardHeader: {
        border: 'inherit',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '50px',
        backgroundColor: '#b41e1e',

        opacity: '.8',

        '& h3': {
            textAlign: 'left',
            color: 'white',
        },

    },

    cardContainer: {
        display: 'flex',
        flexFlow: 'row wrap',
        margin: '4rem 0',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        maxWidth: '700px',
        // height: 'auto',
        gap: '20px 10px',
        '& .bullet-row': {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            width: '175px',
            margin: '-10px 0'
        },
        '& .front-side': {
            backgroundColor: '#2b2d42',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-around',
            boxShadow: '8px 8px 16px 0 rgba(0, 0, 0, 0.5)',
            textDecoration: 'none !important',
        },

        '& .back-side': {
            backgroundColor: '#5d6b83',
            borderRadius: '6px',
            display: 'flex',
            width: '200px',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '8px 8px 16px 0 rgba(0, 0, 0, 0.5)'
        },

        '& .card-title': {
            textDecoration: 'none !important',
            color: 'white',
            fontSize: '18px'
        },

        '& .cardBullet': {
            color: 'white',
            textDecoration: 'none',
        },

        '& .cardBulletText': {
            display: 'inline',
            textAlign: 'start',
            fontSize: "14px !important",
            color: 'white',
        },
    },

    cardWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },

    content: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        // backgroundColor:'white',
        maxWidth: '1024px',
        '& p': {
            margin: '1rem 0 .5rem'
        },
    },

    kwcAboutContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '90%',
        '&p': {
            width: '100%',
        }
    },

    bioContent: {
        display: 'flex',
        flexDirection: 'column',
        '& div': {
            margin: '12px',
        },
        '& .bio-card': {
            // backgroundColor: 'teal',
            border: '1px solid' + colors.dark,
            borderRadius: '6px',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 10px 5px',
            display: 'flex',
            flexDirection: 'column',
        },
        '& .bio-card-h-line-1': {
            margin: '0 auto 0vh auto',
            border: '1px dotted ' + colors.dark,
            borderRadius: '90px',
            maxWidth: '1024px',
            width: '92%'
        },
        '& .bio-card-h-line-2': {
            margin: '5px auto -10px auto',
            maxWidth: '1024px',
            width: '92%',
            backgroundColor: colors.dark,
            maxHeight: '1024px',
            height: '1px',
        },
        '& .bio-company-name': {
            fontSize: '40px'
        },
        '& .bio-card-left-container': {
            width: '250px',
            padding: 'none'
        },
        '& .bio-card-right-container': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            minHeight: '150px'
        },
        '& .bio-card-content-container': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        '& .bio-card-role': {
            fontSize: '18px',
            lineHeight: '1.5rem'
        },
        '& .bio-card-timeframe': {
            fontSize: '16px',
            lineHeight: '1.5rem'
        },
        '& p': {
            textAlign: 'justify',
            padding: '0 14px',
            fontSize: '16px'
        },
        '& vl': {
            margin: '0 auto 0vh auto',
            backgroundColor: colors.dark,
            maxHeight: '1024px',
            height: '120px',
            width: '1px'
        }

    },

    gallery: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '375px',
        maxWidth: '1024px',
    },
    home: {
        backgroundColor: 'white',
        borderRadius: '8px',
        maxWidth: '800px'
    },

    link: {
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
        textDecoration: 'none',
        color: colors.main,
        fontWeight: '600',
        fontSize: '1.5rem',
        textAlign: 'center',
        borderBottom: `dotted ${colors.main} 1px`,
        lineHeight: '3rem',
        width: '50%',
        '&:hover': {
            color: colors.accent,
            borderBottom: `dotted ${colors.accent} 1px`
        }
    },

    linkToLoopnet: {
        textDecoration: 'none',
        color: colors.alt,
        fontWeight: '400',
        fontSize: '2rem',
        margin: '0 0 2vh 0',
        textAlign: 'center',
        '&:hover': {
            color: 'rgb(230 70 1)',
        }
    },

    // decorations
    horizLine: {
        margin: '1vh auto 4vh auto',
        border: '1px dotted ' + colors.dark,
        borderRadius: '90px',
        maxWidth: '700px',
        width: '100%'
    },

    // flex
    flexRow: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignSelf: 'center',
        maxWidth: '1024px',
        width: '100%',
    },
    flexCol: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "left",
        margin: "2vh 5%",
    },
    flexRowTight: {
        display: "flex",
        margin: '1rem 0 ',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        maxWidth: '1024px',
        width: '100%',
    },

    // font styles
    p: {
        fontSize: "1rem",
    },
    list: {
        fontSize: "1.15rem",
        margin: " .5rem 0",
        padding: "0 0 0 .5rem",
        '& li, ol, ul, i': {
            padding: "0 0 .5rem 1rem",
        },
        '& h2': {
            whiteSpace: 'nowrap',
        },
    },
    specUL: {
        marginLeft: '25px',
    },
    specOL: {
        marginLeft: '20px',
    },
    heading: {
        display: 'flex',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: "1.5rem",
        margin: "0 8rem",
        padding: "0rem",
    },
    subHeading: {
        font: colors.dark,
        margin: '2rem 0',
        textAlign: 'center',
    },

    // navbar
    topSpace: {
        padding: '.25vh'
    },

    spacedDiv: {
        width: '800px',

    },
    navToolbar: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        height: '100%',
        gap: '20px',
        justifyContent: 'space-evenly',


    },
    navBar: {
        display: 'flex',
        borderRadius: '4px',
        flexWrap: 'none',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bg,
        height: '40px',
        marign: '0 0 1vh 0',
        position: 'relative',
        zIndex: ' 500',
        width: '100%',
        minWidth: '600px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 10px 5px',
        
    },

    mobileNavLink: {
        fontSize: '20px',
        textDecoration: 'none',
        margin: '4px 0 4px 5px',
        color: colors.main
    },
    mobileNavLinkContainer: {
        display: 'flex',
        flexDirection: 'column',
        width:'100px',
        height:'auto'

    },
    menuList: {
        zIndex: '200',
    },

    // navButton: {
    //     fontSize: '100px',
    //     color:'pink'
    // },


    // nav buttons and links are in navbar '../components/navbar/style.js'


    fadeEnter: {
        opacity: '0'
    },
    fadeExit: {
        opacity: '1',
    },
    fadeEnterActive: {
        opacity: '1',
        transition: 'opacity 500ms',
    },
    fadeExitActive: {
        opacity: '0',
        transition: 'opacity 500ms',
    },

    // black jack styles

    rankTL: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: '0 5px'

    },
    rankBR: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: '0 5px'
    },

    suite: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    bjTable: {
        borderBottomLeftRadius: '512px',  /* 100px of height + 2px of border */
        borderBottomRightRadius: '512px', /* 100px of height + 2px of border */
        margin: '1em 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        height: '700px',
        width: '1024px',
        // backgroundImage: 'url(http://api.thumbr.it/whitenoise-361x370.png?background=004A00A&noise=5c5554&density=13&opacity=33)',
        borderRadius: '20px',
        border: '6px solid #7a5c00',
        backgroundColor: 'darkgreen',
        zIndex: '100',
        '& .circTxt': {
            position: 'relative',
            zIndex: '10',
            color: 'black',

        },
    },

    dealerArea: {
        height: '200px',
        width: '600px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        border: '3px solid #FFBF00',
        borderTop: '0px',
        borderRadius: '0 0 300px 300px',

    },

    dealer: {
        display: 'flex',
    },

    playerArea: {
        height: '200px',
        width: '600px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    player: {
        display: 'flex',
    },

    pScore: {
        display: 'flex',
        border: '1px solid yellow',
        borderRadius: '6px',
        height: '30px',
        width: '30px',

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightyellow',
        color: 'red'
    },
    bjControls: {
        // margin:'20px',
        display: 'flex',
        width: '400px',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    bjButtonLeft: {
        position: 'relative',
        left: '10px'
    },
    bjButtonMiddle: {
        position: 'relative',

    },
    bjButtonRight: {
        position: 'relative',
        right: '10px'
    },


    bjExitButton: {
        display: 'flex',
        opacity: '.4',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        zIndex: '2000',
        backgroundColor: 'black',
        border: '2px solid',
        borderRadius: '6px',
        lineHeight: '1',
        margin: '10px 20px 20px 20px',
        height: '50px',
        width: '150px',
        color: '#FFBF00',
        fontSize: '2em',
        '&:hover': {
            boxShadow: '0 0.5em 0.5em -0.4em var(--hover)',
            transition: '.3s',
            opacity: '1'

        }
    },
    bjButton: {
        zIndex: '2000',
        background: 'none',
        backgroundColor: 'black',
        border: '2px solid',
        borderRadius: '6px',
        lineHeight: '1',
        margin: '0 20px 20px',
        height: '70px',
        width: '150px',
        color: '#FFBF00',
        fontSize: '2em',
        '&:hover': {
            boxShadow: '0 0.5em 0.5em -0.4em var(--hover)',
            backgroundColor: 'green',
            transition: '.3s',
            color: 'black',
        }
    }
}))