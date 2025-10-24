import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.top_section}>
        <h3 className={styles.top_section_title}>
          Широкий выбор высококачественных текстильных материалов со скидками до
          50%
        </h3>
        <button className={styles.top_section_btn}>
          <Link className={styles.top_section_btn_link}>Перейти в каталог</Link>
        </button>
      </section>

      <section className={styles.bottom_section}>
        <ul className={styles.bottom_section}></ul>
      </section>
    </div>
  );
};
