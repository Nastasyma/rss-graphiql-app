import { useState } from 'react';
import LangItem from './langItem/LangItem';
import s from './selectLang.module.scss';
import arrow from '@/assets/211687_down_arrow_icon.svg';

const langs = ['ru', 'en'];

export default function SelectLang() {
  const [isLangOpen, setIsLangOpen] = useState(true);

  function handleLangClick () {
    setIsLangOpen((prev)=>!prev)
  }

  return (
    <div className={s.lang}>
      <div className={s.value} onClick={handleLangClick}>
        <img src="./header/en.png" alt="english language" className={s.flag}/>
        <span className={`${s.arrow}`}>
          <img src={arrow} width={10} alt="arrow" />
        </span>
      </div>
      {isLangOpen && <ul className={s.langList}>
          {langs.map((el, i)=> {
            return <LangItem lang={el} uniqueKey={i} key={i}/>
          })}
        </ul>}
    </div>
  );
}