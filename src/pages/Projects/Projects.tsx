import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProjectRequests } from "../../services/ProjectsRequests";
import Loading from "../../UI/atoms/Loading";
import Header from "../../UI/molecules/Header";
import ProjectCard from "../../UI/molecules/ProjectCard";
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
`;

const PageTitleInfo = styled.div`
  padding-top: 6rem;
  width: 85%;
  margin: auto;
`;




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
      <PageTitleInfo>
        {" "}
        <h1>Projects</h1>
      </PageTitleInfo>
      <SessionBox>
        <ProjectsBox>
          {data.map((item: object) => {
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
      </SessionBox>
    </>
  );
}

export default Projects;
