import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { ProjectRequests } from "../../services/ProjectsRequests";
import Loading from "../../UI/atoms/Loading";
import Header from "../../UI/molecules/Header";
import ProjectCard from "../../UI/molecules/ProjectCard";
import parse from "html-react-parser";

export interface ProjectsProps {}

const ProjectsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 6rem;
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
  padding-top: 6rem;
  width: 85%;
  margin: auto;
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
        <PageTitleInfo>
          <h1>Project</h1>
        </PageTitleInfo>

        <SessionBox>
          <div>{renderObj(project[0]?.title)}</div>
          <div>{renderObj(project[0]?.description)}</div>
          <a>{renderObj(project[0]?.projectProdLink)}</a>
          <a>{renderObj(project[0]?.projectRepoLink)}</a>
          <div>{renderObj(project[0]?.tags)}</div>
        </SessionBox>
      </>
    );
  }

  return <></>;
}

export default Project;
