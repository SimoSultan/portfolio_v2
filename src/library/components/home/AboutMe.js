import React from "react"
import AnimatedButton from "../other/AnimatedButton"

import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"

import Fade from "react-reveal/Fade"
import { useMediaQuery } from "@mui/material"

function AboutMe({ toggleAboutMeText }) {
    const isLandscape = useMediaQuery("(orientation: landscape)")
    const isDesktopOrLaptop = useMediaQuery("(min-device-width: 1020px)")
    const theme = useTheme()

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
                        <strong>Why did I become a developer you ask?</strong>
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
                        <em>
                            {
                                "Easy! For the creativity and problem solving. Coding is like a Maxibon, it's better than the sum of its parts, where each part being creativity and problem solving. I love the highs, learn a lot from the lows and find the community and diversity surrounding tech to be like home."
                            }
                        </em>

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
                                href="https://github.com/SimoSultan"
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
                                href="https://drive.google.com/file/d/1XZXNrNisou74rIXNXF-92RCv6nPwQhk6/view?usp=sharing"
                            >
                                {"my CV"}
                            </a>
                        </strong>
                        {"."}
                    </Typography>

                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
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

export default AboutMe
