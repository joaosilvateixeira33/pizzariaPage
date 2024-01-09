import styles from "./header.module.scss";
import logo from "../../assets/logo.svg";
import { Link} from "react-router-dom";
import { useAuth } from "../../provider/AuthContext";
import { users } from "../../data/users";

export const Header = ({ cartList, setRender, setCartList }) => {
  const { isAuthenticated, logout, email} = useAuth();
  const openModal = (e) => {
    e.preventDefault();
    setRender(true);
  };

  const currentUser = users.find(user => user.email === email);

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
        
        {isAuthenticated ? (
          // If authenticated, show logout button
          <div className={styles.containerLogout}>
            <Link to="/dashboard" className={styles.dashboard}>
              <h6>Hello, {currentUser?.name}</h6>
            </Link>
            <button onClick={logout} className={styles.signIn}>
              Logout
            </button>
          </div>
        ) : (
          // If not authenticated, show the Sign-In link
          <div>
            <Link to="/login" className={styles.signIn}>
              Sign-In
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
