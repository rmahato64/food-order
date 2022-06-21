import React from "react";
import logo from '../../assets/header-image.jpg'
import styles from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderButton />
      </header>
      <div className={styles['main-image']}>
        <img src={logo} alt="HeaderImage" />
      </div>
    </React.Fragment>
  );
};

export default Header;
