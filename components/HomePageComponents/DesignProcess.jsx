import Image from "next/image";
import React from "react";
import styles from '../../styles/Home.module.css'

const DesignProcess = () => {
  return (
    <div className={styles.allDesignProcessContainer}>
      <div className={styles.designProcessContainer}>
        <h2>Design Process</h2>
        <div className={styles.allProcesses}>
          <div className={styles.eachProcess}>
            <span>Idea</span>
            <Image
              src={"/pictures/idea.png"}
              alt="idea,graphic,design,tasarim,grafik,ui,ux,fikir,görsel,arastirma,tasarlama,wireframe"
              width={"96"}
              height={"144"}
            />
          </div>
          <div className={styles.eachProcess}>
            <span>User Research</span>
            <Image
              src={"/pictures/research.png"}
              alt="idea,graphic,design,tasarim,grafik,ui,ux,fikir,görsel,arastirma,tasarlama,wireframe"
              width={"155"}
              height={"134"}
            />
          </div>
          <div className={styles.eachProcess}>
            <span>User Flow/ Journey</span>
            <Image
              src={"/pictures/journey.png"}
              alt="idea,graphic,design,tasarim,grafik,ui,ux,fikir,görsel,arastirma,tasarlama,wireframe"
              width={"196"}
              height={"139"}
            />
          </div>
          <div className={styles.eachProcess}>
            <span>WireFrames</span>
            <Image
              src={"/pictures/wireframe.png"}
              alt="idea,graphic,design,tasarim,grafik,ui,ux,fikir,görsel,arastirma,tasarlama,wireframe"
              width={"168"}
              height={"119"}
            />
          </div>
          <div className={styles.eachProcess}>
            <span>Design</span>
            <Image
              src={"/pictures/design.png"}
              alt="idea,graphic,design,tasarim,grafik,ui,ux,fikir,görsel,arastirma,tasarlama,wireframe"
              width={"144"}
              height={"129"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignProcess;
