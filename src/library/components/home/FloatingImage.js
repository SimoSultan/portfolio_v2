import React from "react"
import profileImage from "../../img/v1_transparent.png"
import { Grid } from "@mui/material"

import Fade from "react-reveal/Fade"
import { useSpring, animated } from "react-spring"

export default function FloatingImage({ fadeInDuration }) {
    const [props, set] = useSpring(() => ({
        xy: [0, 0],
        config: { mass: 10, tension: 550, friction: 140 },
    }))

    const calc = (x, y) => [
        x - window.innerWidth / 2,
        y - window.innerHeight / 2,
    ]
    const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

    return (
        <Fade right delay={fadeInDuration} duration={fadeInDuration}>
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
                    <Grid container alignItems="center" justifyContent="center">
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
    )
}
