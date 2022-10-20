import React from "react";
import { Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Fade from "react-reveal/Fade";

export default function Image({ project, index }) {
  const theme = useTheme();
  const { deployed, gif } = project;

  return (
    <Fade left mirror={index % 2 === 0}>
      <Paper
        sx={{
          width: "100%",
          transition: "transform 1s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        {deployed ? (
          <a
            href={deployed.toString()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                width: "100%",
                margin: "0 auto",
                objectFit: "contain",
              }}
              src={gif}
              alt="app-demo"
            />
          </a>
        ) : (
          <img
            style={{
              width: "100%",
              margin: "0 auto",
              objectFit: "contain",
            }}
            src={gif}
            alt="app-demo"
          />
        )}
      </Paper>
    </Fade>
  );
}
