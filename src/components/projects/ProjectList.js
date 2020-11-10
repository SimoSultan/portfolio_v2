// import React, { useRef, useState, useEffect } from 'react';
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
    marginTop: '150px',
  },
  // animationDiv: {
  //   height: '100%',
  //   width: '100%',
  //   position: 'absolute',
  //   // zIndex: '-200',
  // }
}));





function ProjectList( { projectCont } ) {
    const classes = useStyles();
    //   const [tl, setTl] = useState(gsap.timeline({paused: true}))
    // const [projectListS3, setProjectListS3] = useState([])

    // const animationDivRef = useRef(null)
    const projectRef = useRef(null)
    const revealRefs = useRef([])
    revealRefs.current = []

    // async function getProjectList() {
    //     console.log('here2');
    //     let url = 'https://simo-sultan-portfolio-v2.s3-ap-southeast-2.amazonaws.com/projectList.json'
    //     let { data } = await axios.get(url,{
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //           },
    //     })
    //     console.log('here3');
    //     console.log(data);
    //     // setProjectListS3(data)
    //     return data.json()
    // }

    // useEffect(() => {
    //     console.log('here');
    //     getProjectList()
    // }, [])


//   useEffect(() => {

//     // ScrollTrigger.create({
//     //   animation: tl,
//     //   trigger: animationDivRef.current,
//     //   start: "top 80%",
//     //   end: "bottom",
//     //   markers: true,
//     //   scrub: 1.5,
//     //   pin: true,
//     // });

//     // start the projects word offscreen to the right
//     // fade in slightly and to the scroll to the left as user scrolls down
//     tl.from(projectRef.current, {
//       x: '95%',
//       opacity: 0.1,
//       scrollTrigger: {
//         trigger: projectCont.current,
//         id: 'scroll-in',
//         start: "top 80%",
//         end: "bottom",
//         scrub: 1.5,
//         markers: true,
//         toggleActions: 'play none none reverse'
//       }
//     })
//     // pin the word once it reaches a certain height
//     .to(projectRef.current, {
//       // opacity: 0.2,
//       scrollTrigger: { 
//         trigger: projectRef.current,
//         id: 'pin-2',
//         start: "top 50%",
//         end: "bottom",
//         scrub: 1.5,
//         pin: true,
//         markers: true,
//         toggleActions: 'play none none reverse'
//       }
//     }, ">")
//     // keeping the word pinned more
//     // .to(projectRef.current, {
//     //   // opacity: 0.3,
//     //   scrollTrigger: {
//     //     trigger: projectRef.current,
//     //     id: 'pin-3',
//     //     start: 'top 50%',
//     //     end: "bottom 50%",
//     //     pin: true,
//     //     scrub: 1.5,
//     //     markers: true,
//     //     toggleActions: 'play none none reverse'
//     //   }
//     // }, ">")
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
      start: 'top 75%',
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
                    <Typography variant="h4" className={classes.appHeader}>{p.name}</Typography>
                    </Grid>
                </Grid>

                <Grid container item direction="column" justify="flex-start" alignItems="flex-start">
                    <Typography className={classes.appDescriptions}>{p.what}</Typography>
                    <Typography className={classes.appDescriptions}>{p.why}</Typography>
                </Grid>

                <Grid item container direction="row" justify="space-around" alignItems="center" className={classes.iconList} >
                    <DevIcons iconList={p.stack}/>
                </Grid>

                <Grid container direction="row" justify="flex-start">
                    <Button href={p.deployed} color="primary" target="_blank" style={{ cursor: 'pointer' }}>DEMO</Button>
                    <Button href={p.github} color="primary" target="_blank" style={{ cursor: 'pointer' }}>SOURCE CODE</Button>
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
        <>
            {/* <div className={classes.animationDiv} ref={animationDivRef}></div> */}

            <Typography variant="h2" className="section-header" ref={projectRef}>PROJECTS</Typography>
            <Container>
                <List className={classes.list}>
                {listItems}
                </List>
            </Container>
        
        </>
    ) 

}

export default ProjectList;