/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ProjectCard from "../../molecules/ProjectCard";
import styled from "styled-components";
import Loading from "../../atoms/Loading";
import { ProjectRequests } from "../../../services/ProjectsRequests";
export interface ProjectsCarroselProps {}

const ProjectsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
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

function ProjectsCarrosel({}: ProjectsCarroselProps) {
  const [data, error, loading] = ProjectRequests();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div></div>;
  }
  console.log("data", data);

  return (
    <ProjectsBox>
      {data.map((item: object, index: number) => {
        const tags = findValueByKey(item, "tags");
        const projectSmallDescription = findValueByKey(
          item,
          "small_description"
        );
        let projectProdLink = findValueByKey(item, "productionlink");
        let projectRepoLink = findValueByKey(item, "productionlink");
        const title = findValueByKey(findValueByKey(item, "title"), "rendered");
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
  );
}

export default ProjectsCarrosel;
