import styles from "./Discounts.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { products } from "./productsData";

export const Discounts = () => {
  const [overlayOpen, setOverlayOpen] = useState(null);

  const [hoveredCard, setHoveredCard] = useState(null);

  const divClick = (index, e) => {
    e.stopPropagation();
    setOverlayOpen(overlayOpen === index ? null : index);
  };

  const ProductCard = ({ product, cardIndex }) => {
    const [count, setCount] = useState(1.0);
    const increment = () => {
      setCount((prev) => +(prev + 0.1).toFixed(1));
    };
    const decrement = () => {
      setCount((prev) => +(prev - 0.1).toFixed(1));
    };

    return (
      <div
        className={styles.product_card}
        onMouseEnter={() => setHoveredCard(cardIndex)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <img src={product.imgSrc} alt="Ткань" className={styles.card_img} />
        <div className={styles.card_name}>
          <h3>{product.name}</h3>
          <p>{product.price_one}</p>
        </div>

        <div
          className={`${styles.card_hidden} ${
            hoveredCard === cardIndex ? styles.card_visible : ""
          }`}
        >
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
            <p className={styles.card_price}>{product.price}</p>
          </div>
          <button type="submit" className={styles.buy_btn}>
            В корзину
          </button>
        </div>
      </div>
    );
  };

  const renderCard = () => {
    const product = products.find((p) => p.id === 1);
    return Array(13)
      .fill(product)
      .map((item, index) => (
        <ProductCard
          key={`${item.id}-${index}`}
          product={item}
          cardIndex={index}
        />
      ));
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Скидки и акции</h3>
      <div className={styles.product_container}>
        <div className={styles.product_cards}>{renderCard()}</div>

        <div className={styles.page_btns}>
          <button className={styles.btn_move}>Назад</button>
          <button className={styles.page_number}>1</button>
          <button className={styles.page_number}>2</button>
          <button className={styles.page_number}>3</button>
          <button className={styles.page_number}>4</button>
          <button className={styles.btn_move}>Вперед</button>
        </div>
      </div>
    </div>
  );
};
