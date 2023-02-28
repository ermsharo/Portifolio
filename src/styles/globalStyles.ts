import { createGlobalStyle } from "styled-components";
import { BreakPoints, Colors } from "./defaultProps";
import { Fonts } from "./defaultProps";

const GlobalStyle = createGlobalStyle`
   

   body{
      background-color: ${Colors.firstBackground};
      color:${Colors.primaryfontColor};  
      font-family: ${Fonts.secondaryFont};
      border:0;
      margin:0;
      background: rgb(2,0,36);
background: linear-gradient(328deg, rgba(2,0,36,1) 0%, rgba(32,32,103,1) 29%, rgba(0,212,255,1) 100%);
   }
   h1 {
    font-family: ${Fonts.primaryFont}   

    font-size:2.5rem;
    padding:1.5rem;
  }
  h2 {
    font-size:2.2rem;
    letter-spacing: 0.15rem;
    font-family: ${Fonts.primaryFont};
    text-transform: capitalize;
    padding:1rem;

    @media (max-width: ${BreakPoints.bgMediumDevices}) {
      font-size:1.5rem;

    padding:1rem;
  }

  a {
    border-bottom: 0.05em solid #b4e7f8;
    box-shadow: inset 0 -0.05em 0 #b4e7f8;
    color: inherit;
    transition: background-color 0.25s cubic-bezier(0.33, 0.66, 0.66, 1);
    text-decoration: none;

    :hover {
      background-color: #b4e7f8;
    }
    :focus {
      background-color: #b4e7f8;
    }
    :active {
      background-color: #b4e7f8;
    }
  }

  }

`;
export default GlobalStyle;
