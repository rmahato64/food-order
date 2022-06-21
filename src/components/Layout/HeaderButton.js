import React from 'react';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderButton.module.css'

const HeaderButton = (props) => {
  return (
    <button className={styles.button}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span className={styles.badge}>Your Cart</span>
        <span>3</span>
    </button>
  )
}

export default HeaderButton