import React from 'react';
import ProjectList from './ProjectList';

import '../../stylesheets/App.css'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, createMuiTheme, responsiveFontSizes, MuiThemeProvider, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  projectsContainer: {
    height: 'fit-content',
    paddingTop: '5%',
    marginBottom: '5%',
  },
  projectsHorizontalWordMobile: {
    // marginTop: '-7%', 
    // top: '107%',
    opacity: 0.3,
    marginLeft: '15%', 
    position: 'absolute',
},
projectsHorizontalWordTabletDesktop: {
    // position: 'absolute',
    // top: '103%',
 
    opacity: 0.3,
    marginLeft: '20%', 
}   
}));

let projectsFont = createMuiTheme({
    typography: {
      fontFamily: 'Quicksand',
      fontWeight: 600,
      fontSize: 70,
      color: '#304153',
      lineHeight: 1,
    },
  });
  projectsFont = responsiveFontSizes(projectsFont);


function Projects() {
    const classes = useStyles();

    return (

        <div id='projects-cont' className={classes.projectsContainer} >
            <Box>

                <MuiThemeProvider>
                    <ThemeProvider theme={projectsFont}>
                        <Typography variant="h2" className="section-header-vert">PROJECTS</Typography>
                        <Typography variant="h2" className="section-header-horizontal">ROJECTS</Typography>
                    </ThemeProvider>
                </MuiThemeProvider>
            </Box>
            <ProjectList />
        </div>

    );
}

export default Projects;


