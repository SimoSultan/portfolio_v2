import React, { useState } from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'

import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import SpotifyIcon from './SpotifyIcon'
import MediumIcon from './MediumIcon'

import { useSpring, animated } from "react-spring";


const useStyles = makeStyles(() => ({
    parallelogram: {
        width: '100%',
        height: '100%',
        transform: 'skew(-20deg)',
        background: 'transparent',
        position: 'relative',
        top: 0,
        overflow: 'hidden',
    },
    buttonTextCont: {
        position: 'absolute',
        top: 0,
        padding: '10px',
    },
    glance: {
        background: '#25A9FC',
        width: '120%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    footerLinks: {
        textDecoration: 'none',
    },
    socialsText: {
        fontSize: '2rem',
        lineHeight: '2rem'
    },
}))

function AnimatedFooterButton( { text, linkTo, isPortrait, isTabletOrMobile } ) {
    const classes = useStyles()
    const [{ x, color }, set] = useSpring(() => ({ x: 100, color: "#fff" }));
    const [hover, setHover] = useState(false)

    const iconToShow = (icon) => {
        switch (icon) {
          case 'twitter':
            return <TwitterIcon fontSize="large"/>
          case 'github':
            return <GitHubIcon fontSize="large"/>
          case 'linkedin':
            return <LinkedInIcon fontSize="large"/>
          case 'spotify':
            return <SpotifyIcon fontSize="large"/>
          case 'medium':
            return <MediumIcon fontSize="large"/>
          case 'email':
            return <EmailIcon fontSize="large"/>
          default:
            break;
        }
      }

    return (

        <a  
            href={linkTo} 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => {set({ x: 0, color: "#fff" }); setHover(true)}}
            onMouseLeave={() => {set({ x: 100, color: "#fff" }); setHover(false)}}
        >


            <div className={classes.parallelogram}>
                <animated.div
                    style={{ transform: x.interpolate((v) => `translateX(-${v}%`) }}
                    className={classes.glance}
                />  
            </div> 

            <Grid container alignItems="center" justify="center" className={classes.buttonTextCont}>
                <animated.span style={{ color }}>
                    {
                        hover
                        ? iconToShow(text)
                        : <Typography variant="body1" className={classes.socialsText} >{text}</Typography>
                    }
                </animated.span>
            </Grid>

        </a>
    )
}

export default AnimatedFooterButton
