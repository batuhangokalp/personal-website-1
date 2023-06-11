import Meta from "@/components/GlobalComponents/Meta";
import React from "react";
import styles from "../styles/Projects.module.css";
import ProjectsHeader from "@/components/ProjectsPageComponents/ProjectsHeader";
import AllProjects from "@/components/ProjectsPageComponents/AllProjects";

const projects = () => {
  return (
    <>
      <Meta
        title={"Projects"}
        keywords={"graphic desing, graphic, design, ui, ux, seo"}
      />
      <div className={styles.container}>
        <ProjectsHeader/>
        <AllProjects/>
      </div>
    </>
  );
};

export default projects;
