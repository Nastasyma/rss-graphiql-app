//  должен быть sticky. Момент, когда он становится sticky (если на странице есть прокрутка), следует анимировать: можно изменить цвет или уменьшить его высоту. Анимированный липкий заголовок
// Ссылка на страницу приветствия
// Элемент управления, позволяющий пользователю переключать язык
// Кнопка «Выход» — выход пользователя из системы.

import { Link, NavLink } from 'react-router-dom';
import s from './header.module.scss';
import SwitchTheme from '../SwitchTheme/SwitchTheme';
import SelectLang from '../SelectLang/SelectLang';
import logo from '@assets/logo.svg';
import SignOut from '../SignOut/SignOut';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase';
import { useEffect, useState } from 'react';

const nav = [
  {
    title: 'Welcome',
    to: '/welcome',
    auth: null,
  },
  {
    title: 'Home',
    to: '/',
    auth: true,
  },
  {
    title: 'Sign In',
    to: '/login',
    auth: false,
  },
  {
    title: 'Sign Up',
    to: '/register',
    auth: false,
  },
];

export default function Header() {
  const [user] = useAuthState(auth);
  const [fixHeader, setFixHeader] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const scroll = () => {
      const top = window.scrollY;
      if (!fixHeader && !!top) setFixHeader(true);
      if (fixHeader && !top) setFixHeader(false);
    };
    window.addEventListener('scroll', scroll);
    return () => removeEventListener('scroll', scroll);
  });

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add('lock');
    }
    return () => {
      document.body.classList.remove('lock');
    };
  }, [openMenu]);

  const navLinks = (
    user
      ? nav.filter((el) => el.auth === true || el.auth === null)
      : nav.filter((el) => el.auth === false || el.auth === null)
  ).map((el, index) => (
    <NavLink key={`nav${index}`} className={`link ${s.nav_btn}`} to={el.to}>
      {el.title}
    </NavLink>
  ));

  return (
    <header
      className={`${fixHeader ? s.scroll : ''} ${openMenu ? s.open : ''}`}
    >
      <div className={`${s.header} conteiner ${fixHeader ? s.scroll : ''}`}>
        <Link to="/welcome">
          <div className={s.logo}>
            <img src={logo} alt="logo" width={50} />
            <span className="logo_name">GraphiQL</span>
          </div>
        </Link>

        <div className={s.menu}>
          <nav
            className={`${s.navigation} ${openMenu ? s.active : ''}`}
            onClick={() => setOpenMenu(false)}
          >
            <div
              className={`${s.nav_list} ${openMenu ? s.active : ''} ${
                fixHeader ? s.scroll : ''
              }`}
            >
              {navLinks}
              {user ? <SignOut /> : ''}
            </div>
          </nav>
          <div className={s.control}>
            <SwitchTheme />
            <SelectLang />
          </div>
          <div
            className={s.burger}
            onClick={() => setOpenMenu(() => !openMenu)}
          >
            <div
              className={`${s.burger_logo} ${openMenu ? `${s.active}` : ''}`}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}
