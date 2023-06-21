import React from "react";
import styles from "../../styles/About.module.css";
import Image from "next/image";
const AboutMe = () => {
  return (
    <div className={styles.aboutMeAllContainer}>
      <div className={styles.aboutMe}>
        <div className={styles.imgAndHeader}>
          <h1 className={styles.header}>ABOUT</h1>
          <h1 className={styles.header2}>ME</h1>
          <Image
            src="/pictures/olcay2.png"
            alt=""
            width={407}
            height={486}
            className={styles.img}
          />
        </div>

        <div className={styles.allInfo}>
          <div className={styles.eachInfo}>
            <span className={styles.title}>Name:</span>
            <span className={styles.content}>Olcay Dilibal</span>
          </div>
          <div className={styles.eachInfo}>
            <span className={styles.title}>Age:</span>
            <span className={styles.content}>25 (03/09/1997)</span>
          </div>
          <div className={styles.eachInfo}>
            <span className={styles.title}>Education:</span>
            <span className={styles.content}>
              Eskişehir Anadolu University (Public Relations & Advertising)
            </span>
          </div>
          <div className={styles.eachInfo}>
            <span className={styles.title}>Language:</span>
            <span className={styles.content}>English (Conversational)</span>
          </div>
          <div className={styles.eachInfo}>
            <span className={styles.content}>
              Hi, I’m Olcay Dilibal,
              <br />
              <br /> I am 25 years old and I gratuated at Anadolu University
              department of Public Relations & Adv. I always interested visual
              communication and adv so I improve myselft about art and design. I
              started with adobe programs like Photoshop, Illustration,
              Indesign, and motion programs. After I met with Figma, I took many
              courses about UI/UX design ın Udemy and Uxcell. I love being a
              part of project and contribute it.
              <br />
              <br /> I have knowledge about design princibles, like typography,
              color psychology theories, layout, and design system in Figma. I
              take care more orjinality for brands and customers.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
