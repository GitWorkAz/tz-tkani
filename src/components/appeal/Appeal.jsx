import styles from "./Appeal.module.css";

export const Appeal = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.appeal_title}>
        <p>Дорогие покупатели!</p>
        <h3>Магазин натуральных тканей</h3>
      </div>
      <div className={styles.appeal_cards}>
        <div className={styles.appeal_card}>
          <p>
            <b>«Центр ткани»</b> — это магазин натуральных тканей и трикотажа
            высокого качества. У нас вы найдёте широкий выбор материалов для
            одежды и текстиля: хлопок, лен, футер и многое другое.
          </p>
        </div>
        <div className={styles.appeal_card}>
          <p>
            Мы работаем с 2020 года и сотрудничаем напрямую с ведущими фабриками{" "}
            <b>Турции, Беларуси и Китая</b>. Среди наших партнёров —
            <b>Sabaev, Wella, IPEKER, Оршанский льнокомбинат</b> и другие
            известные производители.
          </p>
        </div>
      </div>
      <p>
        Мы всегда стараемся радовать вас актуальными коллекциями и<br /> качественным
        обслуживанием.
      </p>
    </div>
  );
};
