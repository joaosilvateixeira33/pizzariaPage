import styles from "../../Components/RegisterForm/register.module.scss";
import { RegisterForm } from "../../Components/RegisterForm/index";

export const RegisterPage = () => {
  return (
    <div className={styles.containerRegister}>
      <RegisterForm />
    </div>
  );
};
