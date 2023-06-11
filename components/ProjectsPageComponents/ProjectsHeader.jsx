import React from "react";
import styles from "../../styles/Projects.module.css";
import Image from "next/image";

const ProjectsHeader = () => {
  return (
    <div className={styles.projectsHeader}>
      <div className={styles.headerContent}>
        <h1>PROJECTS</h1>
        <Image
          src="/pictures/projectsHeader.png"
          alt=""
          width={158}
          height={115}
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default ProjectsHeader;
