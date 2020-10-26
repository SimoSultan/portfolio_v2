import React, { useState, useRef, useEffect } from 'react';
import Navigation from '../other/Navigation'
import HomeHeader from './HomeHeader'
import AboutMe from './AboutMe'
import profileImage from '../../img/v1_transparent.png'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
// import { makeStyles, createMuiTheme, responsiveFontSizes, ThemeProvider, MuiThemeProvider } from '@material-ui/core/styles';

import { TweenMax } from 'gsap';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


const useStyles = makeStyles(() => ({
  container: {
    paddingTop: '6%'
  },
  homeCont: {
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    background: '#F2F3F5'
  },
  profileImage: {
    width: '90%',
  },
  root: {
    flexGrow: 1,
    // [`${theme.breakpoints.up('sm')} and (orientation: portrait)`]: {
    //   direction: 'row'
    // }
  },
}));



function Home() {
  const classes = useStyles(theme);
  const profImg = useRef(null);
  const nameText = useRef(null);

  const [showText, setShowText] = useState(false)
  const [animation, setAnimation] = useState(null)

  useEffect(() => {
    setAnimation(
      TweenMax.to(profImg.current, 1, {y: '30%'}).pause()
    )

  }, [])

  function showHideAboutMeText() {
    if (showText) { 
      setShowText(false) 
      animation.reverse()
    } else {
      setShowText(true)
      animation.play()
    }
  }


  return (

    <div id='home-cont' className={classes.homeCont}>
    
      <Navigation />

      <Container className={classes.container}>

        <Grid item direction="column" xs={12} sm={6} lg={5}>
          { showText ? <AboutMe showHideAboutMeText={showHideAboutMeText} /> : <HomeHeader theme={theme} nameText={nameText} showHideAboutMeText={showHideAboutMeText} />}
        </Grid>

        <Grid item container direction="column" justify="flex-end" alignItems="flex-end" xs={12} sm={10} md={7}>
          <img ref={profImg} className={classes.profileImage} src={profileImage} alt="profile"/>
        </Grid>

      </Container>
    </div>

  );
}

export default Home;


