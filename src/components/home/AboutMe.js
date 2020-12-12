import React from 'react';
import AnimatedButton from '../other/AnimatedButton'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, makeStyles } from '@material-ui/core/styles';

import Fade from 'react-reveal/Fade';
import { useSpring, animated } from 'react-spring'
import { useMediaQuery } from 'react-responsive'


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


const useStyles = makeStyles(() => ({
    paper: {
        textAlign: 'justify',
        color: theme.palette.text.secondary,
        padding: theme.spacing(3),
        transition: 'transform 1s',

    },
    buttonClass: {
        color: '#F2511B',
    },
    card: {
        position: 'absolute',
        borderRadius: '5px',
        willChange: 'transform',
    },
    okButtonCont: {
        "&:hover > *:last-child": {
            opacity: 0,
        },
    },
    okButtonUnderline: {
        width: '25%',
        height: '2px',
        backgroundColor: '#F2511B',
        margin: '-8px auto 0 auto',
        transition: 'opacity .2s ease-in-out',
    },
    boldText: {
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: '700',
    },
    italicsText: {
        fontFamily: 'Quicksand, sans-serif',
        fontStyle: 'italic',    }
}));


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`


function AboutMe({toggleAboutMeText}) {

    const classes = useStyles(theme)
    const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    return (


            <Grid container style={{zIndex: 500}}>

                <Fade left big>

                    <div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>

                        <animated.div style={{ transform: props.xy.interpolate(trans1)}} >

                            <Paper className={classes.paper}>

                                <Typography variant="h6" className={classes.boldText}>

                                    <strong>
                                        Why did I become a developer you ask?
                                    </strong>

                                </Typography>

                                <Typography variant={isLandscape ? 'body1' : 'body2'} className={classes.italicsText}>

                                    <em>Easy! For the creativity and problem solving. Coding is like a Maxibon for me, being better than the sum of its parts, where those parts are creativity and problem solving. I love the highs, learn from the lows and love the community and diversity surrounding tech. 
                                    <br />
                                    <br />
                                    I consider myself extremely lucky to have found my passion in life so young, where I can grow and learn, all whilst helping others through my code.</em>
                                    <br />
                                    <br />
                                    Check out my work on <strong><a style={{color: '#e66f47', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer" href="https://github.com/SimoSultan">GitHub</a></strong>, or grab my CV <strong><a style={{color: '#e66f47', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1XZXNrNisou74rIXNXF-92RCv6nPwQhk6/view?usp=sharing">here</a></strong>.

                                </Typography>
                                    
                                <Grid container direction="row" justify="flex-end" alignItems="center">

                                    <Fade left delay={500} duration={1500} >

                                        <div className={classes.okButtonCont}>

                                            <AnimatedButton text="OK!" linkTo='home-cont' callback={toggleAboutMeText}/>

                                            <div className={classes.okButtonUnderline}></div>

                                        </div>

                                    </Fade>


                                </Grid>


                            </Paper>
                            
                        </animated.div>

                    </div>
                        
                </Fade>

            </Grid>
            

  );
}

export default AboutMe;