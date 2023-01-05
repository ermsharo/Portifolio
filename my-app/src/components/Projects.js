import styled from "styled-components";

const ProjectsBox = styled.div`
  text-align: center;
`;

const ProjectCard = styled.div`
  text-align: center;
`;

const fillProject = () => {
  return {
    name: "generic",
    stacks: "stack a, stack b, stack c",
  };
};

//Isso sera consumido via api posteriormente
let projetos = [];
for (let i = 0; i < 5; i++) projetos.push(fillProject());

function Projects() {
  return <ProjectsBox>projects here</ProjectsBox>;
}

export default Projects;
