import styles from "./Form.module.css";
import { ChangeStates } from "../../App";
import { useContext } from "react";

const Form = () => {
  const [cardHolder, setCardHolder] = useContext(ChangeStates);
  return (
    <div className={styles.form_container}>
      <form className={styles.form}>
        <label>Card holder name</label>
        <input
          type="text"
          placeholder="Enter card holder name"
          maxLength={19}
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
        />
        <label>Card number</label>
        <input type="text" placeholder="Enter card number " maxLength={16} />
        <h3 className={styles.expire}>Expire Date</h3>
        <div className={styles.m_y_cvc}>
          <div className={styles.expire_label}>
            <label>MM</label>
            <input
              type="text"
              placeholder="MM"
              className={styles.small_input}
              maxLength={2}
            />
          </div>
          <div className={styles.expire_label}>
            <label>YY</label>
            <input
              type="text"
              placeholder="YY"
              className={styles.small_input}
              maxLength={4}
            />
          </div>
          <div className={styles.expire_label}>
            <label>CVC</label>
            <input
              type="text"
              placeholder="CVC"
              className={styles.big_input}
              maxLength={3}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
