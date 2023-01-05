import styled from "styled-components";

const HeaderBox = styled.div``;

const OptionsDisplay = styled.ul`
  display: flex;

  justify-content: space-between;

  padding: calc(10px + 2vmin);
  list-style-type: none;
  font-weight: bold;

  li {
    :hover {
      color: red;
    }
  }
`;

function Header() {
  return (
    <HeaderBox>
      <OptionsDisplay>
        <li>Home</li>
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Curriculo</li>
      </OptionsDisplay>
    </HeaderBox>
  );
}

export default Header;
