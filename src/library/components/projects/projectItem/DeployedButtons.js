import React from "react"
import { Grid, Button } from "@mui/material"

export default function DeployedButtons({ project }) {
    const { deployed, github } = project

    return (
        <Grid container direction="row" justifyContent="flex-start">
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
                            transition: "opacity .35s ease-in-out",
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
                    {`SOURCE CODE${!github ? ": private" : ""}`}
                </Button>

                {github && (
                    <div
                        style={{
                            width: "90%",
                            height: "1px",
                            backgroundColor: "#F2511B",
                            margin: "-9px auto 0 auto",
                            transition: "opacity .35s ease-in-out",
                        }}
                    />
                )}
            </div>
        </Grid>
    )
}
