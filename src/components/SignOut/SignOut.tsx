import { signOut } from 'firebase/auth';
import { auth } from './../../utils/firebase';
import { useDispatch } from 'react-redux';
import { removeUser } from '@/store/reducers/userSlice';

export default function SignOut() {
  const dispatch = useDispatch();
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        throw Error(error);
      });
  };

  return (
    <div className="link" onClick={handleClick}>
      Sing Out
    </div>
  );
}
