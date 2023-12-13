import { useEffect, useRef, useState } from 'react';
import LangItem from './langItem/LangItem';
import s from './selectLang.module.scss';
import arrow from '@/assets/211687_down_arrow_icon.svg';
import { useAppSelector } from '@/store/store';
import ru from '/header/ru.png';
import en from '/header/en.png';

const langs = [
  { lang: 'ru', img: ru },
  { lang: 'en', img: en },
];

export default function SelectLang() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const handleLangClick = () => {
    setIsLangOpen((prev) => !prev);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      langRef.current &&
      event.target instanceof Node &&
      !langRef.current.contains(event.target)
    ) {
      setIsLangOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const lang = useAppSelector((state) => state.project.lang);

  return (
    <div className={s.lang} ref={langRef}>
      <div className={s.value} onClick={handleLangClick}>
        {lang === 'ru' ? (
          <img src={ru} alt={`russian language`} className={s.flag} />
        ) : (
          <img src={en} alt={`english language`} className={s.flag} />
        )}

        <span className={`${s.arrow}`}>
          <img src={arrow} width={10} alt="arrow" />
        </span>
      </div>
      {isLangOpen && (
        <ul className={s.langList}>
          {langs.map((el, i) => {
            return (
              <LangItem
                lang={el.lang}
                uniqueKey={i}
                setIsLangOpen={setIsLangOpen}
                img={el.img}
                key={i}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
