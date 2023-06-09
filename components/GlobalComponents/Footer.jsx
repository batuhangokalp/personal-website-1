import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { SlSocialBehance } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className={styles.allFooter}>
      <div className={styles.contactFooter}>
        <h5>Get In Touch With Me</h5>
        <div className={styles.dividerFooter} />
        <div className={styles.socialIconsFooter}>
          <Link href="#">
            <AiOutlineFacebook color="#9B9B9B" size={30} />
          </Link>
          <Link href="https://www.behance.net/olcaydilibal">
            <SlSocialBehance color="#9B9B9B" size={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/olcay-dilibal-283794194">
            <AiOutlineLinkedin color="#9B9B9B" size={30} />
          </Link>
          <Link href="https://www.instagram.com/olcayy.d">
            <AiOutlineInstagram color="#9B9B9B" size={30} />
          </Link>
        </div>
        <div className={styles.dividerFooter} />
        <div className={styles.personalContact}>
          <div className={styles.phone}>
            <BsTelephone color="#9B9B9B" size={22} />
            <span> (555) 897 00 78 </span>
          </div>
          <div className={styles.mail}>
            <TfiEmail color="#9B9B9B" size={30} />
            <span> olcay.dilibal@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
