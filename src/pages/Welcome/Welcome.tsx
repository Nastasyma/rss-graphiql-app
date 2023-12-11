//Если пользователь не авторизован, страница должна содержать ссылку на страницу входа/регистрации.
// Если пользователь авторизован, страница должна содержать ссылку на Главную страницу.
// Приветственная страница должна содержать общую информацию о разработчиках, проекте и курсе. 10 баллов.
// В правом верхнем углу 2 кнопки: Войти и Зарегистрироваться 10 баллов.
// Если токен входа действителен и срок его действия не истек, кнопки «Войти» и «Зарегистрироваться» заменяются кнопкой «Главная страница» 10 баллов
// По истечении срока действия токена - пользователь должен быть автоматически перенаправлен на «Страницу приветствия» 10 баллов
// Нажатие кнопки «Войти/Зарегистрироваться» перенаправляет пользователя на маршрут с формой «Войти/Зарегистрироваться» 10 баллов
import WelcomeBlock from '../../components/welcome/welcome-block/WelcomeBlock';
import TeamBlock from '../../components/welcome/team-block/TeamBlock';
import ProjectBlock from '../../components/welcome/project-block/ProjectBlock';
import CourseBlock from '../../components/welcome/course-block/CourseBlock';

export default function Welcome() {
  return (
    <div>
      <WelcomeBlock />
      <TeamBlock />
      <ProjectBlock />
      <CourseBlock />
    </div>
  );
}
