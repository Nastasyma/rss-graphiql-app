import s from './selectLang.module.scss';
import arrow from '@/assets/211687_down_arrow_icon.svg';

const langs = ['RU', 'EN'];

export default function SelectLang() {
  return (
    <div className={s.lang}>
      <div className={s.value}>
        <span>RU</span>
        <span className={`${s.arrow}`}>
          <img src={arrow} width={10} alt="arrow" />
        </span>
      </div>
    </div>
  );
}
