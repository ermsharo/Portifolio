import { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const AboutBox = styled.div`
  font-family: "Roboto";
  display: flex;
  justify-content: space-between;
  color: white;
  font-style: normal;

  padding: 32px;
  margin: 32px auto;
  ul {
    font-family: "JetBrains Mono", monospace;
    padding: 0;
    list-style-type: none;
    font-weight: bolder;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: left;
    width: fit-content;
    column-gap: 32px;
  }
  h2 {
    color: darkgrey;
    padding: 0px;
    border: 0px;
    margin: 0px;
  }
  h1 {
    padding-bottom: 10px;
    border: 0px;
    margin: 0px;
  }
  h3 {
    font-size: 24px;
    font-family: "JetBrains Mono", monospace;
  }
`;

const NewCardBox = styled.div`
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
`;

function Contact() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    description: "",
    atack: "",
    defense: "",
    cardType: "",
    cardClass: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setFormInputs({
      ...formInputs,
      [evt.target.name]: value,
    });
  }

  return (
    <AboutBox>
  <NewCardBox>

<ThemeProvider theme={darkTheme}>
<h2>Contato</h2>
      <CssBaseline />
      <TextField
        fullWidth
        id="outlined-name"
        label="Nome"
        name="name"
        value={formInputs.name}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        id="outlined-name"
        label="Descrição"
        name="description"
        value={formInputs.description}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        id="outlined-name"
        label="Ataque"
        name="atack"
        type="number"
        value={formInputs.atack}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        id="outlined-name"
        label="Defesa"
        name="defense"
        type="number"
        value={formInputs.defense}
        onChange={handleChange}
      />

      <Button onClick={() => {}} fullWidth variant="contained">
        Salvar alterações
      </Button>
    </ThemeProvider>
      
    </NewCardBox>

    </AboutBox>
  
  );
}

export default Contact;
