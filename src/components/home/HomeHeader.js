import React from 'react';
import AnimatedButton from '../other/AnimatedButton'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, MuiThemeProvider } from '@material-ui/core/styles';
import { Container, makeStyles } from '@material-ui/core';

import Fade from 'react-reveal/Fade';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
    nameCont: {
        width: '480px',
        margin: 0,
    },
    whoButtonCont: {
        "&:hover > *:last-child": {
            opacity: 0,
        },
    },
    whoButtonUnderline: {
        width: '40%',
        height: '2px',
        backgroundColor: '#F2511B',
        margin: '-8px auto 0 auto',
        transition: 'opacity .2s ease-in-out',
    },
}))

let titleFont = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeight: 500,
    fontSize: 17,
  },
});
titleFont = responsiveFontSizes(titleFont);


function HomeHeader({ showAboutMeText, buttonFont  }) {
    const classes = useStyles()

    return (
        <Container maxWidth="sm">

            <MuiThemeProvider theme={theme}>

                <ThemeProvider theme={titleFont}>

                    <Grid container direction="column" justify="flex-start" alignItems="center">
                    
                        <Typography variant="h1" gutterBottom className={classes.nameCont}>

                            <Fade left cascade duration={1500}>

                                SIMON

                            </Fade>

                        </Typography>

                        <Typography variant="h1" gutterBottom className={classes.nameCont}>

                            <Fade left cascade  duration={1500}>

                                CURRAN

                            </Fade>

                        </Typography>

                    </Grid>

                </ThemeProvider>

                <Grid container direction="row" justify="flex-end" alignItems="center">

                    <ThemeProvider theme={buttonFont}>

                        <Fade bottom delay={500} duration={1500} >

                            <div className={classes.whoButtonCont}>

                                <AnimatedButton text="WHO?" linkTo='home-cont' callback={showAboutMeText}/>

                                <div className={classes.whoButtonUnderline}></div>

                            </div>

                        </Fade>

                    </ThemeProvider>

                </Grid>

            </MuiThemeProvider>

        </Container>
    );
}

export default HomeHeader;