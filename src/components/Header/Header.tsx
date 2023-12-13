//  должен быть sticky. Момент, когда он становится sticky (если на странице есть прокрутка), следует анимировать: можно изменить цвет или уменьшить его высоту. Анимированный липкий заголовок
// Ссылка на страницу приветствия
// Элемент управления, позволяющий пользователю переключать язык
// Кнопка «Выход» — выход пользователя из системы.

import { Link } from 'react-router-dom';
import s from './header.module.scss';
import SwitchTheme from '../SwitchTheme/SwitchTheme';
import SelectLang from '../SelectLang/SelectLang';
import logo from '@assets/logo.svg';
import SignOut from '../SignOut/SignOut';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase';
import { useEffect, useState } from 'react';
import AuthTrue from '../signButtons/AuthTrue';
import AuthFalse from '../signButtons/AuthFalse';

export default function Header() {
  const [user] = useAuthState(auth);
  const [fixHeader, setFixHeader] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const scroll = () => {
      const top = window.scrollY;
      if (!fixHeader && !!top) setFixHeader(true);
      if (fixHeader && !top) setFixHeader(false);
    };
    window.addEventListener('scroll', scroll);
    return () => removeEventListener('scroll', scroll);
  });

  return (
    <header className={`${fixHeader ? s.scroll : ''}`}>
      <div className={`${s.header} conteiner ${fixHeader ? s.scroll : ''}`}>
        <Link to="/welcome">
          <div className={s.logo}>
            <img src={logo} alt="logo" width={50} />
            <span className="logo_name">GraphiQL</span>
          </div>
        </Link>
        <nav className={s.navigation}>
          {user ? (
            <>
              <AuthTrue />
              <SignOut />
            </>
          ) : (
            <AuthFalse />
          )}
          <SwitchTheme />
          <SelectLang />
          <div className={s.wrap} onClick={() => setOpen(!open)}>
            <div className={`${s.burger} ${open ? `${s.active}` : ''}`}></div>
          </div>
        </nav>
      </div>
    </header>
  );
}
