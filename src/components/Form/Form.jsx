import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.form_container}>
      <form className={styles.form}>
        <label>Card holder name</label>
        <input type="text" placeholder="Enter card holder name" />
        <label>Card number</label>
        <input type="text" placeholder="Enter card number " />
        <h3 className={styles.expire}>Expire Date</h3>
        <div className={styles.m_y_cvc}>
          <div className={styles.expire_label}>
            <label>MM</label>
            <input
              type="text"
              placeholder="MM"
              className={styles.small_input}
            />
          </div>
          <div className={styles.expire_label}>
            <label>YY</label>
            <input
              type="text"
              placeholder="YY"
              className={styles.small_input}
            />
          </div>
          <div className={styles.expire_label}>
            <label>CVC</label>
            <input type="text" placeholder="CVC" className={styles.big_input} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
