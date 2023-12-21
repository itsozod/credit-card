/* eslint-disable react/prop-types */
import styles from "./CreditCard.module.css";

const CreditCard = ({ children }) => {
  return (
    <section className={styles.credit_card_container}>
      <article className={styles.cards_holder}>
        <article className={styles.front_card}>Front-card</article>
        <article className={styles.back_card}>Back-card</article>
      </article>
      {children}
    </section>
  );
};

export default CreditCard;
