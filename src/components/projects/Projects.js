import React from 'react';
import ProjectList from './ProjectList';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, createMuiTheme, responsiveFontSizes, MuiThemeProvider, ThemeProvider } from '@material-ui/core/styles';

import Zoom from 'react-reveal/Zoom';


const useStyles = makeStyles(() => ({
    projectsContainer: {
        height: 'fit-content',
        paddingTop: '5%',
        marginBottom: '50px',
        backgroundColor: 'whitesmoke'
    },
    projectsHorizontalWordMobile: {
        opacity: 0.3,
        marginLeft: '15%', 
        position: 'absolute',
    },
    projectsHorizontalWordTabletDesktop: {
        opacity: 0.3,
        marginLeft: '20%', 
    }  ,
    sectionHeaderVert: {
        zIndex: -100,
        position: 'absolute',
        top: '97%',
        opacity: 0.3,
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        color: '#304153',
    },
    sectionHeaderHorizontal: {
        zIndex: -100,
        position: 'absolute',
        top: '97.5%',
        marginLeft: '270px',
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

    return (

        <div id='projects-cont' className={classes.projectsContainer} >
            <Box>

                <MuiThemeProvider>
                    <ThemeProvider theme={projectsFont}>
                        <Typography variant="h2" className={classes.sectionHeaderVert}>
                            PROJECTS
                        </Typography>
                        <Typography variant="h2" className={classes.sectionHeaderHorizontal}>
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


