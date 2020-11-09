import React, { useRef, useEffect } from 'react';
// import React from 'react';
import BlogList from './BlogList';

import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';

// custom styling
// import '../../stylesheets/App.css'

// animation library and plugins
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const useStyles = makeStyles(() => ({
  blogsCont: {
    height: 'fit-content',
    paddingTop: '5%',
    margin: 0,
    padding: 0,
    background: '#304153',
  },
  contToFitFooter: {
    height: '88%',
  }
}));


function Blogs() {
  const classes = useStyles();
  const blogCont = useRef(null)

  return (

    <div id='blogs-cont' className={classes.blogsCont} ref={blogCont} >
      <div className={classes.contToFitFooter}>
        <BlogList blogCont={blogCont} />
      </div>
    </div>

  );
}

export default Blogs;


