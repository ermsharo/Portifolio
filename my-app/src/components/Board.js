import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import Skills from "./Skills";
import Projects from "./Projects";
import AboutInfo from "./AboutInfo";

import styled from "styled-components";

const BoardBox = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100&family=Roboto:ital,wght@1,300&display=swap");

  min-height: 100vh;
  width: 65%;
  margin: auto;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: "JetBrains Mono", monospace;
`;

function Board() {
  return (
    <BoardBox>
      <Header />
      <About />
      <AboutInfo/>
      <Skills />
      <Projects />
      <Footer />
    </BoardBox>
  );
}

export default Board;
