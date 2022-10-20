import React from "react";
import { Grid, Typography } from "@mui/material";

export default function Title({ project }) {
  const { logo, name } = project;

  return (
    <Grid item container justifyContent="space-around">
      <Grid sx={{ width: "30%" }}>
        <img
          style={{ width: "75px", objectFit: "contain" }}
          src={logo}
          alt={`${name}-logo`}
        />
      </Grid>

      <Grid
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        sx={{ width: "70%" }}
      >
        <Typography
          variant="h4"
          sx={{
            maxWidth: "90%",
            fontWeight: "bold",
            fontFamily: "Raleway, sans-serif",
            color: "#235aa1",
          }}
        >
          {name}
        </Typography>
      </Grid>
    </Grid>
  );
}
