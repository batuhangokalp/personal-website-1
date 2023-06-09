import React from "react";
import styles from "../../styles/About.module.css";
import { FcNext } from "react-icons/fc";
import { AiOutlineDown } from "react-icons/ai";

const ExperienceAndSkills = () => {
  return (
    <div className={styles.allExperienceAndSkillsContainer}>
      <h3>Experience & Skills</h3>
      <div className={styles.experiences}>
        <div className={styles.experiencesCard}>
          <h4>Freelance Graphic Designer</h4>
          <div className={styles.divider}></div>
          <span>
            I worked as a freelance graphic designer. I created many visual
            content like social media posts & stories, web ad.metarials and
            brand idendity contents.
          </span>
          <div className={styles.date}>
            <span>2019-2020</span>
          </div>
        </div>
        <FcNext className={styles.iconRight} color="#55a7d9" size={30} />
        <AiOutlineDown className={styles.iconDown} color="#55a7d9" size={30} />
        <div className={styles.experiencesCard}>
          <h4>Graphic Designer (Musicalists)</h4>
          <div className={styles.divider}></div>
          <span>
            Musicalists was a company that promotion and distribution music for
            music creators on digital platforms. I was working for daily social
            media contents. I always followed music news and share every day. I
            managed musicalist instagram account.
          </span>
          <div className={styles.date}>
            <span>2019-2020</span>
          </div>
        </div>
        <FcNext className={styles.iconRight} color="#55a7d9" size={30} />
        <AiOutlineDown className={styles.iconDown} color="#55a7d9" size={30} />        <div className={styles.experiencesCard}>
          <h4>Graphic Designer (Edirne Printing House)</h4>
          <div className={styles.divider}></div>
          <span>
            I just wondered about printing techniques. As a graphic designer, I
            thought it was necessary to learn printing techniques.
          </span>
          <div className={styles.date}>
            <span>2019-2020</span>
          </div>
        </div>
        <FcNext className={styles.iconRight} color="#55a7d9" size={30} />
        <AiOutlineDown className={styles.iconDown} color="#55a7d9" size={30} />        <div className={styles.experiencesCard}>
          <h4>UI/UX Designer (Orca Business Solutions)</h4>
          <div className={styles.divider}></div>
          <span>
            I am a part of Orca Business Sol. as a UI/UX designer. I am working
            company’s own web and mobile applications for better user experince.
            I’ve designing e-commerce websites and mobile apps. Moreover, I’ve
            creating other visual contents.
          </span>
          <div className={styles.date}>
            <span>2022-2023</span>
          </div>
        </div>
      </div>
      <div className={styles.skills}></div>
    </div>
  );
};

export default ExperienceAndSkills;
