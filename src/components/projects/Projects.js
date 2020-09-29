import React from 'react';
import ProjectList from './ProjectList';

import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: '10%'
  },
  projectsContainer: {
    height: 'fit-content',
    marginBottom: '5%'
  }
}));


function Projects() {
  const classes = useStyles();

  return (

    <div id='projects-cont' className={classes.projectsContainer}>
      <Container className={classes.container}>
        <ProjectList />
      </Container>
    </div>

  );
}

export default Projects;


