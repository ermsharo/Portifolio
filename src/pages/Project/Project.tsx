import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { ProjectRequests } from "../../services/ProjectsRequests";
import Loading from "../../UI/atoms/Loading";
import Header from "../../UI/molecules/Header";
import ProjectCard from "../../UI/molecules/ProjectCard";
import parse from "html-react-parser";

export interface ProjectsProps {}

const ProjectSesionBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const SessionBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 85%;
  margin: auto;
  min-height: (100vh - 3rem);
`;

const PageTitleInfo = styled.div`
  padding-top: 8rem;

`;

function Project() {
  let { slug } = useParams();

  const [data, error, loading] = ProjectRequests();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }

  if (data) {
    let project = data.filter(
      (data: { projectSlug: string }) => data.projectSlug === slug
    );

    const renderObj = (value: string) => {
      if (value) return parse(value);
    };

    return (
      <>
        <Header />

        <SessionBox>
          <ProjectSesionBox>
            <div></div>
            <div>
              <PageTitleInfo>
                <h1>{renderObj(project[0]?.title)}</h1>
              </PageTitleInfo>
              <div>{renderObj(project[0]?.description)}</div>
              <a>{renderObj(project[0]?.projectProdLink)}</a>
              <a>{renderObj(project[0]?.projectRepoLink)}</a>
              <div>{renderObj(project[0]?.tags)}</div>
            </div>
          </ProjectSesionBox>
        </SessionBox>
      </>
    );
  }

  return <></>;
}

export default Project;
