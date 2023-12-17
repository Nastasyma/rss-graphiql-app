// Для аутентификации - Firebase с методом входа по электронной почте и паролю
// Должна быть реализована проверка на стороне клиента (надежность адреса электронной почты и пароля — минимум 8 символов, минимум одна буква, одна цифра, один специальный символ, должны поддерживаться пароли Unicode)
// При успешном входе пользователь должен быть перенаправлен на главную страницу.
// Если пользователь уже вошел в систему и пытается добраться до этих маршрутов, он должен быть перенаправлен на главную страницу.
// Кнопки «Вход/Регистрация/Выход» находятся везде, где должно быть 10 пунктов.
// Реализована валидация на стороне клиента 20 баллов
// При успешном входе пользователь перенаправляется на Главную страницу 10 баллов
// Если пользователь уже авторизовался и пытается добраться до этих маршрутов, он должен быть перенаправлен на Главную страницу 10 пунктов

import { useState } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ErrorOption } from 'react-hook-form';
import { auth } from '../../utils/firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/reducers/userSlice';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Login() {
  const [errorAuthMessage, setErrorAuthMessage] = useState<
    | [
        name: 'email' | 'password' | 'root' | `root.${string}`,
        error: ErrorOption,
      ]
    | null
  >(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  const login = async (email: string, password: string) => {
    setErrorAuthMessage(() => null);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUser(user.email));
        navigate('/');
      })
      .catch((error) => {
        if (error.code === 'auth/too-many-requests') {
          setErrorAuthMessage(() => [
            'email',
            {
              message: `${error.message}`,
              type: 'custom',
            },
          ]);
        } else if (error.code === 'auth/invalid-credential') {
          setErrorAuthMessage(() => [
            'email',
            {
              message: `Please check the entered email or password.`,
              type: 'custom',
            },
          ]);
        } else {
          throw Error(error);
        }
      });
  };

  return user ? (
    <Navigate to="/" replace />
  ) : (
    <AuthForm
      title="Login"
      otherFormTitle="Or Sign Up Using"
      otherFormLink="/register"
      authFunk={login}
      errorAuthMessage={errorAuthMessage}
    />
  );
}
