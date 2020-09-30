import React, { useState, useRef, useEffect } from 'react';
import Navigation from '../other/Navigation'
import profileImage from '../../img/v1_transparent.png'
// import { profileImage } from 'images/v1_transparent.png'
import { aboutMe } from './aboutMe'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { TweenMax } from 'gsap';


const useStyles = makeStyles(() => ({
  container: {
    paddingTop: '6%'
  },
  homeCont: {
    height: '100vh',
    margin: 0,
    padding: 0,
    background: '#F2F3F5'
  },
  profileImage: {
    width: '90%',
  }
}));


const AboutMe = () => (
  <Typography variant="body1" gutterBottom>
    { aboutMe }
  </Typography>
)



function Home() {
  const classes = useStyles();
  const profImg = useRef(null);

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

          <Grid item direction="column" xs={3}>
            <Typography variant="h1" gutterBottom>
              simon
            </Typography>
            <Typography variant="h1" gutterBottom>
              curran.
            </Typography>
            <Button onClick={showHideAboutMeText}>
              <Typography variant="body1" gutterBottom>
                who?
              </Typography>
            </Button>
          </Grid>

          <Grid item direction ="column" xs={3}>
            { showText ? <AboutMe /> : null }
          </Grid>

          <Grid item direction="column" xs={6}>
            <img ref={profImg} className={classes.profileImage} src={profileImage} alt="profile"/>
            {/* <ProfileImage /> */}
          </Grid>
        </Grid>

      </Container>
    </div>

  );
}

export default Home;


