import styled from "styled-components";

const HeaderBox = styled.div``;

const OptionsDisplay = styled.ul`
  display: flex;

  justify-content: space-between;
  justify-content: flex-end;
  gap: 32px;

  padding: calc(8px + 2vmin);
  list-style-type: none;
  font-weight: bold;

  li {
    :hover {
      opacity: 0.9;
      cursor: pointer;
    }
  }
`;

function Header() {
  return (
    <HeaderBox>
      <OptionsDisplay>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Resume</li>
      </OptionsDisplay>
    </HeaderBox>
  );
}

export default Header;
