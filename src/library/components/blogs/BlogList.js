import React from "react";
import BlogItem from "./BlogItem";
import { Container, Grid } from "@mui/material";

function BlogList({ list }) {
  const listItems = list
    .map((b, index) => {
      return (
        Boolean(b.show) && (
          <BlogItem blog={b} index={index} key={`blog-item-${index}`} />
        )
      );
    })
    .reverse();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ paddingTop: "5%", px: 1 }}
        component="ul"
      >
        {listItems}
      </Grid>
    </Container>
  );
}

export default BlogList;
