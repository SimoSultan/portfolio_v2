import React, { useState } from 'react';
import Navigation from '../other/Navigation'
import profileImage from '../../img/v1_transparent.png'
// import { profileImage } from 'images/v1_transparent.png'
import "../../stylesheets/Home.css";
import { aboutMe } from './aboutMe'

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  container: {
    paddingTop: '6%'
  },
  homeCont: {
    height: '100vh',
    margin: 0,
    padding: 0,
    background: '#F2F3F5'
  }
}));


const AboutMe = () => (
  <Typography variant="body1" gutterBottom>
    { aboutMe }
  </Typography>
)


function Home() {
  const classes = useStyles();
  const [showText, setShowText] = useState(false)

  function showHideAboutMeText() {
    (showText) ? setShowText(false) : setShowText(true)
  }

  return (

    <div id='home-cont' className={classes.homeCont}>
      <Navigation />

      <Container className={classes.container}>

        <Box>
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

          { showText ? <AboutMe /> : null }

        </Box>

        <img id="home-img" src={profileImage} alt="profile"/>

      </Container>
    </div>

  );
}

export default Home;


