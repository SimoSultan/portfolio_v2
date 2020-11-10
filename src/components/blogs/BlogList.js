// import React, { useRef, useState, useEffect } from 'react';
import React, { useRef, useEffect } from 'react';
import { blogList } from  './blogList.json';

// Material UI components 
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
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
  listItem: {
    zIndex: 10,
    "&:last-child": {
      marginBottom: '5%',
    }
  },
  contentContainer: {
    height: '130px'
  },
  media: {
    height: '150px',
    [theme.breakpoints.up('sm')]: {
      height: '225px',
    }
  },
  cardContainer: {
    margin: '0 auto',
  },
  list:{
    marginTop: '200px',
    zIndex: 50,
  }
}));


function BlogList() {
  const classes = useStyles();
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })
  const writingRef = useRef(null)
  const timeline = useRef(gsap.timeline({paused: true}))

  useEffect(() => {
    // start the projects word offscreen to the right
    // fade in slightly and to the scroll to the left as user scrolls down
    timeline.current.from(writingRef.current, {
        opacity: 0.1,
        x: '85%',
        scrollTrigger: { 
          trigger: writingRef.current,
          id: 'blog-pin-1',
          start: "top 80%",
          end: "bottom -50%",
          scrub: 1.5,
          pin: true,
          markers: true,
          toggleActions: 'play none none reverse'
        }
      })
    .to(writingRef.current, {
      opacity: 0.3,
    }, ">")
  }, [])



  const listItems = blogList.map(b => (

    <Grid key={b.name} item xs={ isLandscape ? 9 : 12 } sm={8} md={5} className={classes.listItem}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={b.img}
            title={b.name}
          />
          <CardContent className={classes.contentContainer}>
            <Typography gutterBottom variant="h5" component="h2">
              {b.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {b.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" target="_blank" href={b.link}>
            Read More
          </Button>
        </CardActions>
      </Card>
    </Grid>

  ))

  return (
    <>
      <Typography variant="h2" className="section-header section-header-blog" ref={writingRef}>WRITINGS</Typography>
      <Container className={classes.list}>
        <Grid container justify="center" alignItems="center" spacing={10} >
          {listItems.reverse()}
        </Grid>
      </Container>
    </>
  )

}

export default BlogList;