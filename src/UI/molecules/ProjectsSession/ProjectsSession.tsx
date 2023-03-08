import { Link } from "react-router-dom";
import styled from "styled-components";
import ProjectsCarrosel from "../../organism/ProjectsCarrosel";
import NavigationLink from "../../atoms/NavigationLink";

export interface ProjectsProps {}


const SessionBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 85%;
  margin: auto;
  padding-top: 35vh;
  padding-bottom: 5vh
`;



const AllProjects = styled.div`
  font-size: 1.5rem;
  text-align: right;
`;


function ProjectsSession() {
  return (
    <SessionBox>
      <h1>Projects</h1>
      <ProjectsCarrosel />

      <AllProjects>
        <NavigationLink to={{ pathname: "/projects" }}>
          Todos os projetos
        </NavigationLink>
      </AllProjects>
    </SessionBox>
  );
}

export default ProjectsSession;
