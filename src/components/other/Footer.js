import React from "react";
import { Link } from 'react-scroll';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



function Footer() {
  return (
    
    <div id='contact-cont'>
      <p><strong>Portfolio (v1):</strong> <a href="https://www.simonmcurran.com/" target="blank">simonmcurran.com - (v2 is next React project)</a></p>
      <p><strong>Source Code:</strong> <a href="https://github.com/SimoSultan/react-mashup" target="blank">github.com/SimoSultan/react-mashup</a></p>
      <Button>
        <Link activeClass="active" to="home-cont" spy={true} smooth={true} duration={1000}>
          <Typography variant="h6">Home</Typography>
        </Link>
      </Button>
    </div>
  );
}

export default Footer;