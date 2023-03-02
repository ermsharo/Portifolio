import React from "react";
import styled from "styled-components";

export interface FooterProps {}

const FooterBox = styled.div`
  background-color: black;
  width: auto;
  padding: 1.5rem;
`;

function Footer({}: FooterProps) {
  return <FooterBox>Footer</FooterBox>;
}

export default Footer;
