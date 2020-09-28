import React from "react";

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({

  appBar: {
    boxShadow: 'none',
    marginTop: 'auto',
    width: '100%',
    height: '100%',
  },

}));

function Footer() {
  const classes = useStyles();

  return (

    <div id='contact-cont' style={{ height: '12%', margin: 0, padding: '1%' }}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <p><strong>Portfolio (v1):</strong> <a href="https://www.simonmcurran.com/" target="blank">simonmcurran.com - (v2 is next React project)</a></p>
          <p><strong>Source Code:</strong> <a href="https://github.com/SimoSultan/react-mashup" target="blank">github.com/SimoSultan/react-mashup</a></p>
          <Button>
            <Link activeClass="active" to="home-cont" spy={true} smooth={true} duration={1000}>
              <Typography variant="h6">back to top</Typography>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>


  );
}

export default Footer;