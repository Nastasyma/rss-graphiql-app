import { Link } from 'react-router-dom';

export default function AuthFalse() {
  return (
    <>
      <Link className="link" to={'/login'}>
        Sign In
      </Link>
      <Link className="link" to={'/register'}>
        Sign Up
      </Link>
    </>
  );
}
