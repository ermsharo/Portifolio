import { Link } from "react-router-dom";
import styled from "styled-components";
import ProjectsCarrosel from "../../organism/ProjectsCarrosel";
import NavigationLink from "../../atoms/NavigationLink";
type LinkProps = {};

export interface ProjectsProps {}

const HomeBannerBoxElements = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;

  height: 65%;
`;

const SessionBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 85%;
  margin: auto;
`;

const SessionTitle = styled.div`
  font-size: 3.5rem;
  padding: 1.5rem;
`;

const SessionSubtitle = styled.div`
  font-size: 1.5rem;
  padding: 2rem;
`;

const AllProjects = styled.div`
  font-size: 1.5rem;
  text-align: right;
`;

const InfoBox = styled.div``;

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
