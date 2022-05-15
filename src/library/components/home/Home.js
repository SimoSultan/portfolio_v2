import React, { useState } from "react"
import HomeHeader from "./HomeHeader"
import AboutMe from "./AboutMe"
import profileImage from "../../img/v1_transparent.png"

import Grid from "@mui/material/Grid"

import { useMediaQuery } from "@mui/material"
import Fade from "react-reveal/Fade"
import { useSpring, animated } from "react-spring"

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

function Home() {
    const [showAboutMe, setShowAboutMe] = useState(false)
    const [delayName, setDelayName] = useState(0)
    const [delayAbout, setDelayAbout] = useState(500)
    const isLandscape = useMediaQuery("(orientation: landscape)")
    const isDesktopOrLaptop = useMediaQuery("(min-device-width: 1020px)")
    const [props, set] = useSpring(() => ({
        xy: [0, 0],
        config: { mass: 10, tension: 550, friction: 140 },
    }))

    function toggleAboutMeText() {
        setShowAboutMe(!showAboutMe)
        setDelayName(showAboutMe ? 600 : 0)
        setDelayAbout(!showAboutMe ? 600 : 0)
    }

    return (
        <div
            id="home-cont"
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
                justify="space-evenly"
                alignItems="center"
                sx={{
                    height: "100%",
                    width: "90vw",
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
                    <Fade
                        when={!showAboutMe}
                        right
                        mirror={!showAboutMe}
                        collapse
                        delay={delayName}
                        duration={600}
                    >
                        <HomeHeader toggleAboutMeText={toggleAboutMeText} />
                    </Fade>

                    <Fade
                        when={showAboutMe}
                        right
                        mirror={showAboutMe}
                        collapse
                        delay={delayAbout}
                        duration={600}
                    >
                        <AboutMe toggleAboutMeText={toggleAboutMeText} />
                    </Fade>
                </Grid>

                <Grid
                    item
                    container
                    justify="center"
                    alignItems="center"
                    xs={isLandscape ? 6 : 12}
                    sm={isLandscape ? 6 : 10}
                    md={6}
                >
                    <Fade right delay={500} duration={1000}>
                        <div
                            onMouseMove={({ clientX: x, clientY: y }) =>
                                set({ xy: calc(x, y) })
                            }
                        >
                            <animated.div
                                style={{
                                    transform: props.xy.interpolate(trans1),
                                }}
                            >
                                <Grid
                                    container
                                    alignItems="center"
                                    justify="center"
                                >
                                    <img
                                        style={{
                                            width: "80%",
                                            maxWidth: "700px",
                                            margin: "0 auto",
                                            zIndex: 0,
                                        }}
                                        src={profileImage}
                                        alt="profile"
                                    />
                                </Grid>
                            </animated.div>
                        </div>
                    </Fade>
                </Grid>
            </Grid>

            {/* <Arrow /> */}
        </div>
    )
}

export default Home
