import React from 'react';
import s from './switchTheme.module.scss';

export default function SwitchTheme() {
  return (
    <label id="switch" className={s.switch}>
      <input type="checkbox" id="slider" />
      <span className={`${s.slider} ${s.round}`}></span>
    </label>
  );
}
