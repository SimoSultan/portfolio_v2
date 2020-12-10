import React, { useState } from 'react';
import HomeHeader from './HomeHeader'
import AboutMe from './AboutMe'
import profileImage from '../../img/v1_transparent.png'

import Grid from '@material-ui/core/Grid';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import { useMediaQuery } from 'react-responsive'
import Fade from 'react-reveal/Fade';
import { useSpring, animated } from 'react-spring'


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

let buttonFont = createMuiTheme({
  typography: {
    fontFamily: 'Roboto Slab',
    fontWeight: 500,
  },
})
buttonFont = responsiveFontSizes(buttonFont);

const useStyles = makeStyles(() => ({
  gridContainer: {
    height: '100%',
    width: '90vw',
    maxWidth: '2000px',
    margin: '0 auto',
  },
  containerPortrait: {
    paddingTop: '5%',
  },
  containerLandscape: {
    paddingTop: '3%',
    paddingLeft: '3%',
  },
  homeCont: {
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    // background: '#F2F3F5'
    background: '#edeef0'
  },
  profileImage: {
    width: '80%',
    maxWidth: '700px',
    margin: '0 auto',
  },
  root: {
    flexGrow: 1,
  },
//   card: {
//     position: 'absolute',
//     top: '100%',
//     borderRadius: '5px',
//     willChange: 'transform',
//   }

}));


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`


function Home() {

    const classes = useStyles(theme);
    const [showAboutMe, setShowAboutMe] = useState(false)
    const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1020px)' })
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    function toggleAboutMeText() {
        setShowAboutMe(!showAboutMe)
    }

    // TODO: add sub headings to the project items
    // TODO: do something with fadeout animation of card/ name, maybe move the name above the text somehow
    // TODO: first blog is about my weaknesses, change the order
    // TODO: I HAVE TO CLICK THE WORD TO GET THE LINKS TO WORK, THE BLUE HOVER SECTIONS AREN'T CLICKABLE
    // TODO: reload page bug is there on live site where the whole page moves sideways
    // TODO: maybe remove the vertical word
    // TODO: add a bouncing arrow to tell people to scroll
    // TODO: maybe add the thing on the left of this page - https://stickyroll.github.io/react-stickyroll/
    // TODO: add more fonts
    // TODO: add a read more button to the blog entries because on mobile it looks plain
    // TODO: change font weight of buttons on project item
    // TODO: change text of no gif supplied



    return (

        <div id='home-cont' className={classes.homeCont}>

            <Grid container direction="row" justify="space-evenly" alignItems="center" className={classes.gridContainer}>

                <Grid item container xs={ isLandscape ? 6 : 12 } sm={ isLandscape ? 6 : 9 } md={6} lg={5} className={ (isLandscape) ? classes.containerLandscape : (isDesktopOrLaptop) ? classes.containerPortrait : '' }>

                    { showAboutMe 

                        ? <AboutMe
                            hideAboutMeText={toggleAboutMeText} 
                            buttonFont={buttonFont}
                        /> 

                        : <HomeHeader 
                            theme={theme} 
                            showAboutMeText={toggleAboutMeText} 
                            buttonFont={buttonFont}
                        />}

                </Grid>



                <Grid item container justify="center" alignItems="center" xs={ isLandscape ? 6 : 12 } sm={ isLandscape ? 6 : 10 } md={6}>

                    <Fade right delay={500} duration={1500}>

                        <div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>

                            <animated.div style={{ transform: props.xy.interpolate(trans1)}} >

                                <Grid container alignItems="center" justify="center">


                                    <img 
                                        className={classes.profileImage} 
                                        src={profileImage} 
                                        alt="profile"
                                    />

                                 </Grid>
                                
                            </animated.div>

                        </div>

                    </Fade>

                </Grid>

            </Grid>

        </div>

    );
}

export default Home;


