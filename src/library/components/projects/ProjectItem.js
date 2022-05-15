import React from "react"
import DevIcons from "./DevIcons"
import { ListItem, Grid, Paper, Button, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"

import Fade from "react-reveal/Fade"

function ProjectItem({ project, index }) {
    const theme = useTheme()
    const { logo, name, what, why, stack, deployed, github, gif } = project

    return (
        <ListItem
            sx={{
                height: "100%",
                marginBottom: "12%",
                "&:lastChild": {
                    marginBottom: "5%",
                },
            }}
        >
            <Grid
                container
                spacing={5}
                direction={index % 2 === 0 ? "row" : "row-reverse"}
                justifyContent="center"
                alignItems="center"
            >
                <Grid
                    item
                    container
                    xs={12}
                    sm={8}
                    md={5}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Fade bottom>
                        <Paper
                            sx={{
                                padding: theme.spacing(3),
                                textAlign: "center",
                                color: theme.palette.text.secondary,
                            }}
                        >
                            <Grid item container>
                                <Grid
                                    item
                                    container
                                    xs={4}
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <img
                                        style={{ width: "50%" }}
                                        src={logo}
                                        alt="logo"
                                    />
                                </Grid>

                                <Grid
                                    item
                                    container
                                    xs={8}
                                    justifyContent="flex-start"
                                    alignItems="center"
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            width: "max-content",
                                            maxWidth: "90%",
                                            fontWeight: "bold",
                                            fontFamily: "Raleway, sans-serif",
                                            color: "#235aa1",
                                        }}
                                    >
                                        {name}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid
                                item
                                container
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        paddingTop: "4%",
                                        marginLeft: "6%",
                                        color: "#235aa1",
                                        fontSize: "1.2rem",
                                        fontFamily: "Raleway, sans-serif",
                                        fontWeight: "bold",
                                    }}
                                >
                                    What
                                </Typography>

                                <Typography
                                    sx={{
                                        textAlign: "left",
                                        fontStyle: "italic",
                                        fontFamily: "Quicksand",
                                    }}
                                >
                                    {what}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        paddingTop: "4%",
                                        marginLeft: "6%",
                                        color: "#235aa1",
                                        fontSize: "1.2rem",
                                        fontFamily: "Raleway, sans-serif",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Why
                                </Typography>

                                <Typography
                                    sx={{
                                        textAlign: "left",
                                        fontStyle: "italic",
                                        fontFamily: "Quicksand",
                                    }}
                                >
                                    {why}
                                </Typography>
                            </Grid>

                            <Grid
                                item
                                container
                                direction="row"
                                justifyContent="space-around"
                                alignItems="center"
                                sx={{ height: "max-content", width: "100%" }}
                            >
                                <DevIcons iconList={stack} />
                            </Grid>

                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                            >
                                <div
                                    style={{
                                        "&:hover > *:lastChild": {
                                            opacity: 0,
                                        },
                                    }}
                                >
                                    <Button
                                        href={deployed.toString()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        disabled={deployed === false}
                                        sx={{
                                            cursor: "pointer",
                                            color: "#F2511B",
                                            letterSpacing: "1px",
                                            fontFamily: "Roboto Slab",
                                            fontSize: "0.9rem",
                                        }}
                                    >
                                        {`DEMO${!deployed ? ": n/a" : ""}`}
                                    </Button>

                                    {deployed && (
                                        <div
                                            style={{
                                                width: "78%",
                                                height: "1px",
                                                backgroundColor: "#F2511B",
                                                margin: "-9px auto 0 auto",
                                                transition:
                                                    "opacity .35s ease-in-out",
                                            }}
                                        />
                                    )}
                                </div>

                                <div
                                    style={{
                                        "&:hover > *:lastChild": {
                                            opacity: 0,
                                        },
                                    }}
                                >
                                    <Button
                                        href={github.toString()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        disabled={github === false}
                                        sx={{
                                            cursor: "pointer",
                                            color: "#F2511B",
                                            letterSpacing: "1px",
                                            fontFamily: "Roboto Slab",
                                            fontSize: "0.9rem",
                                        }}
                                    >
                                        {`SOURCE CODE${
                                            !github ? ": private" : ""
                                        }`}
                                    </Button>

                                    {github && (
                                        <div
                                            style={{
                                                width: "90%",
                                                height: "1px",
                                                backgroundColor: "#F2511B",
                                                margin: "-9px auto 0 auto",
                                                transition:
                                                    "opacity .35s ease-in-out",
                                            }}
                                        />
                                    )}
                                </div>
                            </Grid>
                        </Paper>
                    </Fade>
                </Grid>

                <Grid item container xs={12} sm={9} md={7}>
                    <Fade left mirror={index % 2 === 0}>
                        <Paper
                            sx={{
                                transition: "transform 1s",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                            }}
                        >
                            {deployed ? (
                                <a
                                    href={deployed.toString()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        style={{
                                            width: "100%",
                                            padding: "0",
                                            overflow: "hidden",
                                        }}
                                        src={gif}
                                        alt="app-demo"
                                    />
                                </a>
                            ) : (
                                <img
                                    style={{
                                        width: "100%",
                                        padding: "0",
                                        overflow: "hidden",
                                    }}
                                    src={gif}
                                    alt="app-demo"
                                />
                            )}
                        </Paper>
                    </Fade>
                </Grid>
            </Grid>
        </ListItem>
    )
}

export default ProjectItem
