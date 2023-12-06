//  должен быть sticky. Момент, когда он становится sticky (если на странице есть прокрутка), следует анимировать: можно изменить цвет или уменьшить его высоту. Анимированный липкий заголовок
// Ссылка на страницу приветствия
// Элемент управления, позволяющий пользователю переключать язык
// Кнопка «Выход» — выход пользователя из системы.

import { Link } from 'react-router-dom';
import s from './header.module.scss';
import SwitchTheme from '../SwitchTheme/SwitchTheme';
import SelectLang from '../SelectLang/SelectLang';
import { useAuth } from '../../hooks/useAuth';
import logo from '../../../public/logo.svg';

export default function Header() {

  const { isAuth } = useAuth();

  const AuthFalse = (
    <nav className={s.navigation}>
      <Link className="link" to={'/login'}>
        Sign In
      </Link>
      <Link className="link" to={'/register'}>
        Sign Up
      </Link>
      <SwitchTheme />
      <SelectLang />
    </nav>
  );

  const AuthTrue = <button>Home</button>;

  return (
    <header>
      <div className={`${s.header} conteiner`}>
        <div className={s.logo}>
          <img src={logo} alt="logo" width={50} />
        </div>
        {isAuth ? AuthTrue : AuthFalse}
      </div>
    </header>
  );
}

