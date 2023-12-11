import { useInView } from 'react-intersection-observer';
import s from './team-member.module.scss';
import { IWelcomeProps } from '../../../types/general';

export default function TeamMember({ name, description, uniqueKey }: IWelcomeProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  return (
    <div
      ref={ref}
      key={uniqueKey}
      className={`${s.memberBlock} ${s.fadeIn} ${inView ? s.visible : ''}`}
    >
      <div className={s.teamMember}>
        <div className={s.teamImageBlock}>
          <img
            className={s.teamImage}
            src={`./welcomePage/${name}.jpg`}
            alt={`${name}'s photo`}
          />
        </div>
        <div className={s.teamContent}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
