import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// animation library and plugins
import { useSpring, animated } from "react-spring";
import Fade from "react-reveal/Fade";

function BlogItem({ blog, index }) {
  const isLandscape = useMediaQuery("(orientation: landscape)");
  const theme = useTheme();

  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const { link, img, name } = blog;

  return (
    <Grid
      item
      xs={isLandscape ? 9 : 12}
      sm={8}
      md={5}
      component="li"
      sx={{ listStyleType: "none" }}
    >
      <div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
          <Fade left mirror={index % 2 === 0}>
            <Card
              sx={{
                zIndex: 10,
                transition: "transform 0.5s ease-in-out",
                "&:hover": {
                  transform: "scale(1.03)",
                },
                "&:hover": {
                  transform: "scale(1.1)",
                },
                "&:last-child": {
                  marginBottom: "5%",
                },
                boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
                willChange: "transform",
              }}
            >
              <CardActionArea
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  sx={{
                    height: theme.breakpoints.up("sm") ? "175px" : "150px",
                  }}
                  image={img}
                  title={name}
                />

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="body1"
                    sx={{
                      fontStyle: "italic",
                    }}
                  >
                    {name}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <div
                  style={{
                    marginBottom: "2%",
                    "&:hover > *:lastChild": {
                      opacity: 0,
                    },
                  }}
                >
                  <Button
                    href={link}
                    target="_blank"
                    sx={{
                      cursor: "pointer",
                      color: "#F2511B",
                      letterSpacing: "1px",
                      fontFamily: "Roboto Slab",
                      fontSize: "1.1rem",
                    }}
                  >
                    Read More
                  </Button>

                  <div
                    style={{
                      width: "115px",
                      height: "2px",
                      backgroundColor: "#F2511B",
                      margin: "-9px 0 0 8px",
                      transition: "opacity .35s ease-in-out",
                    }}
                  />
                </div>
              </CardActions>
            </Card>
          </Fade>
        </animated.div>
      </div>
    </Grid>
  );
}

export default BlogItem;
