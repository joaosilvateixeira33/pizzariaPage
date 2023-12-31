import { useAuth } from "../../provider/AuthContext";
import { useState } from "react";
import { Form } from "../Form/index";
import { Input } from "../Input/index";
import { Link, useNavigate} from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./styles.module.scss";
import { users } from "../../data/users";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    const isAuthenticated = await authenticateUser(email, password);
      
    if (isAuthenticated) {
      login(email);
      navigate('/')

    } else {
      toast.error('Invalid credentials', {
        position: 'top-right',
        autoClose: 3000, // Fechar automaticamente após 3000 milissegundos (3 segundos)
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const authenticateUser = async (email, password) => {
    const user = users.find(usuario => usuario.email === email);
    if(user && user.password === password){
      return true;
    }
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
              <span className={styles.message}>Don't have an account yet? create</span>
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