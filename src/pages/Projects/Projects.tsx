import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProjectRequests } from "../../services/ProjectsRequests";
import Loading from "../../UI/atoms/Loading";
import Header from "../../UI/molecules/Header";
import ProjectCard from "../../UI/molecules/ProjectCard";
import ProjectsCarrosel from "../../UI/organism/ProjectsCarrosel";
export interface ProjectsProps {}

const HomeBannerBoxElements = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;

  height: 65%;
`;

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

const findValueByKey: any = (obj: object, keyToFind: String) => {
  return (
    Object.entries(obj).reduce(
      (acc, [key, value]) =>
        key === keyToFind
          ? acc.concat(value)
          : typeof value === "object" && value
          ? acc.concat(findValueByKey(value, keyToFind))
          : acc,
      []
    )[0] || []
  );
};

function Projects() {
  const [data, error, loading] = ProjectRequests();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div></div>;
  }

  return (
    <>
      <Header />
      <SessionBox>
        <h1>Projects</h1>
        Projetos aqui
        <div>
          {" "}
          <ProjectsBox>
            {data.map((item: object, index: number) => {
              const tags = findValueByKey(item, "tags");
              const projectSmallDescription = findValueByKey(
                item,
                "small_description"
              );
              let projectProdLink = findValueByKey(item, "productionlink");
              let projectRepoLink = findValueByKey(item, "productionlink");
              const title = findValueByKey(
                findValueByKey(item, "title"),
                "rendered"
              );
              const description = findValueByKey(
                findValueByKey(item, "content"),
                "rendered"
              );
              return (
                <ProjectCard
                  tags={tags}
                  projectSmallDescription={projectSmallDescription}
                  projectProdLink={projectProdLink}
                  projectRepoLink={projectRepoLink}
                  title={title}
                  description={description}
                />
              );
            })}
          </ProjectsBox>
        </div>
      </SessionBox>
    </>
  );
}

export default Projects;
