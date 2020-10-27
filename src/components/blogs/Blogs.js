import React from 'react';
import BlogList from './BlogList';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: '10%'
  },
  blogsCont: {
    height: 'fit-content',
    margin: 0,
    padding: 0,
    background: '#304153'
  }
}));


function Blogs() {
  const classes = useStyles();


  return (

    <div id='blogs-cont' className={classes.blogsCont}>

      <div style={{ height: '88%'}}>

        <Container className={classes.container}>
          <BlogList />
        </Container>

      </div>

    </div>

  );
}

export default Blogs;


