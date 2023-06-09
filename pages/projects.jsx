import Meta from "@/components/GlobalComponents/Meta";
import React from "react";
import styles from "../styles/Projects.module.css";

const projects = () => {
  return (
    <>
      <Meta
        title={"Projects"}
        keywords={"graphic desing, graphic, design, ui, ux, seo"}
      />
      <div className={styles.container}></div>
    </>
  );
};

export default projects;
