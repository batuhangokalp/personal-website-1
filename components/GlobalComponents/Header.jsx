import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";
import AccordionData from "./AccordionData";

const Header = () => {
  return (
    <nav className={styles.allHeader}>
      <ul className={styles.navigationLinks}>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/projects">
          <li>Projects</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <AccordionData />
    </nav>
  );
};

export default Header;
