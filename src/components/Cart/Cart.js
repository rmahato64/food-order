
import styles from "./Cart.module.css";
import Modal from '../UI/Modal'

const Cart = (props) => {
  const cartItems =<ul className={styles['cart-items']}>{[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
    (items) => <li>{items.name}</li>
  )}</ul>;
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amouint</span>
        <span>35.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
