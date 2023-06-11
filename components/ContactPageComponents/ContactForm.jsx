import React from "react";
import styles from "../../styles/Contact.module.css";
import Image from "next/image";
import Form from "./Form";

const ContactForm = () => {
  return (
    <div className={styles.allContactContainer}>
      <div className={styles.contactContainer}>
        <Image
          src="/pictures/ContactImage.png"
          alt=""
          width={524}
          height={381}
          className={styles.img}
        />
        <Form />
      </div>
    </div>
  );
};

export default ContactForm;
