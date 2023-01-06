import styled from "styled-components";
import { useGlitch } from "react-powerglitch";

const AboutBox = styled.div`
  font-family: "Roboto";
  display: flex;
  justify-content: space-between;
  color: white;
  font-style: normal;

  padding: 32px;
  margin: 32px auto;
  ul {
    font-family: "JetBrains Mono", monospace;
    padding: 0;
    list-style-type: none;
    font-weight: bolder;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: left;
    width: fit-content;
    column-gap: 32px;
  }
  h2 {
    color: darkgrey;
    padding: 0px;
    border: 0px;
    margin: 0px;
  }
  h1 {
    padding-bottom: 10px;
    border: 0px;
    margin: 0px;
  }
  h3 {
    font-size: 24px;
    font-family: "JetBrains Mono", monospace;
  }
`;

const AboutBoxText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const AboutBoxImage = styled.div`
  width: 50%;
  img {
    width: 100%;
  }
`;

function AboutInfo() {
  const glitch = useGlitch();
  return (
    <AboutBox>
      <AboutBoxText>
        <h2>About me</h2>
        <h3>
          <p>
            Web developer, with experience in developing messaging program,
            logistics products, internet of things and technological solutions
            for the journalism sector.
          </p>
          <p>
            My main skills are related to creating elegant and well-structured
            solutions, always prioritizing accessibility, security, and
            performance.
          </p>

          <p>
            Working recently thecnologies:
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Next.js</li>
              <li>PHP</li>
              <li>WordPress</li>
              <li>Python</li>
              <li>Flask</li>
            </ul>
          </p>
        </h3>
      </AboutBoxText>
    </AboutBox>
  );
}

export default AboutInfo;
