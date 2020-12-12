import React from 'react';
import BlogList from './BlogList';
import { Footer } from "../export";
import { AnimatedSectionHeading } from '../export';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    blogsCont: {
        height: 'fit-content',
        background: 'rgb(62,148,215)',
        // eslint-disable-next-line
        background: 'linear-gradient(120deg, rgba(62,148,215,1) 0%, rgba(28,86,129,1) 90%)',
        zIndex: 25,
        position: 'relative',
        overflowY: 'hidden',
        paddingTop: '5%',
    },
    contToFitFooter: {
        height: '88%',
    },
}));


function Blogs() {
  const classes = useStyles();
  
  return (

    <div id='blogs-cont' className={classes.blogsCont} >

        <div className={classes.contToFitFooter}>

            <AnimatedSectionHeading text={"BLOGS"} opacity={0.8}/>

            <BlogList />

        </div>
            
        <Footer />

    </div>

  );
}

export default Blogs;


