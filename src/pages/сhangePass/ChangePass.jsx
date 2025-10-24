import styles from "./ChangePass.module.css";
import { Link } from "react-router-dom";

export const ChangePass = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.logo}>
        <img
          src="/Another Logo Icon.svg"
          alt="Логотип"
          className={styles.logo_img}
        />
        <img
          src="/CENTER TKANI.svg"
          alt="Название"
          className={styles.logo_text}
        />
      </Link>

      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>Измените свой пароль</h3>
        <p className={styles.form_description}>
          Выберите новый пароль для своей учётной записи.
        </p>
        <div className={styles.form_general}>
          <p>Пароль</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Новый пароль"
            required
            className={styles.form_input}
          />
        </div>
        <div className={styles.form_general}>
          <p>Подтвердите пароль</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Подтвердите новый пароль"
            required
            className={styles.form_input}
          />
        </div>

        <button type="submit" className={styles.form_btn}>
          Сменить пароль
        </button>
      </form>
    </div>
  );
};
