import styles from "./CatalogHome.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { products } from "./productsData";

export const CatalogHome = () => {
  const [overlayOpen, setOverlayOpen] = useState(null);

  const divClick = (index, e) => {
    e.stopPropagation();
    setOverlayOpen(overlayOpen === index ? null : index);
  };

  const [count, setCount] = useState(1.0);
  const increment = () => {
    setCount((prev) => +(prev + 0.1).toFixed(1));
  };
  const decrement = () => {
    setCount((prev) => +(prev - 0.1).toFixed(1));
  };

  const renderCard = (product, n) =>
    Array(n)
      .fill(product)
      .map((item, index) => (
        <div key={`${item.id}-${index}`} className={styles.product_card}>
          <img src={item.imgSrc} alt="Ткань" className={styles.card_img} />
          <div className={styles.card_name}>
            <h3>{item.name}</h3>
            <p>{item.price_one}</p>
          </div>
          <div className={styles.card_hidden}>
            <p className={styles.card_discount}>*Скидка от 5 метров</p>
            <div className={styles.card_count_container}>
              <div className={styles.card_count}>
                <button className={styles.btn_dec} onClick={decrement}>
                  -
                </button>
                <p className={styles.count}>{count}</p>
                <button className={styles.btn_inc} onClick={increment}>
                  +
                </button>
              </div>
              <p className={styles.card_price}>{item.price}</p>
            </div>
            <button type="submit" className={styles.buy_btn}>
              В корзину
            </button>
          </div>
        </div>
      ));

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Для дома</h3>
      <div className={styles.content_container}>
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
        <div className={styles.product_container}>
          <h3 className={styles.product_container_title}>Однотон / Страйп</h3>
          <div className={styles.product_cards}>
            {renderCard(
              products.find((p) => p.id === 1),
              13
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


