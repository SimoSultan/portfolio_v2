import React from 'react';
import ProjectList from './ProjectList';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, createMuiTheme, responsiveFontSizes, MuiThemeProvider, ThemeProvider } from '@material-ui/core/styles';

import Zoom from 'react-reveal/Zoom';
import { useMediaQuery } from 'react-responsive'


const useStyles = makeStyles(() => ({
    projectsContainer: {
        height: 'fit-content',
        paddingTop: '5%',
        paddingBottom: '5%',
        background: 'rgb(252,252,252)',
        // eslint-disable-next-line
        background: 'linear-gradient(171deg, rgba(252,252,252,1) 0%, rgba(222,222,222,1) 90%)',
        position: 'relative'
    },
    sectionHeaderVert: {
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.3,
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        color: '#304153',
    },
    sectionHeaderHorizontal: {
        position: 'absolute',
        top: '8px',
        left: 0,
        opacity: 0.3,
        color: '#304153',
        letterSpacing: '1rem',
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
    const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1020px)' })

    return (

        <div id='projects-cont' className={classes.projectsContainer} >

            <Box>

                <MuiThemeProvider theme={projectsFont}>

                    <ThemeProvider theme={projectsFont}>

                        <Typography variant="h2" className={classes.sectionHeaderVert}>

                            PROJECTS

                        </Typography>

                        <Typography variant="h2" className={classes.sectionHeaderHorizontal} style={{marginLeft: isDesktopOrLaptop && isLandscape ? '270px' : '220px'}}>

                            <Zoom right cascade duration={1500}>

                                ROJECTS

                            </Zoom>

                        </Typography>

                    </ThemeProvider>

                </MuiThemeProvider>

            </Box>

            <ProjectList />

        </div>

    );
}

export default Projects;


