import s from './not-found.module.scss';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className={`conteiner ${s.notFoundBlock}`}>
      <div>
        <img className={s.image} src="./not-found.png" alt="not found" />
        <h1 className={s.header}>Oops! That page can’t be found.</h1>
        <Link to="/" className={s.link}>
          Go to the home page →
        </Link>
      </div>
    </div>
  );
}
