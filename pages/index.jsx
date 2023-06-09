import styles from "../styles/Home.module.css";
import DesignProcess from "@/components/HomePageComponents/DesignProcess";
import MainTop from "@/components/HomePageComponents/MainTop";
import Meta from "@/components/GlobalComponents/Meta";

export default function Home() {
  return (
    <>
      <Meta
        title={"Olcay Dilibal"}
        keywords={"graphic desing, graphic, design, ui, ux, seo"}
      />
      <div className={styles.container}>
        <MainTop />
        <DesignProcess />
      </div>
    </>
  );
}
