import React, { useState, useRef, useEffect } from 'react';
import HomeHeader from './HomeHeader'
import AboutMe from './AboutMe'
import profileImage from '../../img/v1_transparent.png'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import gsap from 'gsap';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

let buttonFont = createMuiTheme({
  typography: {
    fontFamily: 'Roboto Slab',
  },
})
buttonFont = responsiveFontSizes(buttonFont);

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: '10%'
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
    paddingTop: '7%',
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

  useEffect(() => {
    setAnimation( gsap.to(profImg.current, { y: '20%', duration: 1}).pause() )
    setTextAnimation( 
      tl.current = gsap.timeline({ paused: true })
        .to(nameTextFirst.current, {x: '300%', duration: 0.5})
        .to(nameTextSecond.current, { x: '300%', delay: -0.3, duration: 0.5})
        .to(whoButton.current, {x: '300%', delay: -0.15, duration: 0.5})
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
    
      <Container className={classes.container}>

        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <Grid item container xs={12} sm={9} md={6} lg={5}>
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

          <Grid item container justify="center" alignItems="center" xs={12} sm={10} md={6}>
            <img 
              ref={profImg} 
              className={classes.profileImage} 
              src={profileImage} 
              alt="profile"
            />
          </Grid>

        </Grid>

      </Container>
    </div>

  );
}

export default Home;


