import styled from "styled-components";

const ProjectsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  grid-gap: 32px;
`;

const ProjectCard = styled.div`
  text-align: center;
  background-color: #242435;
  border-radius: 16px;
  padding: 32px;
`;

const ProjectDescription = styled.div`
  text-align: left;
  text-transform: capitalize;
`;

const ProjectImage = styled.div`
  margin: auto;

  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }
`;

const fillProject = () => {
  return {
    name: "generic",
    stacks: "stack a, stack b, stack c",
    image:
      "https://img.freepik.com/fotos-premium/cachorrinho-fofo-de-spitz-pomeranian-deitado-no-fundo-amarelo-brilhante_253512-22.jpg?w=2000",
  };
};

//Isso sera consumido via api posteriormente
let projetos = [];
for (let i = 0; i < 5; i++) projetos.push(fillProject());

function Projects() {
  return (
    <ProjectsBox>
      {projetos.map((project) => {
        return (
          <ProjectCard>
            <ProjectImage>
              <img src={project.image} />
            </ProjectImage>
            <ProjectDescription>{project.name}</ProjectDescription>
          </ProjectCard>
        );
      })}
    </ProjectsBox>
  );
}

export default Projects;
