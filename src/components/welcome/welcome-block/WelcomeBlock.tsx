import s from './welcome-block.module.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../utils/firebase';
import AuthTrue from '@/components/signButtons/AuthTrue';
import AuthFalse from '@/components/signButtons/AuthFalse';

export default function WelcomeBlock() {
  const [user] = useAuthState(auth);

  return (
    <div className={s.welcomeBlock}>
      <div className={s.imageBlock}>
        <img className={s.image} src="./welcomePage/earth.png" alt="night" />
      </div>
      <div className={s.welcomeContent}>
        <h1 className={`logo_name ${s.title}`}>
          GraphiQL
        </h1>
        <h2 className={s.header}>Application for your queries</h2>
        {user ? (
          <>
            <h3 className={s.header}>
              To use the application, go to HOME page
            </h3>
            <div className={s.nav}>
              <AuthTrue />
            </div>
          </>
        ) : (
          <>
            <h3 className={s.header}>
              To use the application, sign up or sign in to your account
            </h3>
            <div className={s.nav}>
              <AuthFalse />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

