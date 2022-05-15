import React from "react"
import ProjectItem from "./ProjectItem"
import { useMediaQuery, List, Container } from "@mui/material"

function ProjectList({ list }) {
    const isBigScreen = useMediaQuery("(min-width: 1600px)")
    const isLandscape = useMediaQuery("(orientation: landscape)")

    const listItems = list
        .map((p, index) => (
            <ProjectItem
                project={p}
                index={index}
                key={`project-item-${index}`}
            />
        ))
        .reverse()

    return (
        <Container
            sx={{
                paddingLeft: isBigScreen && isLandscape ? "" : "15%",
            }}
        >
            <List>{listItems}</List>
        </Container>
    )
}

export default ProjectList
