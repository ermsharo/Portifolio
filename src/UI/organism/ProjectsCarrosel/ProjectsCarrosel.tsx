import React from "react";
import ProjectCard from "../../molecules/ProjectCard";
import styled from "styled-components";
export interface ProjectsCarroselProps {}

const ProjectsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:2rem;
`;

let Projects = ["aaa", "bbb", "ccc"];

function ProjectsCarrosel({}: ProjectsCarroselProps) {
  return (
    <ProjectsBox>
      {Projects.map((item, index) => {
        return <ProjectCard />;
      })}
    </ProjectsBox>
  );
}

export default ProjectsCarrosel;
