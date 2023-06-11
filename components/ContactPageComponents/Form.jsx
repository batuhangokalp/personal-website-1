import React from "react";
import styles from "../../styles/Contact.module.css";
import { Button, TextField } from "@mui/material";

const Form = () => {
  return (
    <div className={styles.allContactForm}>
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

          />
        </div>
      </div>
      <div className={styles.button}>
      <Button className={styles.sendMessage}><span>Send Message</span></Button>
      </div>
    </div>
  );
};

export default Form;
