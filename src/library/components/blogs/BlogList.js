import React from "react";
import BlogItem from "./BlogItem";
import { Container, Grid, useMediaQuery } from "@mui/material";

function BlogList({ list }) {
  const isBigScreen = useMediaQuery("(min-width: 1600px)");
  const isLandscape = useMediaQuery("(orientation: landscape)");

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
    <Container
      sx={{
        paddingLeft: isBigScreen && isLandscape ? "" : "15%",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={8}
        sx={{ paddingTop: "5%" }}
        component="ul"
      >
        {listItems}
      </Grid>
    </Container>
  );
}

export default BlogList;
