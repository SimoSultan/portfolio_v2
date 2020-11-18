import React from 'react';
import { blogList } from  './blogList.json';
import BlogItem from './BlogItem';

// Material UI components 
import { Container, Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  list:{
    marginTop: '270px',
    zIndex: 50,
    position: 'relative',
  },
}));


function BlogList() {
    const classes = useStyles();

    const listItems = blogList.map((b, index) => (<BlogItem blog={b} key={`index-${index}`}/>))

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