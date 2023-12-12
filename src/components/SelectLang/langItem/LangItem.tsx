import s from './LangItem.module.scss';

export default function LangItem({
  lang,
  uniqueKey,
}: {
  lang: string;
  uniqueKey: number;
}) {
  return (
    <li className={s.langItem} key={uniqueKey}>
      <p className={s.langName}>{lang.toUpperCase()}</p>
      <img
        src={`./header/${lang}.png`}
        alt={`language ${lang}`}
        className={s.langFlag}
      />
    </li>
  );
}
