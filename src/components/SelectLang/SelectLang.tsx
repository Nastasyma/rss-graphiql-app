import React from 'react';
import s from './selectLang.module.scss';

const lang = ['RU', 'EN'];

export default function SelectLang() {
  return (
    <div className={s.lang}>
      <div className={s.value}>
        <span>RU</span>
        <span className={`${s.arrow}`}>
          <img src="./211687_down_arrow_icon.svg" width={10} alt="arrow" />
        </span>
      </div>
    </div>
  );
}
