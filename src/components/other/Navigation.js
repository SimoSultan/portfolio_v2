import React from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { Link } from 'react-scroll';



export default function Navigation(props) {
  return (
    <React.Fragment>
      <CssBaseline />

        <AppBar style={{background: 'transparent', boxShadow: 'none'}}>
          <Toolbar>

            <Grid container alignItems="flex-start" justify="flex-end" direction="row">

            <Button>
                <Link activeClass="active" to="home-cont" spy={true} smooth={true} duration={1000}>
                  <Typography color="white" variant="h6">home</Typography>
                </Link>
              </Button>

              <Button>
                <Link activeClass="active" to="projects-cont" spy={true} smooth={true} duration={1000}>
                  <Typography color="white" variant="h6">projects</Typography>
                </Link>
              </Button>

              <Button>
                <Link activeClass="active" to="blogs-cont" spy={true} smooth={true} duration={1000}>
                  <Typography variant="h6">blogs</Typography>
                </Link>
              </Button>

              <Button>
                <Link activeClass="active" to="contact-cont" spy={true} smooth={true} duration={1000}>
                  <Typography variant="h6">contact</Typography>
                </Link>
              </Button>

            </Grid>

          </Toolbar>
        </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
