import React, { useState } from "react";
import { send } from "emailjs-com";
import { MAIL_TEAMPLATE_ID, MAIL_SERVICE_ID ,USER_ID} from "./../../../env";
import styled from "styled-components";

export interface ContactFormProps {}

export const ButtonBox = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: darkblue;
  color: white;
  width: calc(100%);
  height: 3rem;
  margin: auto;

  margin-bottom: 2rem;
  &:hover {

  }
`;


export const Input = styled.input`

  font-size: 1.2rem;
  border-radius: 0.2rem;
  border: 0;
  box-sizing: border-box;
  width: calc(100%);
  margin-top: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;

  &::placeholder {

  }
  &:focus{

    outline-style: dashed;
  }
`;


function ContactForm({}: ContactFormProps) {
  const [sendError, setSendError] = useState<boolean>(false);

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: 'Emilio',
    message: "",
    reply_to: "",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    send(MAIL_SERVICE_ID, MAIL_TEAMPLATE_ID, toSend, USER_ID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSendError(false);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setSendError(true);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    console.log(toSend);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          name="from_name"
          placeholder="from name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <ButtonBox type="submit">Submit</ButtonBox>
      </form>
      {sendError && <> Erro ao enviar</>}
    </div>
  );
}

export default ContactForm;
