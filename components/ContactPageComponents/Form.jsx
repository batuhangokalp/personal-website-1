import React, { useRef, useState } from "react";
import styles from "../../styles/Contact.module.css";
import { Button, TextField } from "@mui/material";

const Form = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlename = (event) => {
    setName(event.target.value);
  };
  const handleSurname = (event) => {
    setSurname(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const sendEmail = () => {
    alert(
      `Name: ${name} \nSurname: ${surname} \nEmail: ${email} \nMessage: ${message}`
    );
  };
  return (
    <form className={styles.allContactForm} ref={form} onSubmit={sendEmail}>
        <div className={styles.contactForm}>
          <div className={styles.input}>
            <label className={styles.label}>Name</label>
            <TextField
              required
              id="name"
              label="Name"
              size="small"
              type="text"
              className={styles.inputs}
              value={name}
              onChange={handlename}
            />
          </div>
          <div className={styles.input}>
            <label className={styles.label}>Surname</label>
            <TextField
              required
              id="surname"
              label="Surname"
              size="small"
              type="text"
              className={styles.inputs}
              value={surname}
              onChange={handleSurname}
            />
          </div>
        </div>
        <div className={styles.contactForm}>
          <div className={styles.input}>
            <label className={styles.label}>E-Mail</label>
            <TextField
              required
              id="email"
              label="E-Mail"
              size="small"
              type="email"
              fullWidth
              className={styles.inputs}
              value={email}
              onChange={handleEmail}
            />
          </div>
        </div>
        <div className={styles.contactForm}>
          <div className={styles.input}>
            <label className={styles.label}>Message</label>
            <TextField
              required
              id="message"
              label="Message"
              type="text"
              multiline
              rows={5}
              className={styles.inputs}
              value={message}
              onChange={handleMessage}
            />
          </div>
        </div>
        <div className={styles.button}>
          <Button type="submit" className={styles.sendMessage}>
            <span>Send Message</span>
          </Button>
        </div>
    </form>
  );
};

export default Form;
