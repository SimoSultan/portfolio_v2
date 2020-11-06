import React from "react";

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import { makeStyles, createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core/styles';

import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive'

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

// import HomeIcon from '@material-ui/icons/Home';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({

  appBar: {
    boxShadow: 'none',
    marginTop: 'auto',
    width: '100%',
    height: '100%',
    // backgroundColor: 'hsla(203, 97%, 57%, 0.3)',
    backgroundColor: '#2E6086',
    padding: '1%',
  },
  contactCont: {
    height: '12%',
    margin: 0,
    padding: '4%',
    background: '#304153',
    zIndex: '200 !important',
  },
  buttons: {
    color: '#F2F3F5',
    textTransform: 'none',
  },
  socialsText: {
    fontSize: '2rem',
    zIndex: 10,
  },
  socialLinks: {
    textAlign: 'center',
    marginTop: '5%',
  },
  footerHeadingContainer: {
    // marginBottom: '2%',
    position: 'absolute',
    width: '92%',
    textAlign: 'center', 
    color: 'black',
    opacity: 0.3,

  },
  footerHeading: {
    fontSize: 110,
    width: '70%',
    margin: '0 auto',
    zIndex: 5,
  },
  footerHeadingSmall: {
    fontSize: 70,
    width: '90%',
    margin: '10% auto',
    zIndex: 5,
  },
  footerTopButton: {
    fontSize: '1.5rem',
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


        <Grid container direction="column" spacing={2}>
          
          <Grid item className={classes.footerHeadingContainer}>
            <Typography variant="h5" className={(isMobile) ? classes.footerHeadingSmall : classes.footerHeading} >REACH OUT</Typography>
          </Grid>

          <Grid item container direction="row" justify="space-evenly" alignItems="center" spacing={2} className={classes.socialLinks}>

            <Grid item xs={isPortrait ? 6 : ((isTabletOrMobile && 4) || 2)}>
              <Button target="_blank" href="https://twitter.com/simo_sultan" className={classes.buttons}>
                {/* <TwitterIcon /> */}
                <Typography variant="body1" className={classes.socialsText}>twitter</Typography>
              </Button>
            </Grid>

            <Grid item xs={isPortrait ? 6 : ((isTabletOrMobile && 4) || 2)}>
              <Button target="_blank" href="https://github.com/SimoSultan" className={classes.buttons}>
                {/* <GitHubIcon /> */}
                <Typography variant="body1" className={classes.socialsText}>github</Typography>
              </Button>
            </Grid>

            <Grid item xs={isPortrait ? 6 : ((isTabletOrMobile && 4) || 2)}>
              <Button target="_blank" href="https://www.linkedin.com/in/simo-sultan/" className={classes.buttons}>
                {/* <LinkedInIcon /> */}
                <Typography variant="body1" className={classes.socialsText}>linkedin</Typography>
              </Button>
            </Grid>
  
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

            <Grid item xs={isPortrait ? 6 : ((isTabletOrMobile && 4) || 2)}>
              <Button target="_blank" href="simosultan2020@email.com" className={classes.buttons}>
                {/* <LinkedInIcon /> */}
                <Typography variant="body1" className={classes.socialsText}>email</Typography>
              </Button>
            </Grid>

          </Grid>

          <Link activeClass="active" to="home-cont" spy={true} smooth={true} duration={1000}>
            <Grid item container justify="center" spacing={2} className={classes.buttons}>
              <Grid item >
                <Button>
                  <Typography variant="button" className={classes.footerTopButton} > top </Typography>
                </Button>
              </Grid>
            </Grid>
          </Link>

        </Grid>
        </MuiThemeProvider>
      </Container>
    </div>


  );
}

export default Footer;