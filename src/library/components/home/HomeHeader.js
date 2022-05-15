import React from "react"
import AnimatedButton from "../other/AnimatedButton"

import Typography from "@mui/material/Typography"
import { Container, Grid } from "@mui/material"

import Fade from "react-reveal/Fade"

function HomeHeader({ toggleAboutMeText }) {
    return (
        <Container maxWidth="sm">
            <Grid
                container
                direction="column"
                justify="space-between"
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
                        SIMON
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
                        CURRAN
                    </Fade>
                </Typography>
            </Grid>

            <Grid
                container
                direction="row"
                justify="flex-end"
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
                            linkTo="home-cont"
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
