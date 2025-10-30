import { Link } from "react-router-dom";
import styles from "./PersonalAccount.module.css";

export const PersonalAccount = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.account_navigation}>
        <Link className={styles.link}>Аккаунт</Link>
        <Link className={styles.link}>Мои заказы</Link>
        <Link className={styles.link}>История заказов</Link>
        <Link className={styles.link}>Уведомления</Link>
      </nav>

      <form className={styles.account_container}>
        <h3>Личный кабинет</h3>
        <div className={styles.content}>
          <div className={styles.section}>
            <div className={styles.header}>
              <h5>Личные данные</h5>
              <button>Сохранить</button>
            </div>
            <div className={styles.photo_section}>
              <img src="" alt="Фото пользователя" />
              <div className={styles.photo_actions}>
                <button>Загрузить фотографию</button>
                <p>Рекоммендованный размер 160х160px in PNG or JPG format</p>
              </div>
            </div>
            <div className={styles.name_fields}>
              <div className={styles.fields}>
                <label htmlFor="firstname">Имя</label>
                <input type="text" name="firstname" id="firstname" />
              </div>
              <div className={styles.fields}>
                <label htmlFor="lastname">Фамилия</label>
                <input type="text" name="lastname" id="lastname" />
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.header}>
              <h5>Почта</h5>
              <button>Сохранить</button>
            </div>
            <div className={styles.fields}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.header}>
              <h5>Смена пароля</h5>
              <button>Обновить пароль</button>
            </div>
            <div className={styles.password_fields}>
              <div className={styles.fields}>
                <label htmlFor="email">Старый пароль</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className={styles.fields}>
                <label htmlFor="email">Новый пароль</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className={styles.fields}>
                <label htmlFor="email">Подтвердите новый пароль</label>
                <input type="email" name="email" id="email" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};



