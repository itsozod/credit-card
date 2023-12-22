/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./CreditCard.module.css";
import { useColorChange } from "../../hooks/UseColorChange";
import { useImageChange } from "../../hooks/UseImageChange";
import { CHANGECARDHOLDER } from "../../store/actions/cardHolderAction";
import { useSelector, useDispatch } from "react-redux";
export const CreditCard = () => {
  const cardHolder = useSelector(
    (cardHolder) => cardHolder.cardHolderReducer.name
  );
  const dispatch = useDispatch();
  // const [cardHolder, setCardHolder] = useState("Card Holder");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // сustom hooks
  const [cardColor] = useColorChange();
  const [cardImage] = useImageChange();

  // function for cardNumber change
  const handleCardNumber = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = value.replace(/(\d{4})/g, "$1 ").trim();
    setCardNumber(formattedValue);
  };
  return (
    <section className={styles.credit_card_container}>
      <article className={styles.cards_holder}>
        <article
          style={{ background: cardColor }}
          className={styles.front_card}
        >
          {cardImage && (
            <img className={styles.card_img} src={cardImage} alt="Image" />
          )}
          <h1 className={styles.number}>{cardNumber}</h1>
          <h3 className={styles.name}>{cardHolder}</h3>
          <h4 className={styles.expire_date}>
            {month}/{year}
          </h4>
        </article>
        {/* <article className={styles.back_card}>
          <h3 className={styles.cvc}>{cvc}</h3>
        </article> */}
      </article>
      {/* form container */}
      <div className={styles.form_container}>
        <form className={styles.form}>
          <label>Card number</label>
          <input
            type="text"
            placeholder="Enter card number"
            maxLength={19}
            value={cardNumber}
            onChange={(e) => handleCardNumber(e)}
          />
          <label>Card holder name</label>
          <input
            type="text"
            placeholder="Enter card holder name"
            maxLength={19}
            value={cardHolder}
            onChange={(e) =>
              dispatch({ type: CHANGECARDHOLDER, payload: e.target.value })
            }
          />
          <h3 className={styles.expire}>Expire Date</h3>
          <div className={styles.m_y_cvc}>
            <div className={styles.expire_label}>
              <label>MM</label>
              <input
                type="text"
                placeholder="MM"
                className={styles.small_input}
                maxLength={2}
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
            </div>
            <div className={styles.expire_label}>
              <label>YY</label>
              <input
                type="text"
                placeholder="YY"
                className={styles.small_input}
                maxLength={2}
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
            <div className={styles.expire_label}>
              <label>CVC</label>
              <input
                type="text"
                placeholder="CVC"
                className={styles.big_input}
                maxLength={3}
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
