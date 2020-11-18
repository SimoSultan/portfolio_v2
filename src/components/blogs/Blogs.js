import React from 'react';
import BlogList from './BlogList';
import { Footer } from "../export";

import '../../stylesheets/App.css'
import Typography from '@material-ui/core/Typography';
import { makeStyles, MuiThemeProvider, ThemeProvider, responsiveFontSizes, createMuiTheme } from '@material-ui/core/styles';

import Fade from 'react-reveal/Fade';


const useStyles = makeStyles(() => ({
    blogsCont: {
        height: 'fit-content',
        background: '#2E6086',
        zIndex: 25,
        position: 'relative',
        overflowY: 'hidden',
    },
    contToFitFooter: {
        height: '88%',
    },

    sectionHeaderVert: {
        top: '-50px',
        zIndex: -100,
        position: 'absolute',
        opacity: 0.8,
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        color: '#304153',
    },
    sectionHeaderHorizontal: {
        top: '-45px',
        zIndex: -100,
        position: 'absolute',
        marginLeft: '270px',
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

  return (

    <div id='blogs-cont' className={classes.blogsCont} >


        <div className={classes.contToFitFooter}>

            <MuiThemeProvider>
                <ThemeProvider theme={writingsFont}>
                    <Typography variant="h2" className={classes.sectionHeaderVert}>
                        BLOGS
                    </Typography>
                    <Typography variant="h2" className={classes.sectionHeaderHorizontal}>
                        <Fade bottom cascade>
                            LOGS
                        </Fade>
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


