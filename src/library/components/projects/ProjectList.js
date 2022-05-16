import React from "react"
import ProjectItem from "./ProjectItem"
import { useMediaQuery, List, Container } from "@mui/material"

function ProjectList({ list }) {
    const isBigScreen = useMediaQuery("(min-width: 1600px)")
    const isLandscape = useMediaQuery("(orientation: landscape)")

    const listItems = list
        .map((p, index) => {
            return (
                Boolean(p.show) && (
                    <ProjectItem
                        project={p}
                        index={index}
                        key={`project-item-${index}`}
                    />
                )
            )
        })
        .reverse()

    return (
        <Container maxWidth="xl">
            <List>{listItems}</List>
        </Container>
    )
}

export default ProjectList
