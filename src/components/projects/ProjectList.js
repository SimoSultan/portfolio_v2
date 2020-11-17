import React, { useRef } from 'react';
import { projectList } from  './projectList.json';
import DevIcons from './DevIcons';

// Material UI components 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core/styles';

// import { useMediaQuery } from 'react-responsive'

import ReactHtmlParser from 'react-html-parser'

// custom styling
import '../../stylesheets/App.css'

// import axios from 'axios'

// animation library and plugins
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
    logo: {
        width: '50%'
    },
    gif: {
        width: '100%',
        padding: '0',
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    listItem: {
        height: '100%',
        marginBottom: '12%',
        "&:last-child": {
        marginBottom: '5%',
        }
    },
    iconList: {
        height: 'max-content',
        width: '100%'
    },
    appHeader: {
        width: 'max-content',
        maxWidth: '90%',
        fontWeight: 'bold',
    },
    appDescriptions: {
        textAlign: 'left',
        paddingTop: '3%'
    },
    root: {
        paddingLeft: '8px',
        paddingRight: '8px'
    },
    list:{
        marginTop: '19%',
    },

    projectsHorizontalWordMobile: {
        marginTop: '-14.5%', 
        opacity: 0.3,
        marginLeft: '8%', 
        position: 'absolute',
    },
    projectsHorizontalWordTabletDesktop: {
        position: 'absolute',
        marginTop: '-10%', 
        opacity: 0.3,
        marginLeft: '20%', 
    }    
}));





function ProjectList() {
    const classes = useStyles();

    // const timeline = useRef(gsap.timeline({paused: true}))
    // const projectRef = useRef(null)
    const revealRefs = useRef([])
    revealRefs.current = []

    // const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })
    // // const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    // const isDesktopOrLaptop = useMediaQuery({
    //     query: '(min-device-width: 1020px)'
    // })  
    // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    // const isMobile = useMediaQuery({ query: '(max-width: 411px)' })

//   useEffect(() => {
//     // start the projects word offscreen to the right
//     // fade in slightly and to the scroll to the left as user scrolls down
//     timeline.current.from(projectRef.current, {
//         opacity: 0.1,
//         x: '80%',
//         scrollTrigger: { 
//           trigger: projectRef.current,
//           id: 'project-pin-1',
//           start: "top 80%",
//           end: "bottom -50%",
//           scrub: 1.5,
//           pin: true,
//         //   markers: true,
//           toggleActions: 'play none none reverse'
//         }
//       })
//     .to(projectRef.current, {
//       opacity: 0.3,
//     }, ">")
//   }, [])



    function hide(elem) {
        gsap.to(elem, {autoAlpha: 0, duration: 1.25, ease:'expo'});
    }

    const addToRefs = (el) => {
        if( el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el)
        }
        hide(el); // assure that the element is hidden when scrolled into view
        ScrollTrigger.create({
            trigger: el,
            start: 'top 70%',
            end: 'bottom -10%',
            scrub: 3,
            onEnter: function() { animateFrom(el) }, 
            onLeave: function() { hide(el) }, // assure that the element is hidden when scrolled into view
            onEnterBack: function() { animateFrom(el, -1) },
            onLeaveBack: function() { hide(el) } // assure that the element is hidden when scrolled into view
        });
    }

    function animateFrom(elem, direction) {
        direction = direction | 1;
        let x = 0,
            y = direction * 100;
        if(elem.classList.contains('reveal_fromLeft')) {
            x = -100;
            // y = direction * 100;
        } else if(elem.classList.contains('reveal_fromRight')) {
            x = 100;
            // y = direction * 100;
        }
        gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
            duration: 1.25, 
            x: 0,
            y: 0, 
            autoAlpha: 1, 
            ease: "expo", 
            overwrite: "auto"
        });
    }


    const listItems = projectList.map(p => (

        <ListItem key={p.name} className={classes.listItem} >

            <Grid container spacing={3} direction={(p.id % 2 === 0) ? "row" : "row-reverse"} justify ="center" alignItems="center" >

                <Grid item container xs={12} sm={8} md={5} justify="center" alignItems="center" className={`${(p.id % 2 === 0) ? "reveal_fromLeft" : "reveal_fromRight"}`} ref={addToRefs}>
                    <Paper className={classes.paper}>
                        <MuiThemeProvider theme={theme}>

                        <Grid item container>
                            <Grid item container xs={4} justify="center" alignItems="center">
                                <img className={classes.logo} src={p.logo} alt="logo"/>
                            </Grid>

                            <Grid item container xs={8} justify="flex-start" alignItems="center">
                                <Typography variant="h4" className={classes.appHeader}>
                                    {p.name}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container item direction="column" justify="flex-start" alignItems="flex-start">
                            <Typography className={classes.appDescriptions}>
                                {p.what}
                            </Typography>

                            <Typography className={classes.appDescriptions}>
                                {/* {p.why} */}
                                {ReactHtmlParser(p.why)}
                            </Typography>
                        </Grid>

                        <Grid item container direction="row" justify="space-around" alignItems="center" className={classes.iconList} >
                            <DevIcons iconList={p.stack}/>
                        </Grid>

                        <Grid container direction="row" justify="flex-start">
                            <Button href={p.deployed} color="primary" target="_blank" disabled={p.deployed === false} style={{ cursor: 'pointer' }}>
                            {`DEMO${!p.deployed ? ': n/a' : ''}`}
                            </Button>
                            <Button href={p.github} color="primary" target="_blank" disabled={p.github === false}  style={{ cursor: 'pointer' }}>
                                {`SOURCE CODE${!p.github ? ': private' : ''}`}
                            </Button>
                        </Grid>

                        </MuiThemeProvider>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={9} md={7} className={`${(p.id % 2 === 0) ? "reveal_fromRight" : "reveal_fromLeft"}`} ref={addToRefs}>
                    <Paper>
                        <a href={p.deployed} target="_blank" rel="noopener noreferrer"><img className={classes.gif} src={p.gif} alt="app-demo"/></a>
                    </Paper>
                </Grid>

            </Grid>
        </ListItem>

    ))

    return (
        <Container>
            <Container>
                <List className={classes.list}>
                    <Container>
                        {listItems.reverse()}
                    </Container>
                </List>
            </Container>
        
        </Container>
    ) 

}

export default ProjectList;