import React from "react"
import CONTENT from "../../content.json"
import BlogItem from "./BlogItem"

import { Container, Grid, useMediaQuery } from "@mui/material"

function BlogList() {
    const isBigScreen = useMediaQuery("(min-width: 1600px)")
    const isLandscape = useMediaQuery("(orientation: landscape)")

    const { blogList } = CONTENT
    const listItems = blogList.map((b, index) => (
        <BlogItem blog={b} index={index} key={`index-${index}`} />
    ))
    return (
        <Container
            sx={{
                paddingLeft: !isLandscape
                    ? ""
                    : isBigScreen && isLandscape
                    ? ""
                    : "15%",
            }}
        >
            <Grid
                container
                justify="center"
                alignItems="center"
                spacing={8}
                sx={{ paddingTop: "5%" }}
            >
                {listItems.reverse()}
            </Grid>
        </Container>
    )
}

export default BlogList
