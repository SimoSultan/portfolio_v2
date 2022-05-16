import React from "react"
import DevIcons from "./DevIcons"
import Title from "./Title"
import About from "./About"
import DeployedButtons from "./DeployedButtons"
import { Grid, Paper, Button, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"

import Fade from "react-reveal/Fade"

export default function Info({ project }) {
    const theme = useTheme()
    const { stack } = project

    return (
        <Fade bottom>
            <Paper
                sx={{
                    padding: theme.spacing(4),
                    textAlign: "center",
                    color: theme.palette.text.secondary,
                }}
            >
                <Title project={project} />
                <About project={project} />

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

                <DeployedButtons project={project} />
            </Paper>
        </Fade>
    )
}
