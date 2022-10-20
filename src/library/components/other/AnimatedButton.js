import React from "react";
import { Typography, Grid } from "@mui/material";

import { Link } from "react-scroll";
import { useSpring, animated } from "react-spring";

function AnimatedButton({ text, linkTo, callback = false }) {
  const [{ x, color }, set] = useSpring(() => ({ x: 100, color: "#F2511B" }));

  // supply an empty function to the onclick if a callback wasn't supplied as a prop
  if (!callback) callback = () => {};

  return (
    <Link
      activeClass="active"
      to={linkTo}
      spy={true}
      smooth={true}
      duration={1000}
      onClick={callback}
    >
      <div
        style={{
          cursor: "pointer",
          position: "relative",
          width: "140px",
          height: "40px",
          color: "#000",
        }}
        onMouseEnter={() => set({ x: 0, opacity: 1, color: "#fff" })}
        onMouseLeave={() => set({ x: 100, opacity: 0.6, color: "#F2511B" })}
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
          justifyContent="center"
          sx={{
            opacity: 1,
            position: "absolute",
            top: 0,
            padding: "5px",
          }}
        >
          <animated.span style={{ color }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Roboto Slab",
                fontWeight: "bold",
              }}
            >
              {text}
            </Typography>
          </animated.span>
        </Grid>
      </div>
    </Link>
  );
}

export default AnimatedButton;
