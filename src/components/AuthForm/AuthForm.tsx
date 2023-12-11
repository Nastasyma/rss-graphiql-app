import { Link } from 'react-router-dom';
import { eye, mailIco, passwordIco } from './data/icons';
import s from './authForm.module.scss';
import { useEffect, useState } from 'react';
import { schema } from '../../utils/yup';
import { ErrorOption, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface IForm {
  email: string;
  password: string;
}

interface IProps {
  title: string;
  otherFormTitle: string;
  otherFormLink: string;
  authFunk: (email: string, password: string) => void;
  errorAuthMessage:
    | [
        name: 'email' | 'password' | 'root' | `root.${string}`,
        error: ErrorOption,
      ]
    | null;
}

export default function AuthForm({
  title,
  otherFormTitle,
  otherFormLink,
  authFunk,
  errorAuthMessage,
}: IProps) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isDirty, isValid },
  } = useForm<IForm>({
    mode: 'onChange',
    resolver: yupResolver<IForm>(schema),
  });

  useEffect(() => {
    if (errorAuthMessage) {
      setError(...errorAuthMessage);
    }
  }, [errorAuthMessage]);

  const submit: SubmitHandler<IForm> = async (data) => {
    const { email, password } = data;
    await authFunk(email, password);
  };

  return (
    <div className="conteiner">
      <form className={s.form} onSubmit={handleSubmit(submit)}>
        <h1 className={s.title}>{title}</h1>

        <div className={s.item}>
          <label htmlFor="email" className={s.item__name}>
            Email:
          </label>
          <div className={s.item__value}>
            <input
              className={s.input}
              type="email"
              id="email"
              defaultValue=""
              placeholder="Type your email"
              {...register('email')}
            />
            <div className={s.input_focus}></div>
            <div className={s.input_ico}>{mailIco}</div>
          </div>
          <div className={s.error_messege}>
            {errors.email ? errors.email.message || '' : ''}
          </div>
        </div>

        <div className={s.item}>
          <label htmlFor="password" className={s.item__name}>
            Password:
          </label>
          <div className={s.item__value}>
            <input
              className={s.input}
              type={showPassword ? 'text' : 'password'}
              id="password"
              defaultValue=""
              placeholder="Type your password"
              {...register('password')}
            />
            <div className={s.input_focus}></div>
            <div className={s.input_ico}>{passwordIco}</div>
            <div
              className={`${s.eye} ${showPassword ? '' : s.unactive}`}
              onClick={() => setShowPassword(!showPassword)}
            >
              {eye}
            </div>
          </div>
          <div className={s.error_messege}>
            {errors.password && errors.password.message
              ? errors.password.message
              : ''}
          </div>
        </div>
        <button
          type="submit"
          className={`link ${s.submit}`}
          disabled={!isDirty || !isValid}
        >
          {title}
        </button>
        <div className={s.other_form}>
          <div>
            <Link to={otherFormLink} className="simple_link">
              {otherFormTitle}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
