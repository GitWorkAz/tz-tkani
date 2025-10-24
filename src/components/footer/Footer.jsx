import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.top_section}>
        <h3 className={styles.top_section_title}>
          Широкий выбор высококачественных
          <br /> текстильных материалов со скидками до 50%
        </h3>
        <button className={styles.top_section_btn}>
          <Link className={styles.top_section_btn_link}>Перейти в каталог</Link>
        </button>
      </section>

      <section className={styles.bottom_section}>
        <ul className={styles.bottom_section_clothes}>
          <li>
            <h3 className={styles.title}>Для одежды</h3>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Шёлк
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Футер
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Трикотаж
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Вискоза
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Тенсель
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Муслин
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Тенсель
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Лён
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Купра
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Хлопок
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Штапель
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Джинса
            </Link>
          </li>
        </ul>

        <ul className={styles.bottom_section_home}>
          <li>
            <h3 className={styles.title}>Для дома</h3>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Сатин Турция
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Сатин Китай
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Тенсель 60s
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Поплин Турция
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Дак
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Вафельное полотно
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Махра
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Пике косичка
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Фланель
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Муслин
            </Link>
          </li>
        </ul>

        <ul className={styles.bottom_section_сompany}>
          <li>
            <h3 className={styles.title}>Компания</h3>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Личный кабинет
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              О нас
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Контакты
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Оплата и доставка
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Часто задаваемые вопросы
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Политика конфиденциальности
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Пользовательское соглашение
            </Link>
          </li>
        </ul>
      </section>
      <section className={styles.info_section}>
        <div className={styles.info_left}>
          <img src="/" alt="" />
          <p></p>
        </div>
        <div className={styles.info_right}></div>

      </section>
    </div>
  );
};
