import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.top_section}>
        <h3 className={styles.top_section_title}>
          Широкий выбор высококачественных
          <br /> текстильных материалов со скидками до 50%
        </h3>
        <button className={styles.top_section_btn}>
          <Link className={styles.top_section_btn_link}>Перейти в каталог</Link>
        </button>
      </section>

      <section className={styles.bottom_section}>
        <div className={styles.footer_content}>
          <div className={styles.footer_section}>
            <h3>Для одежды</h3>
            <nav className={styles.nav}>
              <Link href="/fabrics/shaim" className={styles.link}>
                Шайм
              </Link>
              <Link href="/fabrics/futer" className={styles.link}>
                Футер
              </Link>
              <Link href="/fabrics/prohotnik" className={styles.link}>
                Прохотник
              </Link>
              <Link href="/fabrics/vinosal" className={styles.link}>
                Винозал
              </Link>
              <Link href="/fabrics/temest" className={styles.link}>
                Теместь
              </Link>
              <Link href="/fabrics/muslin" className={styles.link}>
                Муслин
              </Link>
              <Link href="/fabrics/temest" className={styles.link}>
                Теместь
              </Link>
              <Link href="/fabrics/yama" className={styles.link}>
                Яма
              </Link>
              <Link href="/fabrics/kupra" className={styles.link}>
                Купра
              </Link>
              <Link href="/fabrics/holmik" className={styles.link}>
                Холмик
              </Link>
              <Link href="/fabrics/shtampy" className={styles.link}>
                Штампы
              </Link>
              <Link href="/fabrics/jeans" className={styles.link}>
                Джинса
              </Link>
            </nav>
          </div>

          <div className={styles.footer_section}>
            <h3>Для дома</h3>
            <nav className={styles.nav}>
              <Link href="/home/turkey-style" className={styles.link}>
                Стиль Турция
              </Link>
              <Link href="/home/china-style" className={styles.link}>
                Стиль Китай
              </Link>
              <Link href="/home/temest-65" className={styles.link}>
                Теместь 65л
              </Link>
              <Link href="/home/poor-turkey" className={styles.link}>
                Плохих Турция
              </Link>
              <Link href="/home/dak" className={styles.link}>
                Дак
              </Link>
              <Link href="/home/bleached-fabric" className={styles.link}>
                Выбелимое полотно
              </Link>
              <Link href="/home/mahra" className={styles.link}>
                Махра
              </Link>
              <Link href="/home/poly-kosmika" className={styles.link}>
                Поля космика
              </Link>
              <Link href="/home/flamin" className={styles.link}>
                Фламин
              </Link>
              <Link href="/home/muslin" className={styles.link}>
                Муслин
              </Link>
            </nav>
          </div>

          <div className={styles.footer_section}>
            <h3>Компания</h3>
            <nav className={styles.nav}>
              <Link href="/account" className={styles.link}>
                Личный кабинет
              </Link>
              <Link href="/about_us" className={styles.link}>
                О нас
              </Link>
              <Link href="/contacts" className={styles.link}>
                Контакты
              </Link>
              <Link href="/payment-delivery" className={styles.link}>
                Оплата и доставка
              </Link>
              <Link href="/faq" className={styles.link}>
                Часто задаваемые вопросы
              </Link>
              <Link href="/privacy" className={styles.link}>
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className={styles.link}>
                Пользовательское соглашение
              </Link>
            </nav>
          </div>
        </div>

        <div className={styles.footer_bottom}>
          <div className={styles.logo_container}>
            <div className={styles.logo}>
              <img
                src="/Logo Icon.svg"
                alt="Логотип"
                className={styles.logo_img}
              />
              <img
                src="/CENTER TKANI.svg"
                alt="Название"
                className={styles.logo_text}
              />
            </div>
            <p>© 2025 Центр Ткани. Все права защищены.</p>
          </div>
          <div className={styles.links_container}></div>
        </div>
      </section>
    </div>
  );
};
