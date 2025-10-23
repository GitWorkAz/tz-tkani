import styles from "./Confirm.module.css";
import { Link } from "react-router-dom";

export const Confirm = () => {
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
        <h3>Подтвердите свой адрес электронной почты</h3>
        <p className={styles.form_description}>
          Если аккаунт существует с user@company.com, вы получите шестизначный
          код подтверждения. Пожалуйста, введите его ниже, чтобы сбросить
          пароль.
        </p>
        <div className={styles.form_general}>
          <p>Электронная почта</p>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Введите 6-значный код"
            required
            className={styles.form_input}
          />
        </div>

        <p>Не получили код? Отправить код снова.</p>
      </form>
    </div>
  );
};
