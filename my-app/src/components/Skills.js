import styled from "styled-components";

const SkillsBox = styled.div`
  text-align: center;
  padding: 32px;
  margin: 32px auto;
      font-family: "Roboto";
      h2{
        color: darkgrey;
    padding: 0px;
    border: 0px;
    margin: 0px;
    text-transform: capitalize;
    text-align: left;

      }
`;

function Skills() {
  return (
    <SkillsBox>
      <h2>skills here</h2>
    </SkillsBox>
  );
}

export default Skills;
