import styles from "./OurWorks.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { products } from "./productsData";

export const OurWorks = () => {
  const ProductCard = ({ product }) => {
    return (
      <div className={styles.product_card}>
        <img src={product.imgSrc} alt="Ткань" className={styles.card_img} />
        <div className={styles.name_card}>
          <h3>{product.name}</h3>
          <button className={styles.buy_btn}>
            Посмотреть
          </button>
        </div>
      </div>
    );
  };

  const renderCard = () => {
    const product = products.find((p) => p.id === 1);
    return Array(12)
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
      <h3 className={styles.title}>Работы из наших тканей</h3>
      <div className={styles.content_container}>
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
