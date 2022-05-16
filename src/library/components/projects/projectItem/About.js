import React from "react"
import { Grid, Typography } from "@mui/material"

export default function About({ project }) {
    const { what, why } = project

    return (
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
    )
}
