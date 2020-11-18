import React from 'react';
import BlogList from './BlogList';
import { Footer } from "../export";

import '../../stylesheets/App.css'
import Typography from '@material-ui/core/Typography';
import { makeStyles, MuiThemeProvider, ThemeProvider, responsiveFontSizes, createMuiTheme } from '@material-ui/core/styles';



const useStyles = makeStyles(() => ({
    blogsCont: {
        height: 'fit-content',
        paddingTop: '5%',
        margin: 0,
        padding: 0,
        // background: '#304153',
        background: '#2E6086',
        zIndex: 25,
        position: 'relative',
        overflowY: 'hidden',
    },
    contToFitFooter: {
        height: '88%',
    },
    projectsHorizontalWordMobile: {
        opacity: 0.3,
        marginLeft: '15%', 
        position: 'absolute',
    },
    projectsHorizontalWordTabletDesktop: {
        opacity: 0.3,
        marginLeft: '20%', 
    },
    sectionHeaderVert: {
        marginTop: '-23%',
        zIndex: -100,
        position: 'absolute',
        opacity: 0.8,
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        // fontWeight: 500,
        color: '#304153',
    },
    sectionHeaderHorizontal: {
        marginTop: '-22.5%',
        zIndex: -100,
        position: 'absolute',
        marginLeft: '300px',
        opacity: 0.8,
        color: '#304153',
        letterSpacing: '2rem',
        // fontWeight: 500,
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
                    <Typography variant="h2" className={classes.sectionHeaderVert}>BLOGS</Typography>
                    <Typography variant="h2" className={classes.sectionHeaderHorizontal}>LOGS</Typography>
                </ThemeProvider>
            </MuiThemeProvider>

            <BlogList />

        </div>
        <Footer />
    </div>

  );
}

export default Blogs;


