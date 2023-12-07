//Если пользователь не авторизован, страница должна содержать ссылку на страницу входа/регистрации.
// Если пользователь авторизован, страница должна содержать ссылку на Главную страницу.
// Приветственная страница должна содержать общую информацию о разработчиках, проекте и курсе. 10 баллов.
// В правом верхнем углу 2 кнопки: Войти и Зарегистрироваться 10 баллов.
// Если токен входа действителен и срок его действия не истек, кнопки «Войти» и «Зарегистрироваться» заменяются кнопкой «Главная страница» 10 баллов
// По истечении срока действия токена - пользователь должен быть автоматически перенаправлен на «Страницу приветствия» 10 баллов
// Нажатие кнопки «Войти/Зарегистрироваться» перенаправляет пользователя на маршрут с формой «Войти/Зарегистрироваться» 10 баллов
import { Link } from 'react-router-dom';
import s from './welcome.module.scss';
import { useAuth } from '../../hooks/useAuth';

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

export default function Welcome() {
  const { isAuth } = useAuth();
  return (
    <div className={s.welcomePage}>
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
      <div className={s.ourTeam}>
        <h2 className={s.header}>Our team</h2>
      <p>Hello</p>
      <p>Hello</p><p>Hello</p>
      </div>
    </div>
  );
}
