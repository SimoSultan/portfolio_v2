import React from "react"
import ProjectList from "./ProjectList"

import { AnimatedSectionHeading } from "../exports"

function Projects() {
    return (
        <div
            id="projects-cont"
            style={{
                height: "fit-content",
                paddingTop: "5%",
                paddingBottom: "5%",
                background: "rgb(252,252,252)",
                background:
                    "linear-gradient(171deg, rgba(252,252,252,1) 0%, rgba(222,222,222,1) 90%)",
                position: "relative",
            }}
        >
            <AnimatedSectionHeading text={"PROJECTS"} opacity={0.3} />

            <ProjectList />
        </div>
    )
}

export default Projects
