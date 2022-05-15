import React from "react"
import ProjectItem from "./ProjectItem"
import CONTENT from "../../content.json"
import { useMediaQuery, List, Container } from "@mui/material"

function ProjectList() {
    const { projectList } = CONTENT
    const isBigScreen = useMediaQuery("(min-width: 1600px)")
    const isLandscape = useMediaQuery("(orientation: landscape)")

    const listItems = projectList.map((p, index) => (
        <ProjectItem project={p} index={index} key={`index-${index}`} />
    ))

    return (
        <Container
            sx={{
                paddingLeft: !isLandscape
                    ? ""
                    : isBigScreen && isLandscape
                    ? ""
                    : "15%",
            }}
        >
            <List>{listItems.reverse()}</List>
        </Container>
    )
}

export default ProjectList
