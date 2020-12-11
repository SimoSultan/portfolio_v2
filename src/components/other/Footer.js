import React from "react";

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import { makeStyles, createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core/styles';
import AnimatedFooterButton from "./AnimatedFooterButton";

import { useMediaQuery } from 'react-responsive'

// animation library and plugins
import Fade from 'react-reveal/Fade';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({

  appBar: {
    boxShadow: 'none',
    marginTop: 'auto',
    width: '100%',
    height: '100%',
    background: '#304153',
  },
  contactCont: {
    padding: '4%',
    background: 'transparent',
    height: 'auto',
    marginBottom: '35px',
  },
  buttons: {
    color: '#F2F3F5',
    textTransform: 'none',
  },
  socialsText: {
    fontSize: '2rem',
  },
  socialLinks: {
    textAlign: 'center',
    padding: '3% 0',
    width: '90%',
    margin: '0 auto',
  },
  footerHeadingContainer: {
    position: 'relative',
    textAlign: 'center', 
    opacity: 0.3,
    paddingTop: '3%',
    
  },
  footerHeading: {
    fontSize: '6rem',
    margin: '-3% auto -6% auto',
    width: '90%',
    color: '#e3e3e3',
    // color: '#F2511B',
    fontFamily: 'Architects Daughter, sans-serif',
    letterSpacing: '10px',
  },
  footerHeadingSmall: {
    fontSize: '3rem',
    width: '90%',
    margin: '-3% auto -6% auto',
    color: '#f2f2f2',
    // color: '#F2511B',
    fontFamily: 'Architects Daughter, sans-serif',

  },
  footerTopButton: {
    fontSize: '1.5rem',
  },
  imageIcon: {
    height: '100%'
  },
  iconRoot: {
    textAlign: 'center'
  },
  buttonCont: {
    cursor: 'pointer',
    position: 'relative',
    width: '140px',
    height: '60px',
    color: '#000',
    textDecoration: 'none',
    margin: '2% 0'
},
}));

function Footer() {
    const classes = useStyles();
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 411px)' })


    return (

        <div id='contact-cont' className={classes.contactCont}>
            <Container className={classes.appBar}>

            <MuiThemeProvider theme={theme}>


                <Grid container direction="column">
                
                    <Grid item className={classes.footerHeadingContainer}>
                        
                            <Typography variant="h5" className={(isMobile) ? classes.footerHeadingSmall : classes.footerHeading} style={{letterSpacing: isPortrait ? '1px' : '10px'}} >
                                <Fade bottom collapse delay={500}>
                                    REACH OUT
                                </Fade>
                            </Typography>
                    </Grid>

                    <Grid item container direction="row" justify="space-evenly" alignItems="center" className={classes.socialLinks} >
                    
                        <Grid item xs={isPortrait ? 5 : ((isTabletOrMobile && 4) || 2)} className={classes.buttonCont}>
                            <AnimatedFooterButton 
                                text='twitter'
                                linkTo="https://twitter.com/simo_sultan"
                            />
                        </Grid>

                        <Grid item xs={isPortrait ? 5 : ((isTabletOrMobile && 4) || 2)} className={classes.buttonCont}>
                            <AnimatedFooterButton 
                                text='github'
                                linkTo="https://github.com/SimoSultan"
                            />
                        </Grid>

                        <Grid item xs={isPortrait ? 5 : ((isTabletOrMobile && 4) || 2)} className={classes.buttonCont} >
                            <AnimatedFooterButton 
                                text='linkedin'
                                linkTo="https://www.linkedin.com/in/simo-sultan/"
                            />
                        </Grid>

                        <Grid item xs={isPortrait ? 5 : ((isTabletOrMobile && 4) || 2)} className={classes.buttonCont} >
                            <AnimatedFooterButton 
                                text='spotify'
                                linkTo="https://open.spotify.com/user/1231189291"
                            />
                        </Grid>


                        <Grid item xs={isPortrait ? 5 : ((isTabletOrMobile && 4) || 2)} className={classes.buttonCont} >
                            <AnimatedFooterButton 
                                text='medium'
                                linkTo="https://medium.com/@simo_sultan"
                            />
                        </Grid>

                        
                        <Grid item xs={isPortrait ? 5 : ((isTabletOrMobile && 4) || 2)} className={classes.buttonCont} >
                            <AnimatedFooterButton 
                                text='email'
                                linkTo="mailto:simosultan2020@email.com?" 
                            />
                        </Grid>

                    </Grid>

                </Grid>

                </MuiThemeProvider>

            </Container>

        </div>


    );
}

export default Footer;