import { Form } from "../Form/index";
import { Input } from "../Input/index";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./register.module.scss";
import { Button } from "../Button/index";
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
      <div className={styles.addUserIcon}>
        <i class="bi bi-person-fill-add"></i>
      </div>
      <Form className={styles.formRegister}>
        <div className={styles.nameContainer}>
          <label className={styles.label} htmlFor="name">Name:</label>
          <div className={styles.nameContent}>
            <i class="bi bi-person-fill"></i>
            <Input id="name" placeholder="your name" />
          </div>
        </div>
        <div className={styles.emailContainer}>
          <label className={styles.label} htmlFor="email">Email:</label>
          <div className={styles.emailContent}>
            <i class="bi bi-envelope-fill"></i>
            <Input id="email" type="email" placeholder="your email" />
          </div>
        </div>
        <div className={styles.birthdayContainer}>
          <label className={styles.label} htmlFor="birthday">Birthday:</label>
          <div className={styles.birthdayContent}>
            <i class="bi bi-calendar-date-fill"></i>
            <Input id="birthday" placeholder="your Birthday" />
          </div>
        </div>
        <div className={styles.passwordContainer}>
          <label className={styles.label} htmlFor="adress">Password:</label>
          <div className={styles.passwordContent}>
            <i class="bi bi-key-fill"></i>
            <Input id="password" placeholder="your Passord" />
          </div>
        </div>
        <div className={styles.repeatPasswordContainer}>
          <label htmlFor="adress">Repeat:</label>
          <div className={styles.repeatPasswordContent}>
            <i class="bi bi-key-fill"></i>
            <Input id="password" placeholder="Repeat your Passord" />
          </div>
        </div>
        <div className={styles.containerButtons}>
          <Button className={styles.SignInContent}>
            Sign-in
          </Button>
        </div>
      </Form>
      <div className={styles.containerBottom}>
        <h2>Already have an account? log in</h2>
        <Button className={styles.SignUnContent}>
          <Link to={"/login"}>
            Sign-Up
          </Link>
        </Button>
      </div>
    </div>
  );
};
