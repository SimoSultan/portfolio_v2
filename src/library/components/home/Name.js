import React from "react"
import { AnimatedButton } from "../exports"
import { Container, Grid, Typography } from "@mui/material"

import Fade from "react-reveal/Fade"

export default function Name({
    toggleAboutMeText,
    homeContainerID,
    landingPageContent,
    showAboutMe,
    delayName,
    fadeInDuration,
}) {
    const { firstName, lastName } = landingPageContent
    const FIRST_NAME_FADE_IN_DURATION = 1000
    const LAST_NAME_FADE_IN_DURATION = 1500
    const WHO_BUTTON_FADE_IN_DURATION = 1000

    return (
        <Fade
            when={!showAboutMe}
            right
            mirror={!showAboutMe}
            collapse
            delay={delayName}
            duration={fadeInDuration}
        >
            <Container maxWidth="sm">
                <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Typography
                        variant="h1"
                        sx={{
                            width: "max-content",
                            fontFamily: "Quicksand",
                            fontWeight: 500,
                            fontSize: 17,
                        }}
                    >
                        <Fade
                            left
                            cascade
                            duration={FIRST_NAME_FADE_IN_DURATION}
                        >
                            {firstName.toString().toUpperCase()}
                        </Fade>
                    </Typography>

                    <Typography
                        variant="h1"
                        sx={{
                            margin: 0,
                            fontFamily: "Quicksand",
                            fontWeight: 500,
                            fontSize: 17,
                        }}
                    >
                        <Fade
                            left
                            cascade
                            duration={LAST_NAME_FADE_IN_DURATION}
                        >
                            {lastName.toString().toUpperCase()}
                        </Fade>
                    </Typography>
                </Grid>

                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <Fade
                        bottom
                        delay={fadeInDuration}
                        duration={WHO_BUTTON_FADE_IN_DURATION}
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
                            ></div>
                        </div>
                    </Fade>
                </Grid>
            </Container>
        </Fade>
    )
}
