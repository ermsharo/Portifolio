import { Link, useParams } from "react-router-dom";
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



function Project() {
  let { slug } = useParams();

  const [data, error, loading] = ProjectRequests();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div></div>;
  }






  //Project 

  const project = data.filter((data: { slug: string; }) => {
    return data.slug = "aaa";
  });

console.log("Filter char",project )
console.log("Project", Project)
console.log("Data", data)
  return (
    <>
      <Header />
      <PageTitleInfo>
        <h1>Project</h1>
      </PageTitleInfo>
      <SessionBox>{slug}</SessionBox>
    </>
  );
}

export default Project;
