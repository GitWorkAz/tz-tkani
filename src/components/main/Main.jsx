import styles from "./Main.module.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { products } from "./productsData";

export const Main = () => {
  const [count, setCount] = useState(1.0);
  const increment = () => {
    setCount((prev) => +(prev + 0.1).toFixed(1));
  };
  const decrement = () => {
    setCount((prev) => +(prev - 0.1).toFixed(1));
  };

  // const [products, setProducts] = useState();
  // const fetchData = async () => {
  //   const response = await fetch(" https://jsonplaceholder.typicode.com/users");
  //   const data = await response.json();
  //   setProducts(data);
  // };
  // useEffect(() => {
  //   fetchData();
  // });

  const renderCard = (product, n) =>
    Array(n)
      .fill(product)
      .map((item, index) => (
        <div key={`${item.id}-${index}`} className={styles.product_card}>
          <img src={item.imgSrc} alt="Ткань" className={styles.card_img}/>
          <div className={styles.card_name}>
            <h3>{item.name}</h3>
            <p>{item.price_one}</p>
          </div>
          <div className={styles.card_hidden}>
            <p className={styles.card_discount}>*Скидка от 5 метров</p>
            <div className={styles.card_count_container}>
              <div className={styles.card_count}>
                <button className={styles.btn_dec} onClick={decrement}>-</button>
                <p className={styles.count}>{count}</p>
                <button className={styles.btn_inc} onClick={increment}>+</button>
              </div>
              <p className={styles.card_price}>{item.price}</p>
            </div>
            <button type="submit" className={styles.buy_btn}>В корзину</button>
          </div>
        </div>
      ));


  return (
    <div className={styles.wrapper}>
      <section className={styles.section_products}>
        <div className={styles.products_title}>
          <h3>Новинки</h3>
          <Link className={styles.title_link}>Посмотреть все</Link>
        </div>
        <div className={styles.product_all}>
          {renderCard(
            products.find((p) => p.id === 1),
            4
          )}

          {/* {products.length > 0 && (
            <>
              {products.map((product) => (
                <div className={styles.products_card}>
                  <img src={product.imgSrc} alt="" />
                  <div className={styles.card_name}>
                    <h3>{product.name}</h3>
                    <p>{product.price_one}</p>
                  </div>
                  <div className={styles.card_hidden}>
                    <p>*Скидка от 5 метров</p>
                    <div className={styles.card_count_container}>
                      <div className={styles.card_count}>
                        <button onClick={decrement}>-</button>
                        <p className={styles.count}>{count}</p>
                        <button onClick={increment}>+</button>
                      </div>
                      <p className={styles.card_price}>{product.price}</p>
                    </div>
                    <button type="submit">В корзину</button>
                  </div>
                </div>
              ))}
            </>
          )} */}
        </div>
      </section>

      <section className={styles.section_products}>
        <div className={styles.products_title}>
          <h3>Акции и скидки</h3>
          <Link className={styles.title_link}>Посмотреть все</Link>
        </div>
        <div className={styles.product_all}>
          {renderCard(
            products.find((p) => p.id === 2),
            4
          )}
        </div>
      </section>

      <section className={styles.section_products}>
        <div className={styles.products_title}>
          <h3>Комбинации</h3>
          <Link className={styles.title_link}>Посмотреть все</Link>
        </div>
        <div className={styles.product_all}>
          {renderCard(
            products.find((p) => p.id === 3),
            4
          )}
        </div>
      </section>
    </div>
  );
};
