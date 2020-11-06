// import React, { useRef, useEffect } from 'react';
import React from 'react';
import BlogList from './BlogList';

import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';

// custom styling
// import '../../stylesheets/App.css'

// // animation library and plugins
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
  // const writingRef = useRef(null)

  // useEffect(() => {
  //   gsap.fromTo(writingRef.current, {
  //     x: '70%',
  //     opacity: 0.1,
  //     scrollTrigger: {
  //       trigger: writingRef.current,
  //       start: "top 10%",
  //       end: "bottom",
  //       // end: "+=" + (window.innerHeight),
  //       pin: true,
  //       scrub: 1.5,
  //       // markers: true,
  //     }
  //   },
  //   {
  //     x: '-20%',
  //     opacity: 0.3,
  //     scrollTrigger: { 
  //       trigger: writingRef.current,
  //       // pin: true,
  //       scrub: 1.5,
  //     }
  //   });
  // }, [])

  return (

    <div id='blogs-cont' className={classes.blogsCont}>
      <div className={classes.contToFitFooter}>
        {/* <Typography variant="h2" className="section-header section-header-blog" ref={writingRef}>WRITINGS</Typography> */}
        <BlogList />
      </div>
    </div>

  );
}

export default Blogs;


