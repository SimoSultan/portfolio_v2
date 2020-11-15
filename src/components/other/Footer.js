import React, { useState, useRef, useEffect } from "react";
import HoverButton from "./HoverButton";

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import { makeStyles, createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core/styles';

import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive'

import HomeIcon from '@material-ui/icons/Home';

// animation library and plugins
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({

  appBar: {
    boxShadow: 'none',
    marginTop: 'auto',
    width: '100%',
    // height: '100%',
    // background: '#2E6086',
    background: '#304153',
    padding: '1%',
    zIndex: 500,
    // position: 'absolute',
    // left: 0,
  },
  contactCont: {
    padding: '4%',
    // width: '100%',
    // background: '#304153',
    background: '#2E6086',
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
    marginTop: '5%',
  },
  footerHeadingContainer: {
    position: 'relative',
    textAlign: 'center', 
    opacity: 0.3,
  },
  footerHeading: {
    fontSize: 120,
    width: '90%',
    margin: '0 auto',
    left: '5%',
    position: 'absolute',
    // color: '#F2F3F5',
    color: '#F2511B',

  },
  footerHeadingSmall: {
    fontSize: 70,
    width: '80%',
    margin: '10% auto',
    left: '10%',
    position: 'absolute',
    // color: '#F2F3F5',
    color: '#F2511B',


  },
  footerTopButton: {
    fontSize: '1.5rem',
  },
  imageIcon: {
    height: '100%'
  },
  iconRoot: {
    textAlign: 'center'
  }
}));

function Footer() {
  const classes = useStyles();
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 411px)' })

  const reachOutRef = useRef(null)

  const [hover, setHover] = useState(false)

  useEffect(() => {
    gsap.fromTo(reachOutRef.current, {y: 50, autoAlpha: 0}, {
        y: 0, 
        autoAlpha: 1, 
        ease: "expo", 
        scrollTrigger: {
            trigger: reachOutRef.current,
            id: 'footer-show',
            start: "top 90%",
            end: "top 75%",
            // markers: true,
            scrub: 1,
        }
      });
  }, [])

  return (

    <div id='contact-cont' className={classes.contactCont}>
      <Container className={classes.appBar}>

      <MuiThemeProvider theme={theme}>


        <Grid container direction="column">
          
          <Grid item className={classes.footerHeadingContainer}>
            <Typography ref={reachOutRef} variant="h5" className={(isMobile) ? classes.footerHeadingSmall : classes.footerHeading} >REACH OUT</Typography>
          </Grid>

          <Grid item container direction="row" justify="space-evenly" alignItems="center" spacing={2} className={classes.socialLinks}>

            <HoverButton 
              buttonClass={classes.buttons} 
              typoClass={classes.socialsText} 
              link="https://twitter.com/simo_sultan"
              icon={'twitter'}
              isPortrait={isPortrait}
              isTabletOrMobile={isTabletOrMobile}
            />

            <HoverButton 
              buttonClass={classes.buttons} 
              typoClass={classes.socialsText} 
              link="https://github.com/SimoSultan"
              icon={'github'}
              isPortrait={isPortrait}
              isTabletOrMobile={isTabletOrMobile}
            />

            <HoverButton 
              buttonClass={classes.buttons} 
              typoClass={classes.socialsText} 
              link="https://www.linkedin.com/in/simo-sultan/"
              icon={'linkedin'}
              isPortrait={isPortrait}
              isTabletOrMobile={isTabletOrMobile}
            />

            <Grid item xs={isPortrait ? 6 : ((isTabletOrMobile && 4) || 2)}>
              <Button target="_blank" href="https://open.spotify.com/user/1231189291" className={classes.buttons}>
                {/* <TwitterIcon /> */}
                <Typography variant="body1" className={classes.socialsText}>spotify</Typography>
              </Button>
            </Grid>

            <Grid item xs={isPortrait ? 6 : ((isTabletOrMobile && 4) || 2)}>
              <Button target="_blank" href="https://medium.com/@simo_sultan" className={classes.buttons}>
                {/* <GitHubIcon /> */}
                <Typography variant="body1" className={classes.socialsText}>medium</Typography>
              </Button>
            </Grid>

            <HoverButton 
              buttonClass={classes.buttons} 
              typoClass={classes.socialsText} 
              link="simosultan2020@email.com" 
              icon={'email'}
              isPortrait={isPortrait}
              isTabletOrMobile={isTabletOrMobile}
            />

          </Grid>

          <Grid 
            item 
            container 
            justify="center" 
            spacing={2} 
            className={classes.buttons}
            onMouseEnter = {() => setHover(true)} 
            onMouseLeave = {() => setHover(false)}
          >
            <Button style={{width: '6%'}}>
              <Link activeClass="active" to="home-cont" spy={true} smooth={true} duration={1000}>
                {
                  hover
                  ? <HomeIcon fontSize="large"/>
                  : <Typography variant="button" className={classes.footerTopButton} > top</Typography>
                }
              </Link>
            </Button>
          </Grid>

        </Grid>
        </MuiThemeProvider>
      </Container>
    </div>


  );
}

export default Footer;