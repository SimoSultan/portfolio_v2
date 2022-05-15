import React from "react"
import { AnimatedButton } from "../exports"
import { Container, Grid, Typography } from "@mui/material"
import CONTENT from "../../content.json"

import Fade from "react-reveal/Fade"

function HomeHeader({
    toggleAboutMeText,
    homeContainerID,
    landingPageContent,
}) {
    const { landingPage: { firstName, lastName } = landingPageContent } =
        CONTENT

    return (
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
                    <Fade left cascade duration={1000}>
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
                    <Fade left cascade duration={1500}>
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
                <Fade bottom delay={500} duration={1000}>
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
    )
}

export default HomeHeader
