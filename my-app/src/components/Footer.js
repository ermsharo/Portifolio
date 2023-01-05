import styled from "styled-components";

const FooterBox = styled.div`
  font-size: calc(2px + 2vmin);
  text-align: center;
  padding: 32px;
  margin: 32px auto;
`;

function Footer() {
  return <FooterBox>template created with ♥ by myself</FooterBox>;
}

export default Footer;
