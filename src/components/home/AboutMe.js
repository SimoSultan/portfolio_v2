import React from 'react';
import AnimatedButton from '../other/AnimatedButton'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, makeStyles } from '@material-ui/core/styles';

import Fade from 'react-reveal/Fade';
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
        marginTop: '4%',
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
        marginTop: '3%',
        fontFamily: 'Quicksand, sans-serif',
        // fontStyle: 'italic',    
        lineHeight: '1.5rem'
    }
}));



function AboutMe({toggleAboutMeText}) {

    const classes = useStyles(theme)
    const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1020px)' })

    return (


            <Grid container style={{zIndex: 500}}>

                <Fade left big>

                    <Paper className={classes.paper}>

                        <Typography variant="h6" className={classes.boldText}>

                            <strong>
                                Why did I become a developer you ask?
                            </strong>

                        </Typography>

                        <Typography 
                            variant={
                                isLandscape && isDesktopOrLaptop ? 'body1' : 'body2'
                            } 
                            className={classes.italicsText} 
                            style={{
                                fontSize: isLandscape && isDesktopOrLaptop ? '1rem' : '0.9rem'
                            }}
                        >

                            <em>
                                {"Easy! For the creativity and problem solving. Coding is like a Maxibon, it's better than the sum of its parts, where each part being creativity and problem solving. I love the highs, learn a lot from the lows and find the community and diversity surrounding tech to be like home."}
                            </em>

                            <br />
                            <br />

                            {"Check out my work on "}

                            <strong>
                                <a 
                                    style={{
                                        color: '#e66f47', 
                                    }} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    href="https://github.com/SimoSultan"
                                >
                                        {"GitHub"}
                                </a>
                            </strong>

                            {", or grab "} 

                            <strong>
                                <a 
                                    style={{
                                        color: '#e66f47', 
                                    }} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    href="https://drive.google.com/file/d/1XZXNrNisou74rIXNXF-92RCv6nPwQhk6/view?usp=sharing"
                                >
                                    {"my CV"}
                                </a>
                            </strong>
                            {"."}

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
                        
                </Fade>

            </Grid>
            

  );
}

export default AboutMe;