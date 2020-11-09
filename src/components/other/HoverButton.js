import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
// import Icon from '@material-ui/core/Icon';
// import { makeStyles } from '@material-ui/styles';
import SvgIcon from "@material-ui/core/SvgIcon";

import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

import { ReactComponent as MediumIcon } from "../../img/medium-square-filled.svg"
import { ReactComponent as SpotifyIcon } from "../../img/spotify.svg"

// const useStyles = makeStyles(() => ({
//   imageIcon: {
//     display: 'flex',
//     height: 'inherit',
//     width: 'inherit',
//   },
//   iconRoot: {
//     textAlign: 'center'
//   }
// }));

function HoverButton({buttonClass, typoClass, icon, link, isPortrait, isTabletOrMobile}) {
  const [hover, setHover] = useState(false)
  // const classes = useStyles();

  const iconToShow = (icon) => {
    switch (icon) {
      case 'home':
        return <HomeIcon fontSize="large"/>
      case 'twitter':
        return <TwitterIcon fontSize="large"/>
      case 'github':
        return <GitHubIcon fontSize="large"/>
      case 'linkedin':
        return <LinkedInIcon fontSize="large"/>
      case 'spotify':
        return (
          <SvgIcon>
            <SpotifyIcon />
          </SvgIcon>
        )
      case 'medium':
        return (
          <SvgIcon>
            <MediumIcon />
          </SvgIcon>
        )
      case 'email':
        return <EmailIcon fontSize="large"/>
      default:
        break;
    }
  }
  return (
    <Grid 
      item 
      xs={isPortrait ? 6 : ((isTabletOrMobile && 4) || 2)} 
      onMouseEnter = {() => setHover(true)} 
      onMouseLeave = {() => setHover(false)}
    >
      <Button 
        target="_blank" 
        href={link}
        className={buttonClass}
      >
        {
          hover
          ? iconToShow(icon)
          : <Typography variant="body1" className={typoClass} >{icon}</Typography>
        }
      </Button>
    </Grid>

  )
}

export default HoverButton