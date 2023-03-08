/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ProjectCard from "../../molecules/ProjectCard";
import styled from "styled-components";
import Loading from "../../atoms/Loading";
import { ProjectRequests } from "../../../services/ProjectsRequests";
import wpData from "../../../assets/staticData/data.json";

export interface ProjectsCarroselProps {}

const ProjectsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

export interface ProjectCardProps {
  tags?: string[];
  projectSmallDescription: string;
  projectProdLink?: string;
  projectRepoLink?: string;
  projectSlug: string;
  title: string;
  description: string;
}

const formatData = (data: any) => {
  return data.map((item: object) => {
    return {
      title: findValueByKey(findValueByKey(item, "title"), "rendered"),
      description: findValueByKey(findValueByKey(item, "content"), "rendered"),
      projectSlug: findValueByKey(item, "slug"),
      projectRepoLink: findValueByKey(item, "productionlink"),
      projectProdLink: findValueByKey(item, "productionlink"),
      projectSmallDescription: findValueByKey(item, "small_description"),
      tags: findValueByKey(item, "tags"),
    };
  });
};

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
  const data = formatData(wpData);

  console.log("data", data);

  return (
    <ProjectsBox>
      {data.map((item: ProjectCardProps) => {
        return (
          <ProjectCard
            tags={item.tags}
            projectSmallDescription={item.projectSmallDescription}
            projectProdLink={item.projectProdLink}
            projectRepoLink={item.projectRepoLink}
            title={item.title}
            description={item.description}
            slug={item.projectSlug}
          />
        );
      })}
    </ProjectsBox>
  );
}

export default ProjectsCarrosel;
