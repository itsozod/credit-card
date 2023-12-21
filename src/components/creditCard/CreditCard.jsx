import styles from "./CreditCard.module.css";

const CreditCard = () => {
  return (
    <section className={styles.credit_card_container}>
      <article>
        <article>Front-card</article>
        <article>Back-card</article>
      </article>
    </section>
  );
};

export default CreditCard;
