import React, { useRef } from 'react';
import { blogList } from  './blogList.json';

// Material UI components 
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

// responsive plugin
import { useMediaQuery } from 'react-responsive'

// custom styling
import '../../stylesheets/App.css'

// animation library and plugins
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
    height: '150px',
    maxHeight: '500px',
    margin: '0'
  },
  listLink: {
    textDecoration: 'none',
  },
  listItem: {
    zIndex: 10,
    transition: 'transform 0.5s ease-in-out',
    "&:hover": {
        transform: 'scale(1.03)',
    },
    // "&:hover .makeStyles-media-224": {
    //     transform: 'scale(1.1)',
    // },
    "&:hover .makeStyles-contentContainer-221": {
        height: '150px',
    },
    "&:hover p": {
        opacity: 1,
    },
    "&:last-child": {
        marginBottom: '5%',
    }
  },
  contentContainer: {
    height: '60px',
    transition: 'height 0.5s ease-in-out',
  },
  contentDesc: {
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out',
  },
  contentHeading: {
    textAlign: 'center',
  },
  media: {
    height: '150px',
    // transition: 'transform 0.5s ease-in-out',
    [theme.breakpoints.up('sm')]: {
      height: '225px',
    }
    
  },
  cardContainer: {
    margin: '0 auto',
  },
  list:{
    marginTop: '20%',
    zIndex: 50,
    position: 'relative'
  }
}));




function BlogList() {
    const classes = useStyles();
    const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })
    // const writingRef = useRef()
    // const timeline = useRef(gsap.timeline({paused: true}))
    const revealRefs = useRef([])
    revealRefs.current = []


//   useEffect(() => {
//     // start the projects word offscreen to the right
//     // fade in slightly and to the scroll to the left as user scrolls down
//     timeline.current.from(writingRef.current, {
//         opacity: 0.1,
//         x: '85%',
//         scrollTrigger: { 
//           trigger: writingRef.current,
//           id: 'blog-pin-1',
//           start: "top 80%",
//           end: "bottom -50%",
//           scrub: 1.5,
//           pin: true,
//         //   markers: true,
//           toggleActions: 'play none none reverse'
//         }
//       })
//     .to(writingRef.current, {
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
      start: 'top 60%',
      scrub: 3,
      onEnter: function() { animateFrom(el, 1) }, 
      onLeave: function() { hide(el) }, // assure that the element is hidden when scrolled into view
      onEnterBack: function() { animateFrom(el, -1) },
      onLeaveBack: function() { hide(el) } // assure that the element is hidden when scrolled into view
    });
  }

  function animateFrom(elem, direction) {
    direction = direction | 1;
    let x = 0,
        y = direction * 150;
    if(elem.classList.contains('reveal_fromLeft')) {
      x = -20;
    } else if(elem.classList.contains('reveal_fromRight')) {
      x = 20;
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



  const listItems = blogList.map(b => (

    <Grid key={b.name} item xs={ isLandscape ? 9 : 12 } sm={8} md={5} className={`${(b.id % 2 === 0) ? "reveal_fromLeft" : "reveal_fromRight"}`} ref={addToRefs}>
    {/* <Grid key={b.name} item xs={ isLandscape ? 9 : 12 } sm={8} md={5} ref={addToRefs}> */}
        <a href={b.link} target="_blank" rel="noopener noreferrer" className={classes.listLink}>
            <Card className={classes.listItem}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={b.img}
                        title={b.name}
                    />
                    <CardContent className={classes.contentContainer}>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.contentHeading}>
                            {b.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.contentDesc}>
                            {b.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </a>
    </Grid>

  ))

    return (
        <>
            <Container className={classes.list}>
                <Grid container justify="center" alignItems="center" spacing={10} >
                {listItems.reverse()}
                </Grid>
            </Container>
        </>
    )

}

export default BlogList;