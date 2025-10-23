import styles from "./Modal.module.css";
import { Link } from "react-router-dom";

export const Modal = ({}) => {
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
            <div name="" className={styles.modal_link_name}>
              <Link to="/">Ткань 1</Link>
              <Link to="/">Ткань 2</Link>
            </div>
            <div name="" className={styles.modal_link_name}>
              <Link to="/">Ткань 1</Link>
              <Link to="/">Ткань 2</Link>
            </div>
            <Link to="/">Вискоза</Link>
            <Link to="/">Тенсель</Link>
            <div name="" className={styles.modal_link_name}>
              <Link to="/">Купра</Link>
              <Link to="/">Хлопок</Link>
            </div>
            <div name="" className={styles.modal_link_name}>
              <Link to="/">Ткань 1</Link>
              <Link to="/">Ткань 2</Link>
            </div>
            <Link to="/" className={styles.modal_link_item}>
              Джинса
            </Link>
          </div>
        </section>

        <section className={styles.modal_right}>
          <h3 className={styles.modal_title}>Для одежды</h3>
          <div className={styles.modal_links}>
            <div name="" className={styles.modal_link_name}>
              <Link to="/">Однотоп / Страйп</Link>
              <Link to="/">Принт</Link>
            </div>
            <div name="" className={styles.modal_link_name}>
              <Link to="/">Ткань 1</Link>
              <Link to="/">Ткань 2</Link>
            </div>
            <div name="" className={styles.modal_link_name}>
              <Link to="/">Ткань 1</Link>
              <Link to="/">Ткань 2</Link>
            </div>
            <div name="" className={styles.modal_link_name}>
              <Link to="/">Ткань 1</Link>
              <Link to="/">Ткань 2</Link>
            </div>
            <div name="" className={styles.modal_link_name}>
              <Link to="/">Ткань 1</Link>
              <Link to="/">Ткань 2</Link>
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
