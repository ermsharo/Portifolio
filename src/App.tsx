import GlobalStyle from "./styles/globalStyles";
import { Helmet } from "react-helmet";
function App() {
  return (
    <>
      <Helmet>
        <title>Emilio Haro</title>
          <link rel="icon" href="https://i.stack.imgur.com/bJ120.png" />
        {/* <link rel="icon" type="image/png" href="https://w7.pngwing.com/pngs/191/128/png-transparent-space-invaders-golden-age-of-arcade-video-games-jungle-hunt-pitfall-centipede-space-invaders-angle-white-text-thumbnail.png"/> */}
        <meta name="description" content="Emilio Haro portifolio" />
          <link rel="apple-touch-icon" href="https://i.stack.imgur.com/bJ120.png" />
      </Helmet>
      <GlobalStyle />
    </>
  );
}

export default App;
