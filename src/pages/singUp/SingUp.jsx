import styles from "./SingUp.module.css";

export const SingUp = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src="/Logo Icon.svg" alt="Логотип" className={styles.logo_img} />
        <img
          src="/CENTER TKANI.svg"
          alt="Название"
          className={styles.logo_text}
        />
      </div>

      <div className={styles.form}>
        <h3>Войти</h3>
        <div className={styles.form_email}>
          <p>Электронная почта</p>
          <input type="email" name="email" id="email" placeholder="user@company.com" required/>
        </div>
        <div className={styles.form_password}>
            <div className={styles.form_password_link}>
                <p>Пароль</p>
                <p>Забыли пароль?</p>
            </div>
            <input type="password" name="password" id="password" placeholder="Пароль" required/>
        </div>
        <button type="submit"></button>
        <div className={styles.form_link}>
            <p>Нет аккаунта?</p>
            <p>Зарегистрируйтесь</p>
        </div>
      </div>
    </div>
  );
};
