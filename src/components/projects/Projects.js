import React from 'react';
import ProjectList from './ProjectList';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  projectsContainer: {
    height: 'fit-content',
    paddingTop: '5%',
    marginBottom: '5%'
  }
}));


function Projects() {
  const classes = useStyles();

  return (

    <div id='projects-cont' className={classes.projectsContainer}>
      <ProjectList />
    </div>

  );
}

export default Projects;


