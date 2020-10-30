import React, { useState, useRef, useEffect } from 'react';
import HomeHeader from './HomeHeader'
import AboutMe from './AboutMe'
import profileImage from '../../img/v1_transparent.png'

import Grid from '@material-ui/core/Grid';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive'

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

let buttonFont = createMuiTheme({
  typography: {
    fontFamily: 'Roboto Slab',
  },
})
buttonFont = responsiveFontSizes(buttonFont);

const useStyles = makeStyles(() => ({
  gridContainer: {
    height: '100%',
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
  },
  root: {
    flexGrow: 1,
  },
}));


function Home() {
  const classes = useStyles(theme);
  const tl = useRef();
  
  const [showText, setShowText] = useState(false)
  const [animation, setAnimation] = useState(null)
  const [textAnimation, setTextAnimation] = useState(null)
  // const [toggle, setToggle] = useState(false);

  const profImg = useRef(null);
  const nameTextFirst = useRef(null);
  const nameTextSecond = useRef(null);
  const whoButton = useRef(null);

  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })
  // const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1020px)'
  })

  useEffect(() => {
    setAnimation( gsap.to(profImg.current, { y: '20%', duration: 1}).pause() )
    setTextAnimation( 
      tl.current = gsap.timeline({ paused: true })
        .to(nameTextFirst.current, {x: '500%', duration: 0.5})
        .to(nameTextSecond.current, { x: '500%', delay: -0.3, duration: 0.5})
        .to(whoButton.current, {x: '500%', delay: -0.2, duration: 0.5})
    )
  }, [])

  // const toggleTimeline = () => {
  //   setToggle(!toggle);
  // };

  function hideAboutMeText() {
    setShowText(false)
    animation.reverse()
    textAnimation.reverse()
  }

  function showAboutMe() {
    animation.play()
    setTimeout(() => {
      setShowText(true)
    }, 1000);
    // toggleTimeline()
    textAnimation.play()
  }

  // useEffect(() => {    
  //   textAnimation.reversed(!textAnimation.reversed());
  // }, [toggle]);



  return (

    <div id='home-cont' className={classes.homeCont}>
    
      {/* <Container className={ (isLandscape && isTabletOrMobile && classes.containerLandscape) || (isDesktopOrLaptop && classes.containerPortrait) }> */}

        <Grid container direction="row" justify="space-evenly" alignItems="center" className={classes.gridContainer}>
          <Grid item container xs={ isLandscape ? 6 : 12 } sm={ isLandscape ? 6 : 9 } md={6} lg={5} className={ (isLandscape && classes.containerLandscape) || (isDesktopOrLaptop && classes.containerPortrait) }>
            { showText 
                ? <AboutMe
                    hideAboutMeText={hideAboutMeText} 
                    buttonFont={buttonFont}
                  /> 
                : <HomeHeader 
                    theme={theme} 
                    showAboutMe={showAboutMe} 
                    buttonFont={buttonFont}
                    nameTextFirst={nameTextFirst}
                    nameTextSecond={nameTextSecond}
                    whoButton={whoButton}
                  />}
          </Grid>

          <Grid item container justify="center" alignItems="center" xs={ isLandscape ? 6 : 12 } sm={ isLandscape ? 6 : 10 } md={6}>
            <img 
              ref={profImg} 
              className={classes.profileImage} 
              src={profileImage} 
              alt="profile"
            />
          </Grid>

        </Grid>

      {/* </Container> */}
    </div>

  );
}

export default Home;


