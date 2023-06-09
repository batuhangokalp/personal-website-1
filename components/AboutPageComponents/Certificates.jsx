import React from "react";
import styles from "../../styles/About.module.css";
const Certificates = () => {
  return (
    <div className={styles.certificatesContainer}>
      <div className={styles.certificates}>
        <h2>Certificates</h2>
        <div className={styles.allCertificates}>
          <div className={styles.leftSideCertificates}>
            <h3>Uxcell</h3>
            <ul className={styles.uxcell}>
              <li>Color Psychology</li>
              <li>Common Design Patterns</li>
              <li>Design Accessibility</li>
              <li>Design Composition</li>
              <li>Mobile Design</li>
              <li>Typography</li>
              <li>UI Components</li>
              <li>UX Design Foundations</li>
              <li>UX Writing</li>
              <li>Wireframing</li>
            </ul>
          </div>
          <div className={styles.rightSideCertificates}>
            <h3>Udemy</h3>
            <ul className={styles.uxcell}>
              <li>
                Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more
              </li>
            </ul>
            <h3>Anadolu University</h3>
            <ul className={styles.uxcell}>
              <li>Veriye Dayalı Reklamcılık </li>
            </ul>
            <h3>Bilgeİş</h3>
            <ul className={styles.uxcell}>
              <li>Görsel Tasarım İlkeleri</li>
            </ul>
            <h3>Linked in-Learning</h3>
            <ul className={styles.uxcell}>
              <li>UX Foundations : Prototyping </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
