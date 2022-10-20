import React from "react";
import ProjectItem from "./ProjectItem";
import { Container } from "@mui/material";

export default function ProjectList({ list }) {
  const listItems = list
    .filter((p) => Boolean(p.show))
    .map((p, index) => (
      <ProjectItem project={p} index={index} key={`project-item-${index}`} />
    ))
    .reverse();

  return (
    <Container maxWidth="xl" component="ul">
      {listItems}
    </Container>
  );
}
