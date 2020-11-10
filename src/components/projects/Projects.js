import React, { useRef }  from 'react';
import ProjectList from './ProjectList';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  projectsContainer: {
    height: 'fit-content',
    paddingTop: '5%',
    marginBottom: '5%',
    // position: 'relative',
    // height: '100%',
    // width: '100%',
    // zIndex: '100'
  }
}));


function Projects() {
  const classes = useStyles();
  const projectCont = useRef(null)

  return (

    <div id='projects-cont' className={classes.projectsContainer} ref={projectCont}>
      <ProjectList projectCont={projectCont}/>
    </div>

  );
}

export default Projects;


