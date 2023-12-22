import styles from "./CreditCard.module.css";
import { useColorChange } from "../../hooks/UseColorChange";
import { useImageChange } from "../../hooks/UseImageChange";
import { useSelector, useDispatch } from "react-redux";
import { changeCardDetails } from "../../store/functions/changeCardDetails";
export const CreditCard = () => {
  const cardHolder = useSelector((state) => state.cardHolderReducer);
  const dispatch = useDispatch();
  // const [cardHolder, setCardHolder] = useState("Card Holder");
  // const [cardNumber, setCardNumber] = useState("");
  // const [cvc, setCvc] = useState("");
  // const [month, setMonth] = useState("");
  // const [year, setYear] = useState("");

  // сustom hooks
  const [cardColor] = useColorChange();
  const [cardImage] = useImageChange();

  // function for changing card details
  const handleCardDetails = (name, value) => {
    dispatch(changeCardDetails(name, value));
  };

  // function for separating number on cardNumber
  const handleCardNumber = (name, value) => {
    const newValue = value.replace(/\D/g, "");
    const formattedValue = newValue.replace(/(\d{4})/g, "$1 ").trim();
    dispatch(changeCardDetails(name, formattedValue));
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
          <h1 className={styles.number}>{cardHolder.number}</h1>
          <h3 className={styles.name}>{cardHolder.name}</h3>
          <h4 className={styles.expire_date}>
            {cardHolder.month}/{cardHolder.year}
          </h4>
        </article>
        <article className={styles.back_card}>
          <h3 className={styles.cvc}>{cardHolder.cvc}</h3>
        </article>
      </article>
      {/* form container */}
      <div className={styles.form_container}>
        <form className={styles.form}>
          <label>Card number</label>
          <input
            type="text"
            placeholder="Enter card number"
            maxLength={19}
            name="number"
            value={cardHolder.number}
            onChange={(e) => handleCardNumber(e.target.name, e.target.value)}
          />
          <label>Card holder name</label>
          <input
            type="text"
            placeholder="Enter card holder name"
            maxLength={19}
            name="name"
            value={cardHolder.name}
            onChange={(e) =>
              handleCardDetails(e.target.name, e.target.value.toUpperCase())
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
                name="month"
                value={cardHolder.month}
                onChange={(e) =>
                  handleCardDetails(e.target.name, e.target.value)
                }
              />
            </div>
            <div className={styles.expire_label}>
              <label>YY</label>
              <input
                type="text"
                placeholder="YY"
                className={styles.small_input}
                maxLength={2}
                name="year"
                value={cardHolder.year}
                onChange={(e) =>
                  handleCardDetails(e.target.name, e.target.value)
                }
              />
            </div>
            <div className={styles.expire_label}>
              <label>CVC</label>
              <input
                type="text"
                placeholder="CVC"
                className={styles.big_input}
                maxLength={3}
                name="cvc"
                value={cardHolder.cvc}
                onChange={(e) =>
                  handleCardDetails(e.target.name, e.target.value)
                }
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
