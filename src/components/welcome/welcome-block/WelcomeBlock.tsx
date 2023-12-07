import s from "./welcome-block.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

export default function WelcomeBlock() {
    const AuthFalse = (
        <nav className={s.navigation}>
          <Link className="link" to={'/login'}>
            Sign In
          </Link>
          <Link className="link" to={'/register'}>
            Sign Up
          </Link>
        </nav>
      );
      
      const AuthTrue = <button>Home</button>;
    const { isAuth } = useAuth();
    return(
        <div className={s.welcomeBlock}>
        <div className={s.imageBlock}>
          <img className={s.image} src="./earth.png" alt="night" />
        </div>
        <div className={s.welcomeContent}>
          <span className={s.h1}></span>
          <h2 className={s.header}>Application for your queries</h2>
          <h3 className={s.header}>
            To use the application, sign up or sign in to your account
          </h3>
          {isAuth ? AuthTrue : AuthFalse}
        </div>
      </div>
    )
}