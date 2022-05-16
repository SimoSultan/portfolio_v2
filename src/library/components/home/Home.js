import React, { useState } from "react"
import Name from "./Name"
import About from "./About"
import FloatingImage from "./FloatingImage"
import CONTENT from "../../content.json"
import { useMediaQuery, Grid } from "@mui/material"
import { useTheme } from "@mui/material/styles"

export default function Home() {
    const FADE_IN_DURATION = 500
    const theme = useTheme()
    const [showAboutMe, setShowAboutMe] = useState(false)
    const [delayName, setDelayName] = useState(0)
    const [delayAbout, setDelayAbout] = useState(FADE_IN_DURATION)
    const isLandscape = useMediaQuery("(orientation: landscape)")
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    const isTablet =
        useMediaQuery(theme.breakpoints.up("sm")) &&
        useMediaQuery(theme.breakpoints.down("lg"))
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"))

    console.log({ isMobile })
    console.log({ isTablet })
    console.log({ isDesktop })
    console.log({ isLandscape })

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
                paddingY: theme.spacing(2),
                background: "rgb(237,238,240)",
                background:
                    "linear-gradient(180deg, rgba(252,252,252,1) 0%, rgba(222,222,222,1) 90%)",
                position: "relative",
            }}
        >
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                    height: "100%",
                    width: isMobile || isTablet ? "100vw" : "80vw",
                    maxWidth: "1700px",
                    margin: "0 auto",
                    flexWrap: isMobile ? "wrap-reverse" : "wrap",
                }}
            >
                <Grid
                    item
                    container
                    justifyContent="center"
                    alignItems="center"
                    xs={12}
                    sm={6}
                    lg={5}
                    sx={{
                        minWidth: isMobile || isTablet ? 0 : "462px",
                        paddingY: isMobile ? theme.spacing(2) : 0,
                        height: "100%",
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
                    xs={12}
                    sm={6}
                >
                    <FloatingImage fadeInDuration={FADE_IN_DURATION} />
                </Grid>
            </Grid>
        </div>
    )
}
