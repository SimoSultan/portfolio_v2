import React from 'react';
import { blogList } from  './blogList.json';
import BlogItem from './BlogItem';

// Material UI components 
import { Container, Grid, makeStyles } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'


const useStyles = makeStyles(() => ({
  list:{
    // marginTop: '270px',
    zIndex: 50,
    position: 'relative',
  },
}));



const listItems = blogList.map((b, index) => (<BlogItem blog={b} index={index} key={`index-${index}`}/>))



function BlogList() {
    const classes = useStyles();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        
        <Container 
            className={classes.list} 
            style={{
                marginTop: `${!isTabletOrMobile ? '270px' : '100px'}`
            }}>

            <Grid container justify="center" alignItems="center" spacing={10} >

                {listItems.reverse()}

            </Grid>

        </Container>

    )

}

export default BlogList;