import React from 'react';
import BlogList from './BlogList';

import '../../stylesheets/App.css'
import Typography from '@material-ui/core/Typography';
// import Typography from '@material-ui/core/Typography';
import { makeStyles, MuiThemeProvider, ThemeProvider, responsiveFontSizes, createMuiTheme } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';

// custom styling
// import '../../stylesheets/App.css'

// animation library and plugins
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const useStyles = makeStyles(() => ({
    blogsCont: {
        height: 'fit-content',
        paddingTop: '5%',
        margin: 0,
        padding: 0,
        // background: '#304153',
        background: '#2E6086',
        zIndex: 25,
        position: 'relative'
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
    }   
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
                    <Typography variant="h2" className="section-header-horizontal-blogs">LOGS</Typography>
                    <Typography variant="h2" className="section-header-vert-blogs">BLOGS</Typography>
                </ThemeProvider>
            </MuiThemeProvider>
            <BlogList />
        </div>
    </div>

  );
}

export default Blogs;


