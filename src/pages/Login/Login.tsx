// Для аутентификации - Firebase с методом входа по электронной почте и паролю
// Должна быть реализована проверка на стороне клиента (надежность адреса электронной почты и пароля — минимум 8 символов, минимум одна буква, одна цифра, один специальный символ, должны поддерживаться пароли Unicode)
// При успешном входе пользователь должен быть перенаправлен на главную страницу.
// Если пользователь уже вошел в систему и пытается добраться до этих маршрутов, он должен быть перенаправлен на главную страницу.
// Кнопки «Вход/Регистрация/Выход» находятся везде, где должно быть 10 пунктов.
// Реализована валидация на стороне клиента 20 баллов
// При успешном входе пользователь перенаправляется на Главную страницу 10 баллов
// Если пользователь уже авторизовался и пытается добраться до этих маршрутов, он должен быть перенаправлен на Главную страницу 10 пунктов

export default function Login() {
  return <div>Login</div>;
}