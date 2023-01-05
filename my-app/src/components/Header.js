import styled from 'styled-components'

const HeaderBox = styled.div`




`

const OptionsDisplay = styled.ul`

display: flex ;
width: 80%;
justify-content: space-between;
margin:auto; 
padding: calc(10px + 2vmin);
list-style-type: none;

li{
  :hover{
    color:red;
  }
}
`



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
