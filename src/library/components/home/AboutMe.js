import React from "react"
import AnimatedButton from "../other/AnimatedButton"
import { useMediaQuery, Grid, Paper, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import CONTENT from "../../content.json"

import Fade from "react-reveal/Fade"

export default function AboutMe({ toggleAboutMeText }) {
    const isLandscape = useMediaQuery("(orientation: landscape)")
    const isDesktopOrLaptop = useMediaQuery("(min-device-width: 1020px)")
    const theme = useTheme()
    const {
        aboutMe: { title, description, gitHubLink, cvLink },
    } = CONTENT

    return (
        <Grid container style={{ zIndex: 500 }}>
            <Fade left big>
                <Paper
                    sx={{
                        textAlign: "justify",
                        color: theme.palette.text.secondary,
                        padding: theme.spacing(3),
                        transition: "transform 1s",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: "Quicksand, sans-serif",
                            fontWeight: "700",
                        }}
                    >
                        <strong>{title}</strong>
                    </Typography>

                    <Typography
                        variant={
                            isLandscape && isDesktopOrLaptop ? "body1" : "body2"
                        }
                        sx={{
                            fontSize:
                                isLandscape && isDesktopOrLaptop
                                    ? "1rem"
                                    : "0.9rem",
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
                                    linkTo="home-cont"
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
    )
}
