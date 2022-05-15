import React from "react"
import CONTENT from "../../content.json"
import ProjectItem from "./ProjectItem"

// Material UI components
import List from "@mui/material/List"
import Container from "@mui/material/Container"
import { useMediaQuery } from "@mui/material"

function ProjectList() {
    const isBigScreen = useMediaQuery("(min-width: 1600px)")
    const isLandscape = useMediaQuery("(orientation: landscape)")

    const { projectList } = CONTENT
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
