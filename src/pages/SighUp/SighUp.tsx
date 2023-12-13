// ? должны поддерживаться пароли Unicode
// Если пользователь уже вошел в систему и пытается добраться до этих маршрутов, он должен быть перенаправлен на главную страницу.
// При успешном входе пользователь перенаправляется на Главную страницу 10 баллов
// Если пользователь уже авторизовался и пытается добраться до этих маршрутов, он должен быть перенаправлен на Главную страницу 10 пунктов

import { useContext, useState } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/reducers/userSlice';
import { ErrorOption } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LangContext } from '@/providers/LangProvider';

export default function SighUp() {
  const [errorAuthMessage, setErrorAuthMessage] = useState<
    | [
        name: 'email' | 'password' | 'root' | `root.${string}`,
        error: ErrorOption,
      ]
    | null
  >(null);
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  const { lang } = useContext(LangContext);

  const sighUp = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setErrorAuthMessage(() => null);
        const user = userCredential.user;
        dispatch(setUser(user.email));
        console.log(user);
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          setErrorAuthMessage(() => [
            'email',
            {
              message: `${email}  is already in use by an existing user.`,
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
      title={lang === 'ru' ? 'Регистрация' : 'Sigh up'}
      otherFormTitle={lang === 'ru' ? 'или войти' : 'or sing in using'}
      otherFormLink="/login"
      authFunk={sighUp}
      errorAuthMessage={errorAuthMessage}
      lang={lang}
    />
  );
}
