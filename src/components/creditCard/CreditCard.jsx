/* eslint-disable react/prop-types */
import styles from "./CreditCard.module.css";

const CreditCard = ({ children }) => {
  return (
    <section className={styles.credit_card_container}>
      <article className={styles.cards_holder}>
        <article className={styles.front_card}>
          <h3 className={styles.name}>Ozod Bukhorizoda</h3>
        </article>
        <article className={styles.back_card}>Back-card</article>
      </article>
      {children}
    </section>
  );
};

export default CreditCard;