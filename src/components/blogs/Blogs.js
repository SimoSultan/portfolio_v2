import React, { useRef } from 'react';
import BlogList from './BlogList';

import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';

// custom styling
// import '../../stylesheets/App.css'

// animation library and plugins
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

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
  // get the DOM reference for the parent container for the blog list
  // pass this reference into the list to be able to use as a trigger
  const blogCont = useRef(null)

  return (

    <div id='blogs-cont' className={classes.blogsCont} >
      <div className={classes.contToFitFooter} ref={blogCont}>
        <BlogList blogCont={blogCont} />
      </div>
    </div>

  );
}

export default Blogs;


