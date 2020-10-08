import React, { useState, useRef, useEffect } from 'react';
import Navigation from '../other/Navigation'
import profileImage from '../../img/v1_transparent.png'
// import { profileImage } from 'images/v1_transparent.png'
import { aboutMe } from './aboutMe'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core/styles';

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
    flexGrow: 1
  },
}));


const AboutMe = () => (
  <Typography variant="body1" gutterBottom>
    { aboutMe }
  </Typography>
)



function Home() {
  const classes = useStyles();
  const profImg = useRef(null);
  const nameText = useRef(null);

  const [showText, setShowText] = useState(false)
  const [animation, setAnimation] = useState(null)

  useEffect(() => {
    setAnimation(
      TweenMax.to(profImg.current, 1, {x: 100}).pause()
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

  // function showHideAboutMeText() {
  //   (showText) ? setShowText(false) : setShowText(true)
  // }

  return (

    <div id='home-cont' className={classes.homeCont}>
    
      <Navigation />

      <Container className={classes.container}>

        <Grid container direction="row">

          <Grid item direction="column" xs={12} sm={8} lg={5}>
            <MuiThemeProvider theme={theme}>
              <Typography ref={nameText} variant="h5" gutterBottom>
                SIMON
                CURRAN
              </Typography>

              <Button textAlign="right" onClick={showHideAboutMeText}>
                <Typography variant="h5" gutterBottom>
                  who?
                </Typography>
              </Button>
            </MuiThemeProvider>
          </Grid>

          <Grid item direction ="column" xs >
            { showText ? <AboutMe /> : null }
            {/* <AboutMe />  */}
          </Grid>

          <Grid item direction="column" xs={8} sm={10} md={7}>
            <img ref={profImg} className={classes.profileImage} src={profileImage} alt="profile"/>
            {/* <ProfileImage /> */}
          </Grid>
        </Grid>

      </Container>
    </div>

  );
}

export default Home;


