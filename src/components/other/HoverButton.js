// import React, { useState, useEffect, useRef } from 'react'
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

// import gsap from 'gsap/gsap-core';

// const mask = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     transformOrigin: 'left',
//     backgroundColor: '#eee',
// }

function HoverButton({buttonClass, typoClass, icon, link, isPortrait, isTabletOrMobile}) {
    const [hover, setHover] = useState(false)
    // const buttonRef = useRef()
    // const maskRef = useRef()
    // const timelineEnter = useRef(gsap.timeline({paused: true}))
    // const timelineLeave = useRef(gsap.timeline({paused: true}))

    // useEffect(() => {
    //     timelineEnter.current.set(maskRef.current, { transformOrigin: "left" })
    //     timelineEnter.current.fromTo(maskRef.current, 1, { scaleX: 0 }, { scaleX: 1, ease: 'expo' });
    //     timelineLeave.current.set(maskRef.current, { transformOrigin: "right" })
    //     timelineLeave.current.fromTo(maskRef.current, 1, { scaleX: 1 }, { scaleX: 0, ease: 'expo' });
    // }, [])
    // gsap.set(maskRef.current, { scaleX: 0 });

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

    // function handleMouseEnter() {
    //     if(!timelineEnter.current.isActive()){
    //         timelineEnter.current.restart();
    //         timelineLeave.current.pause();
    //     }
    //     setHover(true)
    // }

    // function handleMouseLeave() {
    //     if(!timelineEnter.current.isActive()){
    //         timelineEnter.current.pause();
    //         timelineLeave.current.play(0);
    //       //or else add an onComplete callback that will trigger the leave  
    //       } else {
    //         timelineEnter.current.eventCallback("onComplete", playLeave)
    //       }
    //     setHover(false)
    // }

    // function playLeave() {
    //     timelineEnter.current.eventCallback("onComplete", null)
    //     timelineLeave.current.restart();
    // }

    // const animation = gsap
    //     .from(buttonRef.current, {
    //         clip: "rect(50px 100px 50px 0px)",
    //         duration: 0.5,
            
    //     }, {paused: true})

    

  return (
    <Grid 
      item 
      xs={isPortrait ? 6 : ((isTabletOrMobile && 4) || 2)} 
      onMouseEnter = {() => setHover(true)} 
    //   onMouseEnter = {handleMouseEnter} 
      onMouseLeave = {() => setHover(false)}
    //   onMouseLeave = {handleMouseLeave}
    //   ref={buttonRef}
    >   
        {/* <span ref={maskRef} style={mask}></span> */}
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