import GlobalStyle from "./styles/globalStyles";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Header from "./UI/molecules/Header";
import Footer from "./UI/molecules/Footer";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    // {
    //   path: "contacts/:contactId",
    //   element: <Contact />,
    // },
  ]);


  return (
    <>
      <Helmet>
        <title>Emilio Haro</title>
        <link rel="icon" href="https://i.stack.imgur.com/bJ120.png" />
        <meta name="description" content="Emilio Haro portifolio" />
        <link
          rel="apple-touch-icon"
          href="https://i.stack.imgur.com/bJ120.png"
        />
      </Helmet>
      <Header/>
      <RouterProvider router={router} />
      <Footer/>
      <GlobalStyle />
    </>
  );
}

export default App;
