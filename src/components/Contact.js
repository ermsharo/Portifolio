import { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
    <NewCardBox>
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
    </NewCardBox>
  );
}

export default Contact;
