import React from "react"
import Info from "./projectItem/Info"
import Image from "./projectItem/Image"
import { ListItem, Grid } from "@mui/material"

export default function ProjectItem({ project, index }) {
    return (
        <ListItem
            sx={{
                marginBottom: "5%",
            }}
        >
            <Grid
                container
                direction={index % 2 === 0 ? "row" : "row-reverse"}
                justifyContent="space-evenly"
            >
                <Grid item container xs={12} sm={8} md={5}>
                    <Info project={project} />
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    sm={9}
                    md={7}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Image project={project} index={index} />
                </Grid>
            </Grid>
        </ListItem>
    )
}
