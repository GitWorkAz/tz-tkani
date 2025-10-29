import styles from "./Discounts.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { products } from "./productsData";

export const Discounts = () => {
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
      <h3 className={styles.title}>Скидки и акции</h3>
      <div className={styles.product_container}>
        <div className={styles.product_cards}>
          {renderCard(
            products.find((p) => p.id === 1),
            12
          )}
        </div>

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
