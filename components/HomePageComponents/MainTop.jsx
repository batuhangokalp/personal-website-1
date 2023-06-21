import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const MainTop = () => {
  return (
    <div className={styles.mainTopContainer}>
      <div className={styles.mainTop}>
        <div className={styles.mainTopLeft}>
          <div className={styles.mainTopLeftText}>
            <div className={styles.text}>
              <h5>HI.</h5>
              <h5
                style={{
                  color: "#55A7D9",
                }}
              >
                WELCOME
              </h5>
            </div>
            <div className={styles.text}>
              <h3 style={{ marginLeft: "1rem" }}>I AM</h3>{" "}
              <h3 style={{ marginLeft: "1rem" }}>OLCAY</h3>
            </div>
            <div className={styles.text}>
              <h4
                style={{
                  color: "#D95555",
                }}
              >
                UI
              </h4>
              <h4>-</h4>
              <h4
                style={{
                  color: "#B755D9",
                }}
              >
                UX
              </h4>
              <h4 style={{ marginLeft: "1rem" }}> DESIGNER</h4>
            </div>
          </div>
          <Image
            src="/pictures/uix.png"
            alt=""
            width={344}
            height={254}
            style={{ marginTop: "2rem" }}
          />
        </div>
        <div className={styles.mainTopRight}>
          <Image src="/pictures/olcay.png" alt="" width={484} height={484} />
        </div>
      </div>
    </div>
  );
};

export default MainTop;
