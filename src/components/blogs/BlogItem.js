import React from 'react'

import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

// responsive plugin
import { useMediaQuery } from 'react-responsive'

// animation library and plugins
import { useSpring, animated } from 'react-spring'
import Fade from 'react-reveal/Fade';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(() => ({

    listItem: {
        zIndex: 10,
        transition: 'transform 0.5s ease-in-out',
        "&:hover": {
            transform: 'scale(1.03)',
        },
        "&:hover .makeStyles-media-224": {
            transform: 'scale(1.1)',
        },
        "&:last-child": {
            marginBottom: '5%',
        },
        boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
        willChange: 'transform',
    },

    contentHeading: {
        fontStyle: 'italic',
    },
    media: {
        height: '150px',
        [theme.breakpoints.up('sm')]: {
            height: '175px',
        }
    },
    blogItemButton: {
        cursor: 'pointer',
        color: '#F2511B',
        letterSpacing: '1px',
        fontFamily: 'Roboto Slab',
        fontSize: '1.1rem',
    },
    blogButtonCont: {
        marginBottom: '2%',
        "&:hover > *:last-child": {
            opacity: 0,
        },
    },
    blogButtonUnderline: {
        width: '115px',
        height: '2px',
        backgroundColor: '#F2511B',
        margin: '-9px 0 0 8px',
        transition: 'opacity .35s ease-in-out',
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

            <div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>

                <animated.div style={{ transform: props.xy.interpolate(trans1)}} >

                    <Fade left mirror={index % 2 === 0}>

                        <Card className={classes.listItem}>

                            <CardActionArea
                                href={blog.link}
                                target="_blank" 
                                rel="noopener noreferrer"
                            >

                                <CardMedia
                                    className={classes.media}
                                    image={blog.img}
                                    title={blog.name}
                                />

                                <CardContent className={classes.contentContainer}>

                                    <Typography gutterBottom variant="body1" className={classes.contentHeading}>

                                        {blog.name}

                                    </Typography>

                                </CardContent>

                            </CardActionArea>

                            <CardActions>

                                <div className={classes.blogButtonCont}>

                                    <Button 
                                        href={blog.link}
                                        target="_blank" 
                                        className={classes.blogItemButton}
                                    >

                                        Read More

                                    </Button>

                                    <div className={classes.blogButtonUnderline} />

                                </div>

                            </CardActions>

                        </Card>

                    </Fade>

                </animated.div>
            
            </div>

        </Grid>
    )
}

export default BlogItem
