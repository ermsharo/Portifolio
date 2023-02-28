import styled from "styled-components";
import { Button } from "../../../styles/generalStyles";
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

  position: fixed;
  width: calc(100% - 2rem);
  padding: 1rem;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;


`;
const OptionsBox = styled.div`
width:100%;
display: flex;
  justify-content: end;
  gap: 2.5rem;
`;


const Option = styled.div`
display: flex;
flex-direction: column;

justify-content: center;

`;
const HeaderOptions = ["Home", "About", "Projects", "Contact"];

function Header({}: HeaderProps) {
  return (
    <HeaderBox>
      <OptionsBox>
        {" "}
        {HeaderOptions.map((item, index) => {
          return <Option key={index}><a href = "#">{item}</a></Option>;
        })}
      </OptionsBox>

      <ButtonBox>

        <Button>Download CV</Button>
      </ButtonBox>
    </HeaderBox>
  );
}

export default Header;
