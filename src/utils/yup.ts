import * as yup from 'yup';

export const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required('Email is required')
      .test(
        'contains-at-symbol',
        "Email address must contain an '@' symbol",
        (value) => {
          if (!value) return true;
          return value.includes('@');
        }
      )
      .test(
        'contains-domain',
        'Email address must contain a domain name (e.g., example.com)',
        (value) => {
          if (!value) return true;
          const trimmedValue = value.replace(/\s/g, '');
          const domainRegex = /^[^@\s]+@[^@\s]+.[^@\s]+$/;
          const isValidFormat = domainRegex.test(trimmedValue);
          const hasDomainName = trimmedValue.split('@')[1]?.length > 0;
          return isValidFormat && hasDomainName;
        }
      )
      .email('Invalid email address'),

    password: yup
      .string()
      .matches(/[0-9]/, 'Password must contain at least one digit')
      .matches(
        /[!@#$%^&*]/,
        'Password must contain at least one special character !@#$%^&*'
      )
      .matches(/[A-Z-a-z-А-Я-а-я]/, 'Password must contain at least one letter')
      .test(
        'password length',
        'Password must contain minimum 8 symbols',
        (value) => {
          if (value && value?.length >= 8) return true;
          return false;
        }
      )
      .required('Password is required'),
  })
  .required();
