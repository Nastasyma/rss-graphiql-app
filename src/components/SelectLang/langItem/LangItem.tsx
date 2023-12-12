import { useAppDispatch } from '@/store/store';
import s from './LangItem.module.scss';
import { setLang } from '@/store/reducers/projectSettingsSlice';

interface IProps {
  lang: string;
  uniqueKey: number;
  setIsLangOpen: (value: React.SetStateAction<boolean>) => void;
}

export default function LangItem({
  lang,
  uniqueKey,
  setIsLangOpen,
}:IProps) {
  const dispatch = useAppDispatch();
  const handleLangItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    dispatch(setLang(event.currentTarget.id));
    setIsLangOpen(false);
  };
  return (
    <li
      className={s.langItem}
      key={uniqueKey}
      id={lang}
      onClick={(event) => {
        handleLangItemClick(event);
      }}
    >
      <p className={s.langName}>{lang.toUpperCase()}</p>
      <img
        src={`./header/${lang}.png`}
        alt={`${lang} language`}
        className={s.langFlag}
      />
    </li>
  );
}
