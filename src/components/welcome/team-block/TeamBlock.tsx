import TeamMember from './TeamMember';
import s from './team-block.module.scss';

export default function TeamBlock() {

  return (
    <div className={s.team}>
      <h2 className={s.teamHeader}>Our team</h2>
      <TeamMember
        name="Irina"
        description="Her passion for aesthetics brings a touch of elegance to the user experience, turning every interaction into a visual journey."
      />
      <TeamMember
        name="Maria"
        description="Her empathetic approach creates a safe environment for users and
        every authentication will be a warm welcome, creating a sense of
        belonging."
      />
      <TeamMember
        name="Anastasia"
        description="Her insatiable curiosity allows her to travel across vast
        landscapes. GraphQL, turning data queries into exciting
        adventures."
      />
    </div>
  );
}