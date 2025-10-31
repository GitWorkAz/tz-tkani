import { useState } from "react";
import styles from "./Modal.module.css";
import { Link } from "react-router-dom";

export const Modal = ({}) => {
  const [overlayOpen, setOverlayOpen] = useState(null);

  const divClick = (index, e) => {
    e.stopPropagation();
    setOverlayOpen(overlayOpen === index ? null : index);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        <section className={styles.modal_left}>
          <h3 className={styles.modal_title}>Для одежды</h3>
          <div className={styles.modal_links}>
            <Link to="/" className={styles.modal_link_item}>
              Шелк
            </Link>
            <div
              name=""
              className={`${styles.modal_link_name} ${
                overlayOpen === 1 ? styles.opened : ""
              }`}
              onClick={(e) => divClick(1, e)}
            >
              Футер
              {overlayOpen === 1 && (
                <>
                  <Link to="/" className={styles.link}>
                    Ткань 1
                  </Link>
                  <Link to="/" className={styles.link}>
                    Ткань 2
                  </Link>
                </>
              )}
            </div>
            <div
              name=""
              className={`${styles.modal_link_name} ${
                overlayOpen === 2 ? styles.opened : ""
              }`}
              onClick={(e) => divClick(2, e)}
            >
              Трикотаж
              {overlayOpen === 2 && (
                <>
                  <Link to="/" className={styles.link}>
                    Ткань 1
                  </Link>
                  <Link to="/" className={styles.link}>
                    Ткань 2
                  </Link>
                </>
              )}
            </div>
            <Link to="/" className={styles.modal_link_item}>
              Вискоза
            </Link>
            <Link to="/" className={styles.modal_link_item}>
              Тенсель
            </Link>
            <div
              name=""
              className={`${styles.modal_link_name} ${
                overlayOpen === 3 ? styles.opened : ""
              }`}
              onClick={(e) => divClick(3, e)}
            >
              Лен
              {overlayOpen === 3 && (
                <>
                  <Link to="/" className={styles.link}>
                    Купра
                  </Link>
                  <Link to="/" className={styles.link}>
                    Хлопок
                  </Link>
                </>
              )}
            </div>
            <div
              name=""
              className={`${styles.modal_link_name} ${
                overlayOpen === 4 ? styles.opened : ""
              }`}
              onClick={(e) => divClick(4, e)}
            >
              Штапель
              {overlayOpen === 4 && (
                <>
                  <Link to="/" className={styles.link}>
                    Ткань 1
                  </Link>
                  <Link to="/" className={styles.link}>
                    Ткань 2
                  </Link>
                </>
              )}
            </div>
            <Link to="/" className={styles.modal_link_item}>
              Джинса
            </Link>
          </div>
        </section>

        <section className={styles.modal_right}>
          <h3 className={styles.modal_title}>Для дома</h3>
          <div className={styles.modal_links}>
            <div 
              name=""
              className={`${styles.modal_link_name} ${
                overlayOpen === 5 ? styles.opened : ""
              }`}
              onClick={(e) => divClick(5, e)}
            >
              Сатин Турция
              {overlayOpen === 5 && (
                <>
                  <Link to="/catalog_home" className={styles.link}>
                    Однотоп / Страйп
                  </Link>
                  <Link to="/" className={styles.link}>
                    Принт
                  </Link>
                </>
              )}
            </div>
            <div
              name=""
              className={`${styles.modal_link_name} ${
                overlayOpen === 6 ? styles.opened : ""
              }`}
              onClick={(e) => divClick(6, e)}
            >
              Сатин Китай
              {overlayOpen === 6 && (
                <>
                  <Link to="/" className={styles.link}>
                    Ткань 1
                  </Link>
                  <Link to="/" className={styles.link}>
                    Ткань 2
                  </Link>
                </>
              )}
            </div>
            <div
              name=""
              className={`${styles.modal_link_name} ${
                overlayOpen === 7 ? styles.opened : ""
              }`}
              onClick={(e) => divClick(7, e)}
            >
              Тенсель 60s
              {overlayOpen === 7 && (
                <>
                  <Link to="/" className={styles.link}>
                    Ткань 1
                  </Link>
                  <Link to="/" className={styles.link}>
                    Ткань 2
                  </Link>
                </>
              )}
            </div>
            <div
              name=""
              className={`${styles.modal_link_name} ${
                overlayOpen === 8 ? styles.opened : ""
              }`}
              onClick={(e) => divClick(8, e)}
            >
              Поплин Турция
              {overlayOpen === 8 && (
                <>
                  <Link to="/" className={styles.link}>
                    Ткань 1
                  </Link>
                  <Link to="/" className={styles.link}>
                    Ткань 2
                  </Link>
                </>
              )}
            </div>
            <div
              name=""
              className={`${styles.modal_link_name} ${
                overlayOpen === 9 ? styles.opened : ""
              }`}
              onClick={(e) => divClick(9, e)}
            >
              Дак
              {overlayOpen === 9 && (
                <>
                  <Link to="/" className={styles.link}>
                    Ткань 1
                  </Link>
                  <Link to="/" className={styles.link}>
                    Ткань 2
                  </Link>
                </>
              )}
            </div>
            <Link to="/" className={styles.modal_link_item}>
              Вафельное полотно
            </Link>
            <Link to="/" className={styles.modal_link_item}>
              Махра
            </Link>
            <Link to="/" className={styles.modal_link_item}>
              Пике косичка
            </Link>
            <Link to="/" className={styles.modal_link_item}>
              Фланель
            </Link>
            <Link to="/" className={styles.modal_link_item}>
              Муслин
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
