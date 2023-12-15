import ProjectItem from './ProjectItem';
import s from './project-block.module.scss';

export default function ProjectBlock() {
  return (
    <div className={s.project}>
      <h2 className={s.header}>Our Project</h2>
      <div className={s.projectItems}>
        {items.map((el, i) => {
          return (
            <ProjectItem
              name={el.name}
              description={el.description}
              uniqueKey={i}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

const items = [
  {
    name: `Versatile GraphQL Support`,
    description:
      'Our app opens doors to a myriad of GraphQL endpoints, offering users the flexibility to connect and query diverse data sources effortlessly.',
  },
  {
    name: 'User-Centric Design',
    description:
      'Focused on creating an intuitive and visually pleasing experience, making GraphQL interactions enjoyable.',
  },
  {
    name: 'Secure Authentication',
    description:
      'Implementing Firebase, we ensure a secure authentication process, building a foundation of trust for every user.',
  },
  {
    name: 'Innovation Unleashed',
    description:
      'GraphiQL App represents a blend of cutting-edge technology and innovative design.',
  },
  {
    name: 'Collaborative Development',
    description:
      'Crafted by a dynamic team of developers—each contributing unique skills and perspectives—GraphiQL.',
  },
];
