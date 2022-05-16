import React, { useState } from "react"
import Name from "./Name"
import About from "./About"
import FloatingImage from "./FloatingImage"
import CONTENT from "../../content.json"
import { useMediaQuery, Grid } from "@mui/material"

export default function Home() {
    const FADE_IN_DURATION = 500
    const [showAboutMe, setShowAboutMe] = useState(false)
    const [delayName, setDelayName] = useState(0)
    const [delayAbout, setDelayAbout] = useState(FADE_IN_DURATION)
    const isLandscape = useMediaQuery("(orientation: landscape)")
    const isDesktopOrLaptop = useMediaQuery("(min-device-width: 1020px)")

    function toggleAboutMeText() {
        setShowAboutMe(!showAboutMe)
        setDelayName(showAboutMe ? FADE_IN_DURATION : 0)
        setDelayAbout(!showAboutMe ? FADE_IN_DURATION : 0)
    }

    const {
        landingPage,
        aboutMe,
        nav: { navLinks },
    } = CONTENT

    const homeContainerID =
        navLinks.find((n) => n.text === "HOME")?.id || "home-cont"

    return (
        <div
            id={homeContainerID}
            style={{
                height: "100vh",
                width: "100vw",
                margin: 0,
                padding: 0,
                background: "rgb(237,238,240)",
                background:
                    "linear-gradient(180deg, rgba(252,252,252,1) 0%, rgba(222,222,222,1) 90%)",
                position: "relative",
            }}
        >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    height: "100%",
                    width: "80vw",
                    maxWidth: "2000px",
                    margin: "0 auto",
                }}
            >
                <Grid
                    item
                    container
                    xs={isLandscape ? 6 : 12}
                    sm={isLandscape ? 6 : 9}
                    md={6}
                    lg={5}
                    sx={{
                        paddingTop: isLandscape
                            ? "3%"
                            : isDesktopOrLaptop
                            ? "5%"
                            : "",
                    }}
                >
                    <Name
                        toggleAboutMeText={toggleAboutMeText}
                        homeContainerID={homeContainerID}
                        landingPageContent={landingPage}
                        showAboutMe={showAboutMe}
                        delayName={delayName}
                        fadeInDuration={FADE_IN_DURATION}
                    />

                    <About
                        toggleAboutMeText={toggleAboutMeText}
                        homeContainerID={homeContainerID}
                        aboutMeContent={aboutMe}
                        showAboutMe={showAboutMe}
                        delayAbout={delayAbout}
                        fadeInDuration={FADE_IN_DURATION}
                    />
                </Grid>

                <Grid
                    item
                    container
                    justifyContent="center"
                    alignItems="center"
                    xs={isLandscape ? 6 : 12}
                    sm={isLandscape ? 6 : 10}
                    md={6}
                >
                    <FloatingImage fadeInDuration={FADE_IN_DURATION} />
                </Grid>
            </Grid>
        </div>
    )
}
