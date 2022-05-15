import React from "react"
import BlogItem from "./BlogItem"
import CONTENT from "../../content.json"
import { Container, Grid, useMediaQuery } from "@mui/material"

function BlogList() {
    const { blogList } = CONTENT
    const isBigScreen = useMediaQuery("(min-width: 1600px)")
    const isLandscape = useMediaQuery("(orientation: landscape)")

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
