import styles from "./header.module.scss";
import logo from "../../assets/logo.svg";
import { CartModal } from "../CartModal";

import { Link } from "react-router-dom";

export const Header = ({ cartList, setRender, setCartList }) => {
  const openModal = (e) => {
    e.preventDefault();
    setRender(true);
  };

  return (
    <header className={styles.headerContainer}>
      <img src={logo} alt="logo" className={styles.logoStyle} />
      <ul className={styles.menu}>
        <li>Home</li>
        <li>Menu</li>
        <li>Promotion</li>
        <li>Contact</li>
        <li>About</li>
      </ul>

      <div className={styles.buttonsContainer}>
        <button className={styles.lupa}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button className={styles.cart}>
          <i className="fa-solid fa-cart-shopping" onClick={openModal}></i>
          <span>{cartList.length}</span>
        </button>
        <div>
          <Link to={"/login"} className={styles.signIn}>
            Sign-In
          </Link>
        </div>
      </div>
    </header>
  );
};
