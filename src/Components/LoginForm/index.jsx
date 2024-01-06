import { useAuth } from "../../provider/AuthContext";
import { useState } from "react";
import { Form } from "../Form/index";
import { Input } from "../Input/index";
import { Link, useNavigate} from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./styles.module.scss";

export const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    // Substitua esta chamada por sua lógica de autenticação real
    const isAuthenticated = await authenticateUser(email, password);

    if (isAuthenticated) {
      login(email);
      navigate('/')
      
    } else {
      alert('Credenciais inválidas');
    }
  };

  const authenticateUser = async (email, password) => {
    // Lógica de autenticação simulada
    // Substitua isso com sua lógica real de autenticação
    return email === 'admintest@teste.com' && password === 'admin';
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.headerLogin}>
            <div className={styles.logoStyle}>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <button className={styles.returnBtn}>
                <Link to={"/"}>
                  <i className="bi bi-arrow-left"></i>Return
                </Link>
              </button>
            </div>
          </div>
          <div className={styles.userLogin}>
            <i className="bi bi-person-circle"></i>
          </div>
          <Form className={styles.formLogin}>
            <label htmlFor="">Email</label>
            <div className={styles.emailContainer}>
              <i className="bi bi-envelope-fill"></i>
              <Input
                id="email"
                placeholder="Digite aqui seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <label htmlFor="">Password</label>
            <div className={styles.passwordContainer}>
              <i className="bi bi-key-fill"></i>
              <Input
                type="password"
                id="password"
                placeholder="Digite aqui sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className={styles.btnLogin} onClick={handleLogin}>
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
    </div>
  );
};