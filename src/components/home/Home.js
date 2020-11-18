import React, { useState } from 'react';
import HomeHeader from './HomeHeader'
import AboutMe from './AboutMe'
import profileImage from '../../img/v1_transparent.png'

import Grid from '@material-ui/core/Grid';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import { useMediaQuery } from 'react-responsive'

import Fade from 'react-reveal/Fade';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

let buttonFont = createMuiTheme({
  typography: {
    fontFamily: 'Roboto Slab',
    fontWeight: 500,
  },
})
buttonFont = responsiveFontSizes(buttonFont);

const useStyles = makeStyles(() => ({
  gridContainer: {
    height: '100%',
    width: '90vw',
    maxWidth: '2000px',
    margin: '0 auto',
  },
  containerPortrait: {
    paddingTop: '5%',
  },
  containerLandscape: {
    paddingTop: '3%',
    paddingLeft: '3%',
  },
  homeCont: {
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    background: '#F2F3F5'
  },
  profileImage: {
    width: '80%',
    maxWidth: '700px'
  },
  root: {
    flexGrow: 1,
  },

}));


function Home() {
  const classes = useStyles(theme);
  
  const [showText, setShowText] = useState(false)
  const [whoIsShown, setWhoIsShown] = useState(true)

  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })
  // const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1020px)'
  })

    function showAboutMeText() {
        console.log('here');
        setShowText(true)
        setWhoIsShown(false)
    }

    function hideAboutMeText() {
        setShowText(false)
        setWhoIsShown(true)
    }



  return (

    <div id='home-cont' className={classes.homeCont}>

        <Grid container direction="row" justify="space-evenly" alignItems="center" className={classes.gridContainer}>
            <Grid item container xs={ isLandscape ? 6 : 12 } sm={ isLandscape ? 6 : 9 } md={6} lg={5} className={ (isLandscape) ? classes.containerLandscape : (isDesktopOrLaptop) ? classes.containerPortrait : '' }>
                { showText 
                    ? <AboutMe
                        toggleAboutMe={hideAboutMeText} 
                        buttonFont={buttonFont}
                    /> 
                    : <HomeHeader 
                        theme={theme} 
                        toggleAboutMe={showAboutMeText} 
                        whoIsShown={whoIsShown}
                        buttonFont={buttonFont}
                    />}
            </Grid>

            <Grid item container justify="center" alignItems="center" xs={ isLandscape ? 6 : 12 } sm={ isLandscape ? 6 : 10 } md={6}>
                <Fade right delay={500} duration={1500}>
                    <img 
                        className={classes.profileImage} 
                        src={profileImage} 
                        alt="profile"
                    />
                </Fade>
            </Grid>

        </Grid>

    </div>

  );
}

export default Home;


