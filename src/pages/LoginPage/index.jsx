import { LoginForm } from "../../Components/LoginForm/index";
import styles from "../../Components/LoginForm/styles.module.scss";

export const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <LoginForm />
    </div>
  );
};
