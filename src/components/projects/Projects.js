import React from 'react';
import ProjectList from './ProjectList';

import { makeStyles } from '@material-ui/core/styles';
import { AnimatedSectionHeading } from '../export';


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

}));


function Projects() {
    
    const classes = useStyles();

    return (

        <div id='projects-cont' className={classes.projectsContainer} >

            <AnimatedSectionHeading text={"PROJECTS"} opacity={0.3}/>

            <ProjectList />

        </div>

    );
}

export default Projects;


