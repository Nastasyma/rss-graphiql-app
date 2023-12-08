import { useInView } from 'react-intersection-observer';
import s from './team-member.module.scss';

interface IMemberProps {
  name: string;
  description: string;
}

export default function TeamMember({ name, description }: IMemberProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  return (
    <div
      ref={ref}
      className={`${s.memberBlock} ${s.fadeIn} ${inView ? s.visible : ''}`}
    >
      <div className={s.teamMember}>
        <div className={s.teamImageBlock}>
          <img
            className={s.teamImage}
            src={`./${name}.jpg`}
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
