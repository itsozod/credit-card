/* eslint-disable react/prop-types */
import styles from "./CreditCard.module.css";
import { ChangeStates } from "../../App";
import { useContext } from "react";

const CreditCard = ({ children }) => {
  const [cardHolder] = useContext(ChangeStates);
  return (
    <section className={styles.credit_card_container}>
      <article className={styles.cards_holder}>
        <article className={styles.front_card}>
          <h1 className={styles.number}>1234 4567 7899 1111</h1>
          <h3 className={styles.name}>{cardHolder}</h3>
          <h4 className={styles.expire_date}>05/26</h4>
        </article>
        <article className={styles.back_card}>
          <h3 className={styles.cvc}>649</h3>
        </article>
      </article>
      {children}
    </section>
  );
};

export default CreditCard;
