import React from "react";
import AnimatedButton from "../other/AnimatedButton";
import { useMediaQuery, Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Fade from "react-reveal/Fade";

export default function About({
  toggleAboutMeText,
  homeContainerID,
  aboutMeContent,
  showAboutMe,
  delayAbout,
  fadeInDuration,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery("(orientation: landscape)");
  const isDesktopOrLaptop = useMediaQuery("(min-device-width: 1020px)");
  const { title, description, gitHubLink, cvLink } = aboutMeContent;

  return (
    <Fade
      when={showAboutMe}
      right
      mirror={showAboutMe}
      collapse
      delay={delayAbout}
      duration={fadeInDuration}
    >
      <Grid
        container
        item
        style={{
          zIndex: 500,
          paddingX: theme.spacing(3),
          width: isMobile ? "90vw" : "100%",
        }}
      >
        <Fade left big>
          <Paper
            sx={{
              textAlign: "justify",
              color: theme.palette.text.secondary,
              padding: theme.spacing(4),
              transition: "transform 1s",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "700",
              }}
            >
              <strong>{title}</strong>
            </Typography>

            <Typography
              variant={isLandscape && isDesktopOrLaptop ? "body1" : "body2"}
              sx={{
                fontSize: isLandscape && isDesktopOrLaptop ? "1rem" : "0.9rem",
                marginTop: "3%",
                fontFamily: "Quicksand, sans-serif",
                lineHeight: "1.5rem",
              }}
            >
              <em>{description}</em>

              <br />
              <br />

              {"Check out my work on "}

              <strong>
                <a
                  style={{
                    color: "#e66f47",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={gitHubLink}
                >
                  {"GitHub"}
                </a>
              </strong>

              {", or grab "}

              <strong>
                <a
                  style={{
                    color: "#e66f47",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={cvLink}
                >
                  {"my CV"}
                </a>
              </strong>
              {"."}
            </Typography>

            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Fade left delay={500} duration={1500}>
                <div
                  style={{
                    marginTop: "4%",
                    "&:hover > *:lastChild": {
                      opacity: 0,
                    },
                  }}
                >
                  <AnimatedButton
                    text="OK!"
                    linkTo={homeContainerID}
                    callback={toggleAboutMeText}
                  />

                  <div
                    style={{
                      width: "25%",
                      height: "2px",
                      backgroundColor: "#F2511B",
                      margin: "-8px auto 0 auto",
                      transition: "opacity .2s ease-in-out",
                    }}
                  ></div>
                </div>
              </Fade>
            </Grid>
          </Paper>
        </Fade>
      </Grid>
    </Fade>
  );
}
