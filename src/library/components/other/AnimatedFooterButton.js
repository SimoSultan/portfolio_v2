import React, { useState } from "react"

import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

import TwitterIcon from "@mui/icons-material/Twitter"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import SpotifyIcon from "./SpotifyIcon"
import MediumIcon from "./MediumIcon"

import { useSpring, animated } from "react-spring"

import Fade from "react-reveal/Fade"

function AnimatedFooterButton({ text, linkTo, isPortrait, isTabletOrMobile }) {
    const [{ x, color }, set] = useSpring(() => ({ x: 100, color: "#fff" }))
    const [hover, setHover] = useState(false)

    const iconToShow = (icon) => {
        switch (icon) {
            case "twitter":
                return <TwitterIcon fontSize="large" />
            case "github":
                return <GitHubIcon fontSize="large" />
            case "linkedin":
                return <LinkedInIcon fontSize="large" />
            case "spotify":
                return <SpotifyIcon fontSize="large" />
            case "medium":
                return <MediumIcon fontSize="large" />
            case "email":
                return <EmailIcon fontSize="large" />
            default:
                break
        }
    }

    return (
        <a
            href={linkTo}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => {
                set({ x: 0, color: "#fff" })
                setHover(true)
            }}
            onMouseLeave={() => {
                set({ x: 100, color: "#fff" })
                setHover(false)
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    transform: "skew(-20deg)",
                    background: "transparent",
                    position: "relative",
                    top: 0,
                    overflow: "hidden",
                }}
            >
                <animated.div
                    style={{
                        transform: x.interpolate((v) => `translateX(-${v}%`),
                        background: "#25A9FC",
                        width: "120%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                />
            </div>

            <Grid
                container
                alignItems="center"
                justify="center"
                sx={{ position: "absolute", top: 0, padding: "10px" }}
            >
                <animated.div style={{ color }}>
                    {hover ? (
                        <Fade duration={500}>{iconToShow(text)}</Fade>
                    ) : (
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{
                                fontSize: "1.7rem",
                                lineHeight: "2rem",
                                fontFamily: "Roboto Slab, sans-serif",
                                color: "#fc8403",
                            }}
                        >
                            <Fade duration={500}>{text}</Fade>
                        </Typography>
                    )}
                </animated.div>
            </Grid>
        </a>
    )
}

export default AnimatedFooterButton
