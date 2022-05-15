import React from "react"
import Copyright from "./Copyright"
import AnimatedFooterButton from "./AnimatedFooterButton"
import { Typography, Container, Grid, useMediaQuery } from "@mui/material"
// animation library and plugins
import Fade from "react-reveal/Fade"

function Footer() {
    const isPortrait = useMediaQuery("(orientation: portrait)")
    const isTabletOrMobile = useMediaQuery("(max-width: 1024px)")
    const isMobile = useMediaQuery("(max-width: 411px)")

    return (
        <div
            id="contact-cont"
            sx={{
                padding: "4%",
                background: "transparent",
                height: "auto",
                marginBottom: "35px",
            }}
        >
            <Container
                sx={{
                    boxShadow: "none",
                    marginTop: "auto",
                    width: "100%",
                    height: "100%",
                    background: "#304153",
                }}
            >
                <Grid container direction="column">
                    <Grid
                        item
                        sx={{
                            position: "relative",
                            textAlign: "center",
                            opacity: 0.3,
                            paddingTop: "3%",
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                letterSpacing: isPortrait ? "1px" : "10px",
                                fontSize: isMobile ? "3rem" : "6rem",
                                width: "90%",
                                margin: "-3% auto -6% auto",
                                color: isMobile ? "#f2f2f2" : "#e3e3e3",
                                fontFamily: "Architects Daughter, sans-serif",
                            }}
                        >
                            <Fade bottom collapse delay={500}>
                                REACH OUT
                            </Fade>
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        sx={{
                            textAlign: "center",
                            padding: "3% 0",
                            width: "90%",
                            margin: "0 auto",
                        }}
                    >
                        <Grid
                            item
                            xs={isPortrait ? 5 : (isTabletOrMobile && 4) || 2}
                            sx={{
                                cursor: "pointer",
                                position: "relative",
                                width: "140px",
                                height: "60px",
                                color: "#000",
                                textDecoration: "none",
                                margin: "2% 0",
                            }}
                        >
                            <AnimatedFooterButton
                                text="twitter"
                                linkTo="https://twitter.com/simo_sultan"
                            />
                        </Grid>

                        <Grid
                            item
                            xs={isPortrait ? 5 : (isTabletOrMobile && 4) || 2}
                            sx={{
                                cursor: "pointer",
                                position: "relative",
                                width: "140px",
                                height: "60px",
                                color: "#000",
                                textDecoration: "none",
                                margin: "2% 0",
                            }}
                        >
                            <AnimatedFooterButton
                                text="github"
                                linkTo="https://github.com/SimoSultan"
                            />
                        </Grid>

                        <Grid
                            item
                            xs={isPortrait ? 5 : (isTabletOrMobile && 4) || 2}
                            sx={{
                                cursor: "pointer",
                                position: "relative",
                                width: "140px",
                                height: "60px",
                                color: "#000",
                                textDecoration: "none",
                                margin: "2% 0",
                            }}
                        >
                            <AnimatedFooterButton
                                text="linkedin"
                                linkTo="https://www.linkedin.com/in/simo-sultan/"
                            />
                        </Grid>

                        <Grid
                            item
                            xs={isPortrait ? 5 : (isTabletOrMobile && 4) || 2}
                            sx={{
                                cursor: "pointer",
                                position: "relative",
                                width: "140px",
                                height: "60px",
                                color: "#000",
                                textDecoration: "none",
                                margin: "2% 0",
                            }}
                        >
                            <AnimatedFooterButton
                                text="spotify"
                                linkTo="https://open.spotify.com/user/1231189291"
                            />
                        </Grid>

                        <Grid
                            item
                            xs={isPortrait ? 5 : (isTabletOrMobile && 4) || 2}
                            sx={{
                                cursor: "pointer",
                                position: "relative",
                                width: "140px",
                                height: "60px",
                                color: "#000",
                                textDecoration: "none",
                                margin: "2% 0",
                            }}
                        >
                            <AnimatedFooterButton
                                text="medium"
                                linkTo="https://medium.com/@simo_sultan"
                            />
                        </Grid>

                        <Grid
                            item
                            xs={isPortrait ? 5 : (isTabletOrMobile && 4) || 2}
                            sx={{
                                cursor: "pointer",
                                position: "relative",
                                width: "140px",
                                height: "60px",
                                color: "#000",
                                textDecoration: "none",
                                margin: "2% 0",
                            }}
                        >
                            <AnimatedFooterButton
                                text="email"
                                linkTo="mailto:simosultan2020@email.com?"
                            />
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Copyright />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer
