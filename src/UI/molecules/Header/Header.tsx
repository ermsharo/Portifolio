import styled from "styled-components";
import { Colors } from "./../../../styles/defaultProps";
export interface HeaderProps {}

export const HeaderBox = styled.div`
  background-color: ${Colors.regularColor};
  text-transform: capitalize;
  font-size: 1.5rem;HOME
  font-weight: 400;
  display: flex;
  justify-content: end;
  gap: 2.5rem;
  padding: 1.5rem;
`;

const HeaderOptions = ["Home", "About", "Projects", "Contact"];

function Header({}: HeaderProps) {
  return (
    <HeaderBox>
      {HeaderOptions.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </HeaderBox>
  );
}

export default Header;
