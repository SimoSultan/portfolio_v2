import React from 'react'

import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

// responsive plugin
import { useMediaQuery } from 'react-responsive'

// animation library and plugins
import { useSpring, animated } from 'react-spring'
import Fade from 'react-reveal/Fade';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(() => ({
    listLink: {
        textDecoration: 'none',
    },
    listItem: {
        zIndex: 10,
        transition: 'transform 0.5s ease-in-out',
        "&:hover": {
            transform: 'scale(1.03)',
        },
        "&:hover .makeStyles-media-224": {
            transform: 'scale(1.1)',
        },
        // "&:hover .makeStyles-contentContainer-379": {
        //     height: '140px',
        // },
        // "&:hover p": {
        //     opacity: 1,
        // },
        "&:last-child": {
            marginBottom: '5%',
        },
        boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
        willChange: 'transform',
    },
    // contentContainer: {
    //     height: '60px',
    //     transition: 'height 0.5s ease-in-out',
    // },
    // contentDesc: {
    //     opacity: 0,
    //     transition: 'opacity 0.5s ease-in-out',
    // },
    contentHeading: {
        textAlign: 'center',
    },
    media: {
        height: '150px',
        [theme.breakpoints.up('sm')]: {
            height: '225px',
        }
    },
}));





function BlogItem( { blog, index } ) {

    const classes = useStyles();
    const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })

    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
    const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    return (
        <Grid item xs={ isLandscape ? 9 : 12 } sm={8} md={5}>

        <a href={blog.link} target="_blank" rel="noopener noreferrer" className={classes.listLink}>

            <div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
   
                <animated.div style={{ transform: props.xy.interpolate(trans1)}} >

                    <Fade left mirror={index % 2 === 0}>

                        <Card className={classes.listItem}>

                            <CardActionArea>

                                <CardMedia
                                    className={classes.media}
                                    image={blog.img}
                                    title={blog.name}
                                />

                                <CardContent className={classes.contentContainer}>

                                    <Typography gutterBottom variant="h5" component="h2" className={classes.contentHeading}>

                                        {blog.name}

                                    </Typography>
    {/* 
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.contentDesc}>

                                        {blog.description}

                                    </Typography> */}

                                </CardContent>

                            </CardActionArea>

                        </Card>

                    </Fade>

                </animated.div>
            
            </div>
        </a>

    </Grid>
    )
}

export default BlogItem
