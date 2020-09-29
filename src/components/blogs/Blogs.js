import React from 'react';
import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
import Footer from '../other/Footer';
import { makeStyles } from '@material-ui/core/styles';
import BlogList from './BlogList';


const useStyles = makeStyles(() => ({
  container: {
    paddingTop: '19%'
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

      <Footer />

    </div>

  );
}

export default Blogs;


