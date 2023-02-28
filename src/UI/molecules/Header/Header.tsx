import styled from "styled-components";
import { Colors } from "./../../../styles/defaultProps";
export interface HeaderProps {}

export const HeaderBox = styled.div`
  background-color: ${Colors.secondBackround};
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 400;
  display: flex;
  justify-content: end;
  gap: 2.5rem;
  padding: 1.5rem;
  position:fixed; 
  width: calc(100% - 3rem); 
`;

const HeaderOptions = ["Home", "About", "Projects", "Contact"];

function Header({}: HeaderProps) {
  return (
    <HeaderBox>
      {HeaderOptions.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
      <button>Download CV</button>
    </HeaderBox>
  );
}

export default Header;
