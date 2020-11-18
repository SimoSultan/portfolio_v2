import React from 'react';
import { blogList } from  './blogList.json';
import BlogItem from './BlogItem';

// Material UI components 
import { Container, Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  list:{
    marginTop: '20%',
    zIndex: 50,
    position: 'relative',
  },
}));


function BlogList() {
    const classes = useStyles();

    const listItems = blogList.map(b => (<BlogItem blog={b} />))

    return (
        <>
            <Container className={classes.list}>
                <Grid container justify="center" alignItems="center" spacing={10} >
                    {listItems.reverse()}
                </Grid>
            </Container>
        </>
    )

}

export default BlogList;