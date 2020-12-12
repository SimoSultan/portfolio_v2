import React from 'react';
import { blogList } from  './blogList.json';
import BlogItem from './BlogItem';

import { Container, Grid } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'


const listItems = blogList.map((b, index) => (<BlogItem blog={b} index={index} key={`index-${index}`}/>))


function BlogList() {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1600px)' })
    const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })

    return (

        <Container 
            style={{
                paddingLeft: !isLandscape 
                    ? '' 
                    : isBigScreen && isLandscape 
                        ? ''
                        : '15%'
            }}
        >
        
            <Grid container justify="center" alignItems="center" spacing={8} style={{paddingTop: '5%'}} >

                {listItems.reverse()}

            </Grid>

        </Container>

    )

}

export default BlogList;