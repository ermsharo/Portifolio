import { Link } from "react-router-dom";
import styled from "styled-components";
import ProjectsCarrosel from "../../organism/ProjectsCarrosel";

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

const InfoBox = styled.div``;

function ProjectsSession() {
  return (
    <SessionBox>
      <h1>Projects</h1>
      <ProjectsCarrosel />

      <div>
        <Link to={{ pathname: "/projects" }}> sdasd todos os projetos</Link>
      </div>
    </SessionBox>
  );
}

export default ProjectsSession;