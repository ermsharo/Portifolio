import React, { useState } from "react";
import { send } from "emailjs-com";
import { MAIL_TEAMPLATE_ID, MAIL_SERVICE_ID ,USER_ID} from "./../../../env";

export interface ContactFormProps {}

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
        <input
          type="text"
          name="from_name"
          placeholder="from name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />
        <input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {sendError && <> Erro ao enviar</>}
    </div>
  );
}

export default ContactForm;
