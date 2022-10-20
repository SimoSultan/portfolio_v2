import React from "react";
import Info from "./projectItem/Info";
import Image from "./projectItem/Image";
import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function ProjectItem({ project, index }) {
  const theme = useTheme();
  const isPortrait = useMediaQuery("(orientation: portrait)");
  const isMobile = useMediaQuery("(max-width: 411px)");

  return (
    <Grid
      component="li"
      container
      direction={index % 2 === 0 ? "row" : "row-reverse"}
      sx={{ marginBottom: "5%" }}
    >
      <Grid
        item
        container
        xs={12}
        sm={6}
        alignItems="center"
        justifyContent="center"
        sx={{
          py: theme.spacing(4),
          px: theme.spacing(isMobile && isPortrait ? 0 : 4),
        }}
      >
        <Info project={project} />
      </Grid>
      <Grid
        item
        container
        xs={12}
        sm={6}
        alignItems="center"
        justifyContent="center"
      >
        <Image project={project} index={index} />
      </Grid>
    </Grid>
  );
}
