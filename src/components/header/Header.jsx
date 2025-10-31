import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";
import { Modal } from "./modal/Modal";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const catalogClick = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scroll = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerHeight = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  const navClick = (e, sectionId) => {
    e.preventDefault();
    if (window.location.pathname === "/about_us") {
      scroll(sectionId);
    } else {
      window.location.href = `/about_us#${sectionId}`;
    }
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.top_bar}>
        <a href="" className={`${styles.link} ${styles.link_a1}`}>
          Мы на WB
        </a>
        <nav className={styles.navigation}>
          <Link
            to="/about_us#about"
            className={styles.link}
            onClick={(e) => navClick(e, "about")}
          >
            О нас
          </Link>
          <Link
            to="/about_us#delivery"
            className={styles.link}
            onClick={(e) => navClick(e, "delivery")}
          >
            Оплата и доставка
          </Link>
          <Link
            to="/about_us#questions"
            className={styles.link}
            onClick={(e) => navClick(e, "questions")}
          >
            Часто задаваемые вопросы
          </Link>
          <Link
            to="/about_us#pay"
            className={styles.link}
            onClick={(e) => navClick(e, "pay")}
          >
            Программа лояльности
          </Link>
          <Link
            to="/about_us#contacts"
            className={styles.link}
            onClick={(e) => navClick(e, "contacts")}
          >
            Контакты
          </Link>
        </nav>
        <a href="/" className={`${styles.link} ${styles.link_a2}`}>
          Мы на OZON
        </a>
      </section>

      <section className={styles.bottom_bar}>
        <div className={styles.transitions}>
          <div className={styles.position_btn}>
            <button className={styles.catalog} onClick={catalogClick}>
              Каталог
              <img src="/arrow white.svg" alt="Стрелка" />
            </button>
            {isModalOpen && (
              <div className={styles.modal_overlay} onClick={closeModal}>
                <Modal />
              </div>
            )}
          </div>

          <Link to="/our_works" className={`${styles.our_work} ${styles.link}`}>
            Работы из наших тканей
          </Link>
          <Link to="/discounts" className={`${styles.sale} ${styles.link}`}>
            Скидки и акции
          </Link>
        </div>
        <Link to="/" className={styles.logo}>
          <img src="/Logo Icon.svg" alt="Логотип" className={styles.logo_img} />
          <img
            src="/CENTER TKANI.svg"
            alt="Название"
            className={styles.logo_text}
          />
        </Link>
        <div className={styles.search}>
          <div className={styles.search_container}>
            <input
              type="text"
              placeholder="Поиск по сайту"
              className={styles.search_input}
              name="search"
            />
            <img
              src="/Loupe.svg"
              alt="Иконка поиска"
              className={styles.search_img}
            />
          </div>
          <Link to="/log_in">
            <img src="/User Icon.svg" alt="" className={styles.user_img} />
          </Link>
          <Link to="/">
            <img src="/Bag Icon.svg" alt="" className={styles.bag_img} />
          </Link>
        </div>
      </section>
    </div>
  );
};


