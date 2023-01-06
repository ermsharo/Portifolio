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
    font-size: 32px;
    font-weight: bolder;
  }
  h2{
    color: darkgrey;
    padding: 0px;
    border: 0px;
    margin: 0px;
  }
  h1{
    padding-bottom: 10px;
    border: 0px;
    margin: 0px;
  }
`;

const AboutBoxText = styled.div`
 display: flex ;
 justify-content: center;
 flex-direction: column;
`;



const AboutBoxImage = styled.div`
  width: 50%;
  img {
    width: 100%;
  }
`;

function About() {
  const glitch = useGlitch();
  return (
    <AboutBox>
      <AboutBoxText>
        {" "}
        <h1>Hi, I'm Emilio Haro</h1>
        <h2>I'm a Full Stack Developer.</h2>
        <ul>
          <li>{"->"} Based in Brazil</li>
          <li>{"->"} Working 5 years as web developer</li>
          <li>{"->"} Powered by coffee</li>
          <li>{"->"} Sometimes game developer</li>
        </ul>
      </AboutBoxText>
      <AboutBoxImage>
        {" "}
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fklwebdesign.my%2Fimages%2F1_Dreamztech%2Fcareer%2Fprogrammers.png&f=1&nofb=1&ipt=2a5d7a52d91604f348851fb018a8bfb3cec4682a50095741ec567b8c7b4426a3&ipo=images" />
      </AboutBoxImage>
    </AboutBox>
  );
}

export default About;
