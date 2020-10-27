import React, { useState, useRef, useEffect } from 'react';
import Navigation from '../other/Navigation'
import HomeHeader from './HomeHeader'
import AboutMe from './AboutMe'
import profileImage from '../../img/v1_transparent.png'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import { TweenMax, TimelineLite } from 'gsap';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


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
    marginTop: '5%',
    position: 'absolute',
    top: '45%',
  },
  root: {
    flexGrow: 1,
    // [`${theme.breakpoints.up('sm')} and (orientation: portrait)`]: {
    //   direction: 'row'
    // }
  },
}));

let buttonFont = createMuiTheme({
  typography: {
    fontFamily: 'Roboto Slab',
  },
})
buttonFont = responsiveFontSizes(buttonFont);



function Home() {
  const classes = useStyles(theme);
  
  const [showText, setShowText] = useState(false)
  const [animation, setAnimation] = useState(null)
  const [toggle, setToggle] = useState(false);

  const profImg = useRef(null);
  const nameTextFirst = useRef(null);
  const nameTextSecond = useRef(null);
  const whoButton = useRef(null);
  const tl = useRef();

  useEffect(() => {
    setAnimation( TweenMax.to(profImg.current, 1, {y: '20%'}).pause() )

    tl.current = new TimelineLite()
      .to(nameTextFirst.current, 0.5, {x: '200%'})
      .to(nameTextSecond.current, 0.5, {x: '200%', delay: -0.3})
      .to(whoButton.current, 0.5, {x: '200%', delay: -0.15})
  }, [])

  function hideAboutMeText() {
    setShowText(false) 
    animation.reverse()
  }

  function showAboutMe() {
    animation.play()
    setTimeout(() => {
      setShowText(true)
    }, 1000);
  }

  useEffect(() => {    
    tl.current.reversed(!toggle);
  }, [toggle]);

  const toggleTimeline = () => {
    setToggle(!toggle);
  };


  return (

    <div id='home-cont' className={classes.homeCont}>
    
      <Navigation />

      <Container className={classes.container}>

        <Grid container direction="column" justify="space-evenly" alignItems="center">
          <Grid item container xs={12} md={6} lg={5}>
            { showText 
                ? <AboutMe
                    hideAboutMeText={hideAboutMeText} 
                    buttonFont={buttonFont}
                    toggleTimeline={toggleTimeline}
                  /> 
                : <HomeHeader 
                    theme={theme} 
                    showAboutMe={showAboutMe} 
                    buttonFont={buttonFont}
                    nameTextFirst={nameTextFirst}
                    nameTextSecond={nameTextSecond}
                    whoButton={whoButton}
                    toggleTimeline={toggleTimeline}
                  />}
          </Grid>

          <Grid item container direction="row" justify="center" alignItems="center" xs={12} sm={10} md={7}>
            <img ref={profImg} className={classes.profileImage} src={profileImage} alt="profile"/>
          </Grid>
        </Grid>

      </Container>
    </div>

  );
}

export default Home;


