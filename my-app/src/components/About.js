import styled from "styled-components";
import { useGlitch } from "react-powerglitch";

const AboutBox = styled.div`
  font-family: "Roboto";

  color: white;
  font-style: normal;
  ul {
    font-family: "JetBrains Mono", monospace;
  }
`;

function About() {
  const glitch = useGlitch();
  return (
    <AboutBox>
      <h1>Hi, I'm Emilio</h1>
      <h2>I'm a Full Stack Developer.</h2>
      <ul>
        <li>{"->"} Desenvolvedor web</li>
        <li>{"->"} Desenvolvedor web</li>
        <li>{"->"} Desenvolvedor web</li>
        <li>{"->"} Desenvolvedor web</li>
      </ul>
    </AboutBox>
  );
}

export default About;
