import { Form } from "../Form/index";
import { Input } from "../Input/index";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./register.module.scss";

export const RegisterForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerRegister}>
        <img src={logo} alt="logo" />
        <button className={styles.returnBtn}>
          <Link to={"/login"}>
            <i class="bi bi-arrow-left"></i>Return
          </Link>
        </button>
      </div>
      <Form className={styles.formRegister}>
        <div className={styles.nameContainer}>
          <label htmlFor="name">Name:</label>
          <div className={styles.nameContent}>
            <i class="bi bi-person-fill"></i>
            <Input id="name" placeholder="your name" />
          </div>
        </div>
        <div className={styles.emailContainer}>
          <label htmlFor="email">Email:</label>
          <div className={styles.emailContent}>
            <i class="bi bi-envelope-fill"></i>
            <Input id="email" placeholder="your email" />
          </div>
        </div>
      </Form>
    </div>
  );
};
