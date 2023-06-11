import React from "react";
import styles from "../../styles/Projects.module.css";
import Image from "next/image";
import Link from "next/link";
import ImaginaryProjects from "./ImaginaryProjects";
import RealProjects from "./RealProjects";


const AllProjects = () => {
  return (
    <div className={styles.allProjectsContainer}>
      <div className={styles.allProjects}>
        <h1>Real Projects</h1>
        <div className={styles.seperator}></div>
        <div className={styles.projects}>
          {RealProjects.map((realproject) => {
            return (
              <>
              <div className={styles.eachProject} key={realproject.id}>
                <Image
                  src={realproject.imgSrc}
                  alt=""
                  width={realproject.imgWidth}
                  height={realproject.imgHeight}
                  className={styles.imgProjects}
                />
                <div className={styles.projectsContent}>
                  <h3>{realproject.h3Header}</h3>
                  <h4>
                    {realproject.h4Content}
                  </h4>
                  <span>{realproject.span}</span>
                  <div className={styles.linkDiv}>
                    <div className={styles.behanceLink}>
                      <Link href="https://www.behance.net/olcaydilibal">
                        <span>See more details on Behance!</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              </>
            );
          })}
        </div>
      </div>
      <div className={styles.allProjects}>
        <h1>Imaginary Projects</h1>
        <div className={styles.seperator}></div>
        <div className={styles.projects}>
          {ImaginaryProjects.map((imaginaryProject) => {
            return (
              <>
              <div className={styles.eachProject} key={imaginaryProject.id}>
                <Image
                  src={imaginaryProject.imgSrc}
                  alt=""
                  width={imaginaryProject.imgWidth}
                  height={imaginaryProject.imgHeight}
                  className={styles.imgProjects}
                />
                <div className={styles.projectsContent}>
                  <h3>{imaginaryProject.h3Header}</h3>
                  <h4>
                    {imaginaryProject.h4Content}
                  </h4>
                  <span>{imaginaryProject.span}</span>
                  <div className={styles.linkDiv}>
                    <div className={styles.behanceLink}>
                      <Link href="https://www.behance.net/olcaydilibal">
                        <span>See more details on Behance!</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
