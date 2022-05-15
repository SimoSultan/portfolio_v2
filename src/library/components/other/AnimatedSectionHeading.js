import React from "react"
import { Typography, Grid, useMediaQuery } from "@mui/material"

import Zoom from "react-reveal/Zoom"

function AnimatedSectionHeading({ text, opacity }) {
    const isLandscape = useMediaQuery("(orientation: landscape)")
    const isDesktopOrLaptop = useMediaQuery("(min-device-width: 1020px)")
    const isMobile = useMediaQuery("(max-width: 411px)")
    const isIphone5 = useMediaQuery("(max-width: 322px)")

    return (
        <Grid container>
            {isLandscape && isDesktopOrLaptop ? (
                <Grid item>
                    <Typography
                        variant="h2"
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            writingMode: "vertical-rl",
                            overflow: "hidden",
                            fontSize: "14rem",
                            textOrientation: "upright",
                            color: "#304153",
                            opacity: opacity,
                        }}
                    >
                        <Zoom bottom cascade delay={500} duration={1500}>
                            {text}
                        </Zoom>
                    </Typography>
                </Grid>
            ) : (
                <Grid
                    item
                    container
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography
                        variant="h2"
                        sx={{
                            opacity: opacity,
                            fontSize:
                                !isLandscape && isIphone5
                                    ? "2rem"
                                    : !isLandscape && isMobile
                                    ? "3rem"
                                    : "6rem",
                            width: "100%",
                            color: "#304153",
                            letterSpacing: "0.9rem",
                            textAlign: "center",
                            overflow: "hidden",
                        }}
                    >
                        <Zoom right cascade delay={500} duration={1500}>
                            {text}
                        </Zoom>
                    </Typography>
                </Grid>
            )}
        </Grid>
    )
}

export default AnimatedSectionHeading
