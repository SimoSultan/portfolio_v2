import React from "react";

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
// import HomeIcon from '@material-ui/icons/Home';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { Link } from 'react-scroll';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

  appBar: {
    boxShadow: 'none',
    marginTop: 'auto',
    width: '100%',
    height: '100%',
    backgroundColor: 'hsla(203, 97%, 57%, 0.3)',
    padding: '1%',
  },
  contactCont: {
    height: '12%',
    margin: 0,
    padding: '3%'
  },
  buttons: {
    color: '#F2F3F5',
    textTransform: 'none',
  },
  // socialsText: {
  //   color: "black",
  // },
  socialLinks: {
    textAlign: 'center',
  }

}));

function Footer() {
  const classes = useStyles();

  return (

    <div id='contact-cont' className={classes.contactCont}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>

          <Grid container direction="column" spacing={2}>
            
            <Grid item style={{textAlign: 'center', color: 'black'}}>
              <Typography variant="h5">GET IN TOUCH</Typography>
            </Grid>

            <Grid item container direction="row" justify="space-evenly" alignItems="center" className={classes.socialLinks}>

              <Grid item xs={4}>
                <Button target="_blank" href="https://twitter.com/simo_sultan" className={classes.buttons}>
                  {/* <TwitterIcon /> */}
                  <Typography variant="body1">twitter</Typography>
                </Button>
                {/* <Grid item  className={classes.socialsText}>
                  <Typography variant="body1">simo_sultan</Typography>
                </Grid> */}
              </Grid>

              <Grid item xs={4}>
                <Button target="_blank" href="https://github.com/SimoSultan" className={classes.buttons}>
                  {/* <GitHubIcon /> */}
                  <Typography variant="body1">github</Typography>
                </Button>
                {/* <Grid item className={classes.socialsText}>
                  <Typography variant="body1">SimoSultan</Typography>
                </Grid> */}
              </Grid>

              <Grid item xs={4}>
                <Button target="_blank" href="https://www.linkedin.com/in/simo-sultan/" className={classes.buttons}>
                  {/* <LinkedInIcon /> */}
                  <Typography variant="body1">linkedin</Typography>
                </Button>
                {/* <Grid item  className={classes.socialsText}>
                  <Typography variant="body1">simo-sultan</Typography>
                </Grid> */}
              </Grid>
    
            </Grid>

            <Grid item container direction="row" justify="space-evenly" alignItems="center" className={classes.socialLinks}>

              <Grid item xs={4}>
                <Button target="_blank" href="https://open.spotify.com/user/1231189291" className={classes.buttons}>
                  {/* <TwitterIcon /> */}
                  <Typography variant="body1">spotify</Typography>
                </Button>
                {/* <Grid item  className={classes.socialsText}>
                  <Typography variant="body1">simo_sultan</Typography>
                </Grid> */}
              </Grid>

              <Grid item xs={4}>
                <Button target="_blank" href="https://medium.com/@simo_sultan" className={classes.buttons}>
                  {/* <GitHubIcon /> */}
                  <Typography variant="body1">medium</Typography>
                </Button>
                {/* <Grid item className={classes.socialsText}>
                  <Typography variant="body1">SimoSultan</Typography>
                </Grid> */}
              </Grid>

              <Grid item xs={4}>
                <Button target="_blank" href="simosultan2020@email.com" className={classes.buttons}>
                  {/* <LinkedInIcon /> */}
                  <Typography variant="body1">email</Typography>
                </Button>
                {/* <Grid item  className={classes.socialsText}>
                  <Typography variant="body1">simo-sultan</Typography>
                </Grid> */}
              </Grid>

            </Grid>

            <Grid item container justify="center">
              <Grid item >
                <Button>
                  <Link activeClass="active" to="home-cont" spy={true} smooth={true} duration={1000}>
                    <Grid container justify="center" alignItems="center" spacing={2} className={classes.buttons}>
                      {/* <Grid item>
                        <HomeIcon fontSize="large"/>
                      </Grid> */}
                      <Grid item>
                        <Typography variant="button">back to top</Typography>
                      </Grid>
                    </Grid>
                  </Link>
                </Button>
              </Grid>
            </Grid>

          </Grid>
        </Toolbar>
      </AppBar>
    </div>


  );
}

export default Footer;