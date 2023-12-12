import { useContext } from 'react';
import s from './switchTheme.module.scss';
import { ThemeContext } from '@/prividers/ThemeProvider';

export default function SwitchTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    if (!setTheme) return;
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <label id="switch" className={s.switch}>
      <input
        type="checkbox"
        id="slider"
        defaultChecked={theme === 'light' ? true : false}
        onChange={() => changeTheme()}
      />
      <span className={`${s.slider} ${s.round}`}></span>
    </label>
  );
}
