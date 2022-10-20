import React from "react";
import { Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function DevIcons({ iconList }) {
  const theme = useTheme();

  const listItems = iconList.map((iconName, index) => (
    <Grid
      container
      item
      direction="column"
      key={`icon-key-${index}`}
      xs={3}
      sx={{ marginBottom: theme.spacing(2) }}
    >
      <img
        style={{ width: "40px", margin: "0 auto" }}
        src={`images/devIcons/${iconName.toLowerCase()}-plain.svg`}
        alt={`${iconName}-icon`}
      />

      <Typography
        variant="subtitle2"
        lineHeight="1rem"
        color="#235aa1"
        fontFamily="PT Sans Narrow, sans-serif"
        sx={{ marginTop: theme.spacing(1) }}
      >
        {iconName}
      </Typography>
    </Grid>
  ));

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ marginTop: theme.spacing(2) }}
    >
      {listItems}
    </Grid>
  );
}

export default DevIcons;
