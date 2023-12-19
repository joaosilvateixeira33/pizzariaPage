import { Form } from "../Form/index";
import { Input } from "../Input/index";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./styles.module.scss";
export const LoginForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.headerLogin}>
          <div className={styles.logoStyle}>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <button className={styles.returnBtn}>
              <Link to={"/"}>
                <i class="bi bi-arrow-left"></i>Return
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.userLogin}>
          <i class="bi bi-person-circle"></i>
        </div>
        <Form className={styles.formLogin}>
          <label htmlFor="">Email</label>
          <div className={styles.emailContainer}>
            <i class="bi bi-envelope-fill"></i>
            <Input id="email" placeholder="Digite aqui seu email" />
          </div>
          <label htmlFor="">Password</label>
          <div className={styles.passwordContainer}>
            <i class="bi bi-key-fill"></i>
            <Input
              type="password"
              id="password"
              placeholder="Digite aqui sua senha"
            />
          </div>
          <button type="submit" className={styles.btnLogin}>
            Sign-up
          </button>
          <div className={styles.registerContainer}>
            <span>Don't have an account yet? create</span>
            <Link to={"/register"}>
              <button className={styles.btnRegister}>Register</button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};
