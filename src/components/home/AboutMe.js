import React from 'react';
import AnimatedButton from '../other/AnimatedButton'

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, MuiThemeProvider, makeStyles } from '@material-ui/core/styles';

import Fade from 'react-reveal/Fade';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

let aboutMeFont = createMuiTheme({
  typography: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: '400',
  },
});
aboutMeFont = responsiveFontSizes(aboutMeFont);

const useStyles = makeStyles(() => ({
    paper: {
        textAlign: 'justify',
        color: theme.palette.text.secondary,
        padding: theme.spacing(3),
        transition: 'transform 1s',
        "&:hover": {
            transform: 'scale(1.05)',
        }
    },
    buttonClass: {
        color: '#F2511B',
    },
    card: {
        position: 'absolute',
        borderRadius: '5px',
        willChange: 'transform',
    }
}));



function AboutMe({hideAboutMeText, buttonFont}) {

    const classes = useStyles(theme)

    return (

        <Container>
            <Grid container>

                <Fade left big>

                    <Paper className={classes.paper}>
                        <MuiThemeProvider theme={theme}>
                        <ThemeProvider theme={aboutMeFont}>
                            <Typography variant="body1" gutterBottom>

                                <strong>Why did I become a developer you ask?</strong> Easy! For the creativity and problem solving. Coding is like a Maxibon for me, being better than the sum of its parts, where those parts are creativity and problem solving. I love the highs, learn from the lows and love the community and diversity surrounding tech. 
                                <br></br>
                                <br></br>
                                I consider myself extremely lucky to have found my passion in life so young, where I can grow and learn, all whilst helping others.
                                <br></br>
                                <br></br>
                                Check out my work on <strong><a href="https://github.com/SimoSultan">GitHub</a></strong>, or grab my CV <strong><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1XZXNrNisou74rIXNXF-92RCv6nPwQhk6/view?usp=sharing">here</a></strong>.
                            </Typography>
                        </ThemeProvider>
                        
                        <Grid container direction="row" justify="flex-end" alignItems="center">
                            <ThemeProvider theme={buttonFont}>

                                <Fade left delay={500} duration={1500} >
                                    <AnimatedButton text="OK!" linkTo='home-cont' callback={hideAboutMeText}/>
                                </Fade>

                            </ThemeProvider>
                        </Grid>
                        </MuiThemeProvider>
                    </Paper>
                        
                </Fade>

            </Grid>
        </Container>

  );
}

export default AboutMe;