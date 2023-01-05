import Header from "./Header";
import About from "./About";
import Footer from "./Footer";

import styled from 'styled-components'

const BoardBox = styled.div`
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100&display=swap');
background-color: #1f1f1f;
  min-height: 100vh;
  width: 100%;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: 'JetBrains Mono', monospace;
`

function Board() {
  return (
    <BoardBox>
      <Header/>
      <About/>
      <Footer/>
    </BoardBox>
  );
}

export default Board;
