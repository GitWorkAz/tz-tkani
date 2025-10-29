import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img404} src="/404.png" alt="404" />
      <h3 className={styles.title404}>Страница не найдена</h3>
      <Link to="/" className={styles.link404}>
        Вернуться на главную
      </Link>
    </div>
  );
};
