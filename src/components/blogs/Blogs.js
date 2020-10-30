import React from 'react';
import BlogList from './BlogList';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  blogsCont: {
    height: 'fit-content',
    paddingTop: '5%',
    margin: 0,
    padding: 0,
    background: '#304153'
  },
  contToFitFooter: {
    height: '88%',
  }
}));


function Blogs() {
  const classes = useStyles();


  return (

    <div id='blogs-cont' className={classes.blogsCont}>
      <div className={classes.contToFitFooter}>
        <BlogList />
      </div>
    </div>

  );
}

export default Blogs;


