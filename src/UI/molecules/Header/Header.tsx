import styled from "styled-components";
import { Button } from "../../../styles/generalStyles";
import { Colors } from "./../../../styles/defaultProps";
import { Link } from "react-router-dom";
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
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 2.5rem;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

const HeaderOptionObj = (name: string, hash: string) => {
  return { name: name, to: `#${hash}` };
};

// const [homeSections, setHomeSections] = useState([

//   'banner_home',
//   'about_me_home',
//   'projects_home',
//   'contact_home'
// ]);

const HeaderOptions = [
  HeaderOptionObj("Home", "banner_home"),
  HeaderOptionObj("About", "about_me_home"),
  HeaderOptionObj("Projects", "projects_home"),
  HeaderOptionObj("Contact", "contact_home"),
];

function Header({}: HeaderProps) {
  return (
    <HeaderBox>
      <OptionsBox>
        {HeaderOptions.map((item, index) => {
          return (
            <Option key={index}>
              <Link to={{ pathname: "/", hash: `${item.to}` }}>
                {item.name}
              </Link>
            </Option>
          );
        })}
      </OptionsBox>

      <ButtonBox>
        <Button>Download CV</Button>
      </ButtonBox>
    </HeaderBox>
  );
}

export default Header;
