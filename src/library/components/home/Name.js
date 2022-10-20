import React from "react";
import { AnimatedButton } from "../exports";
import { Grid, Typography } from "@mui/material";

import Fade from "react-reveal/Fade";

export default function Name({
  toggleAboutMeText,
  homeContainerID,
  landingPageContent,
  showAboutMe,
  delayName,
  fadeInDuration,
}) {
  const { firstName, lastName } = landingPageContent;
  const FIRST_NAME_FADE_IN_DURATION = 1000;
  const LAST_NAME_FADE_IN_DURATION = 1500;
  const WHO_BUTTON_FADE_IN_DURATION = 1000;

  return (
    <Fade
      when={!showAboutMe}
      right
      mirror={!showAboutMe}
      collapse
      delay={delayName}
      duration={fadeInDuration}
    >
      <Grid container direction="column">
        <Grid
          item
          container
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Typography variant="h1">
            <Fade left cascade duration={FIRST_NAME_FADE_IN_DURATION}>
              {firstName.toString().toUpperCase()}
            </Fade>
          </Typography>

          <Typography variant="h1">
            <Fade left cascade duration={LAST_NAME_FADE_IN_DURATION}>
              {lastName.toString().toUpperCase()}
            </Fade>
          </Typography>
        </Grid>

        <Grid
          id="FIND_ME"
          container
          sx={{
            width: "95%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Fade
            bottom
            delay={fadeInDuration}
            duration={WHO_BUTTON_FADE_IN_DURATION}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <div
              style={{
                "&:hover > *:lastChild": {
                  opacity: 0,
                },
              }}
            >
              <AnimatedButton
                text="WHO?"
                linkTo={homeContainerID}
                callback={toggleAboutMeText}
              />
              <div
                style={{
                  width: "40%",
                  height: "2px",
                  backgroundColor: "#F2511B",
                  margin: "-8px auto 0 auto",
                  transition: "opacity .2s ease-in-out",
                }}
              />
            </div>
          </Fade>
        </Grid>
      </Grid>
    </Fade>
  );
}
