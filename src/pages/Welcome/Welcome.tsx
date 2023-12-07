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
import { useInView } from 'react-intersection-observer';

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
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
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
      <div className={s.team}>
        <h2 className={s.teamHeader}>Our team</h2>
        <div ref={ref1} className={`${s.memberBlock} ${s.fadeIn1} ${inView1 ? s.visible : ''}`}>
          <div className={s.teamMember}>
            <div className={s.teamImageBlock}>
              <img
                className={s.teamImage}
                src="./Irina.JPG"
                alt="Irina's photo"
              />
            </div>
            <div className={s.teamContent}>
              <h3>Irina</h3>
              <p>
                Her passion for aesthetics brings a touch of elegance to the
                user experience, turning every interaction into a visual
                journey.
              </p>
            </div>
          </div>
        </div>
        <div ref={ref2} className={`${s.memberBlock} ${s.fadeIn2} ${inView2 ? s.visible : ''}`}>
          <div className={s.teamMember}>
            <div className={s.teamImageBlock}>
              <img
                className={s.teamImage}
                src="./Maria.png"
                alt="Irina's photo"
              />
            </div>
            <div className={s.teamContent}>
              <h3>Maria</h3>
              <p>
                Her empathetic approach creates a safe environment for users and
                every authentication will be a warm welcome, creating a sense of
                belonging.
              </p>
            </div>
          </div>
        </div>
        <div ref={ref3} className={`${s.memberBlock} ${s.fadeIn3} ${inView3 ? s.visible : ''}`}>
          <div className={s.teamMember}>
            <div className={s.teamImageBlock}>
              <img
                className={s.teamImage}
                src="./Anastasia.jpg"
                alt="Irina's photo"
              />
            </div>
            <div className={s.teamContent}>
              <h3>Anastasia</h3>
              <p>
                Her insatiable curiosity allows her to travel across vast
                landscapes. GraphQL, turning data queries into exciting
                adventures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
