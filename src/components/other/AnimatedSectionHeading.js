import React from 'react'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, MuiThemeProvider, ThemeProvider, responsiveFontSizes, createMuiTheme } from '@material-ui/core/styles';

import Zoom from 'react-reveal/Zoom';
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(() => ({
    sectionHeaderVert: {
        position: 'absolute',
        top: 0,
        left: 0,
        writingMode: 'vertical-rl',
        overflow: 'hidden',
        fontSize: '12rem',
        textOrientation: 'upright',
        color: '#304153',
    },
    sectionHeaderHorizontal: {
        fontSize: '4rem',
        width: '100%',
        color: '#304153',
        letterSpacing: '0.9rem',
        textAlign: 'center',
        overflow: 'hidden',
    },
}));

let verticalFont = createMuiTheme({
    typography: {
        fontFamily: 'Quicksand',
        fontWeight: 600,
        color: '#304153',
        lineHeight: 1,
    },
  });
  verticalFont = responsiveFontSizes(verticalFont);

  
let horizontalFont = createMuiTheme({
    typography: {
        fontFamily: 'Quicksand',
        fontWeight: 600,
        color: '#304153',
        lineHeight: 1,
    },
  });
  horizontalFont = responsiveFontSizes(horizontalFont);


function AnimatedSectionHeading({ text, opacity }) {

    const classes = useStyles();
    const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1020px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 411px)' })
    const isIphone5 = useMediaQuery({ query: '(max-width: 322px)' })

    return (

        <Grid container>

            {

                isLandscape && isDesktopOrLaptop

                ?

                <Grid item>

                    <MuiThemeProvider theme={verticalFont}>

                        <ThemeProvider theme={verticalFont}>

                            <Typography variant="h2" className={classes.sectionHeaderVert} style={{opacity: opacity}}>

                                <Zoom bottom cascade duration={1500}>

                                    {text}

                                </Zoom>

                            </Typography>

                        </ThemeProvider>
                        
                    </MuiThemeProvider>

                </Grid>

                :

                <Grid item container justify="center" alignItems="center">

                    <MuiThemeProvider theme={horizontalFont}>

                        <ThemeProvider theme={horizontalFont}>

                            <Typography 
                                variant="h2" 
                                className={classes.sectionHeaderHorizontal} 
                                style={{
                                    opacity: opacity,
                                    fontSize: 
                                        !isLandscape && isIphone5
                                            ? '2rem'
                                            : !isLandscape && isMobile 
                                                ? '3rem'
                                                : '6rem'
                                }}>

                                <Zoom right cascade duration={1500}>

                                    {text}

                                </Zoom>

                            </Typography>

                        </ThemeProvider>

                    </MuiThemeProvider>

                </Grid>
            }

        </Grid>
    )
}

export default AnimatedSectionHeading
