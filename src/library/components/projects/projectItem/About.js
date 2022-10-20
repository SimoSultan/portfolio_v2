import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function About({ project }) {
  const theme = useTheme();
  const { about } = project;
  const isPortrait = useMediaQuery("(orientation: portrait)");
  const isMobile = useMediaQuery("(max-width: 411px)");

  return (
    <Grid
      item
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        paddingTop: theme.spacing(2),
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "#235aa1",
          fontFamily: "Raleway, sans-serif",
          fontWeight: "bold",
        }}
      >
        About
      </Typography>

      <Typography
        variant={isPortrait && isMobile ? "body2" : "body1"}
        sx={{
          textAlign: "left",
          fontStyle: "italic",
          fontFamily: "Quicksand",
        }}
      >
        {about}
      </Typography>
    </Grid>
  );
}
