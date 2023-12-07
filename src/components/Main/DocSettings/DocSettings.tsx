import styles from './DocSettings.module.scss';
import DocIcon from '../../../assets/book.svg?react';
import { setDocIsOpen } from '../../../store/reducers/editorSlice';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store/store';

function DocSettings() {
  const dispatch = useAppDispatch();
  const isOpen = useSelector((state: RootState) => state.editor.isDocOpen);
  const handleDocIconClick = () => {
    dispatch(setDocIsOpen({ isDocOpen: !isOpen }));
  };

  return (
    <div className={`${styles.docContainer} ${styles.container}`}>
      <button
        className={styles.docButton}
        onClick={handleDocIconClick}
        title="Show Documentation Explorer"
      >
        <DocIcon className={styles.docIcon} />
      </button>
    </div>
  );
}

export default DocSettings;
