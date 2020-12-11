import React from 'react';
import BlogList from './BlogList';
import { Footer } from "../export";

import '../../stylesheets/App.css'
import Typography from '@material-ui/core/Typography';
import { makeStyles, MuiThemeProvider, ThemeProvider, responsiveFontSizes, createMuiTheme } from '@material-ui/core/styles';

import Zoom from 'react-reveal/Zoom';
import { useMediaQuery } from 'react-responsive'


const useStyles = makeStyles(() => ({
    blogsCont: {
        height: 'fit-content',
        // background: '#2E6086',
        background: 'rgb(62,148,215)',
        // eslint-disable-next-line
        background: 'linear-gradient(120deg, rgba(62,148,215,1) 0%, rgba(28,86,129,1) 90%)',
        zIndex: 25,
        position: 'relative',
        overflowY: 'hidden',
    },
    contToFitFooter: {
        height: '88%',
    },

    sectionHeaderVert: {
        top: '-40px',
        position: 'absolute',
        opacity: 0.8,
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        color: '#304153',
    },
    sectionHeaderHorizontal: {
        top: '-35px',
        position: 'absolute',
        opacity: 0.8,
        color: '#304153',
        letterSpacing: '2rem',
        overflow: 'hidden',
    },
}));

let writingsFont = createMuiTheme({
    typography: {
        fontFamily: 'Quicksand',
        fontWeight: 600,
        fontSize: 70,
        color: '#304153',
        lineHeight: 1,
    },
  });
  writingsFont = responsiveFontSizes(writingsFont);


function Blogs() {
  const classes = useStyles();
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (

    <div id='blogs-cont' className={classes.blogsCont} >

        <div className={classes.contToFitFooter}>

            <MuiThemeProvider>

                <ThemeProvider theme={writingsFont}>

                    <Typography variant="h2" className={classes.sectionHeaderVert}>

                        BLOGS

                    </Typography>

                    <Typography 
                        variant="h2" 
                        className={classes.sectionHeaderHorizontal} 
                        style={{
                            marginLeft: `${!isLandscape && isTabletOrMobile ? '200px' : '300px'}`
                        }}>

                        <Zoom right cascade duration={1500}>

                            LOGS

                        </Zoom>

                    </Typography>

                </ThemeProvider>
                
            </MuiThemeProvider>

            <BlogList />

        </div>
            

        <Footer />

    </div>

  );
}

export default Blogs;


