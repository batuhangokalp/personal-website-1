import React from "react";
import styles from "../../styles/Contact.module.css";

const ContactHeader = () => {
  return (
    <div className={styles.contactHeader}>
      <div className={styles.headerContent}>
        <h1 className={styles.firstHeader}>
          CONTACT
          <br />
          <span>ME</span>
        </h1>
      </div>
    </div>
  );
};

export default ContactHeader;
