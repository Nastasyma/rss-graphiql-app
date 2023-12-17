import s from './course-block.module.scss';

export default function CourseBlock() {
  return (
    <div className={s.courseBlock}>
      <h1 className={s.header}>RS School React Course</h1>
      <h3>Course – where learning meets innovation!</h3>
      <div className={s.courseFeatures}>
        <h2 className={s.featuresHeader}>What to Expect</h2>
        <ul className={s.featuresUl}>
          <li className={s.courseItem}>Practical Learning</li>
          <li className={s.courseItem}>Collaborative Environment</li>
          <li className={s.courseItem}>Cutting-edge Technologies</li>
          <li className={s.courseItem}>Project-based Approach</li>
          <li className={s.courseItem}>Mentorship</li>
          <li className={s.courseItem}>Portfolio Building</li>
        </ul>
      </div>
    </div>
  );
}
