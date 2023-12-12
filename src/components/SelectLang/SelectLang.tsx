import { useEffect, useRef, useState } from 'react';
import LangItem from './langItem/LangItem';
import s from './selectLang.module.scss';
import arrow from '@/assets/211687_down_arrow_icon.svg';
import {useAppSelector} from '@/store/store';

const langs = ['ru', 'en'];

export default function SelectLang() {
  const [isLangOpen, setIsLangOpen] = useState(true);
  const langRef = useRef<HTMLDivElement>(null)

  const handleLangClick = () => {
    setIsLangOpen((prev)=>!prev)
  }
  const handleClickOutside = (event: MouseEvent) => {
    if (langRef.current && event.target instanceof Node && !langRef.current.contains(event.target)) {
      setIsLangOpen(false);
    }
  };
  

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  })

  const lang = useAppSelector((state) => state.project.lang);


  return (
    <div className={s.lang} ref={langRef}>
      <div className={s.value} onClick={handleLangClick}>
        <img src={`./header/${lang}.png`} alt={`${lang} language`} className={s.flag}/>
        <span className={`${s.arrow}`}>
          <img src={arrow} width={10} alt="arrow" />
        </span>
      </div>
      {isLangOpen && <ul className={s.langList}>
          {langs.map((el, i)=> {
            return <LangItem lang={el} uniqueKey={i} setIsLangOpen={setIsLangOpen} key={i}/>
          })}
        </ul>}
    </div>
  );
}