import Certificates from "@/components/AboutPageComponents/Certificates";
import Meta from "@/components/GlobalComponents/Meta";
import React from "react";
import styles from "../styles/About.module.css";
import ExperienceAndSkills from "@/components/AboutPageComponents/ExperienceAndSkills";

const about = () => {
  return (
    <>
      <Meta
        title={"About"}
        keywords={"graphic desing, graphic, design, ui, ux, seo"}
      />
      <div className={styles.container}>
        <ExperienceAndSkills/>
        <Certificates />
      </div>
    </>
  );
};

export default about;
