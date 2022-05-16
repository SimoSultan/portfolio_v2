import React from "react"
import { Grid, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"

export default function About({ project }) {
    const theme = useTheme()
    const { about } = project

    return (
        <Grid
            item
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{
                paddingTop: theme.spacing(2),
                paddingX: theme.spacing(4),
            }}
        >
            <Typography
                variant="body1"
                sx={{
                    color: "#235aa1",
                    fontSize: "1.2rem",
                    fontFamily: "Raleway, sans-serif",
                    fontWeight: "bold",
                }}
            >
                About
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    textAlign: "left",
                    fontStyle: "italic",
                    fontFamily: "Quicksand",
                }}
            >
                {about}
            </Typography>
        </Grid>
    )
}
