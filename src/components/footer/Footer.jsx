import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.top_section}>
        <h3 className={styles.top_section_title}>
          Широкий выбор высококачественных<br /> текстильных материалов со скидками до
          50%
        </h3>
        <button className={styles.top_section_btn}>
          <Link className={styles.top_section_btn_link}>Перейти в каталог</Link>
        </button>
      </section>

      <section className={styles.bottom_section}>
        <ul className={styles.bottom_section_clothes}>
          <li><h3>Для одежды</h3></li>
          <li>
            <Link>Шёлк</Link>
          </li>
          <li>
            <Link>Футер</Link>
          </li>
          <li>
            <Link>Трикотаж</Link>
          </li>
          <li>
            <Link>Вискоза</Link>
          </li>
          <li>
            <Link>Тенсель</Link>
          </li>
          <li>
            <Link>Муслин</Link>
          </li>
          <li>
            <Link>Тенсель</Link>
          </li>
          <li>
            <Link>Лён</Link>
          </li>
          <li>
            <Link>Купра</Link>
          </li>
          <li>
            <Link>Хлопок</Link>
          </li>
          <li>
            <Link>Штапель</Link>
          </li>
          <li>
            <Link>Джинса</Link>
          </li>
        </ul>
        <ul className={styles.bottom_section_home}>
          <li><h3>Для дома</h3></li>
          <li>
            <Link>Сатин Турция</Link>
          </li>
          <li>
            <Link>Сатин Китай</Link>
          </li>
          <li>
            <Link>Тенсель 60s</Link>
          </li>
          <li>
            <Link>Поплин Турция</Link>
          </li>
          <li>
            <Link>Дак</Link>
          </li>
          <li>
            <Link>Вафельное полотно</Link>
          </li>
          <li>
            <Link>Махра</Link>
          </li>
          <li>
            <Link>Пике косичка</Link>
          </li>
          <li>
            <Link>Фланель</Link>
          </li>
          <li>
            <Link>Муслин</Link>
          </li>
        </ul>
        <ul className={styles.bottom_section_сompany}>
          <li><h3>Компания</h3></li>
          <li>
            <Link>Личный кабинет</Link>
          </li>
          <li>
            <Link>О нас</Link>
          </li>
          <li>
            <Link>Контакты</Link>
          </li>
          <li>
            <Link>Оплата и доставка</Link>
          </li>
          <li>
            <Link>Часто задаваемые вопросы</Link>
          </li>
          <li>
            <Link>Политика конфиденциальности</Link>
          </li>
          <li>
            <Link>Пользовательское соглашение</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};
