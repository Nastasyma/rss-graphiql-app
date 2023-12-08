import styles from './query.module.scss';
import ArrowIcon from '../../../assets/211687_down_arrow_icon.svg?react';
import 'allotment/dist/style.css';
import CodeMirror from '@uiw/react-codemirror';
import { bbedit } from '@uiw/codemirror-theme-bbedit';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import {
  setQueryIsOpen,
  setQuerySectionSize,
} from '../../../store/reducers/editorSlice';
import { useState } from 'react';

function Query() {
  const dispatch = useAppDispatch();
  const querySectionSize = useAppSelector(
    (state) => state.editor.querySectionSize
  );
  const isOpen = useAppSelector((state) => state.editor.isQueryOpen);
  const [isActive, setIsActive] = useState(0);

  const handleVariablesClick = () => {
    setIsActive(0);
  };

  const handleHeadersClick = () => {
    setIsActive(1);
  };

  const handleArrowIconClick = () => {
    dispatch(setQueryIsOpen({ isQueryOpen: !isOpen }));
    if (querySectionSize === 150) {
      dispatch(setQuerySectionSize({ querySectionSize: 50 }));
    } else {
      dispatch(setQuerySectionSize({ querySectionSize: 150 }));
    }
  };

  return (
    <div className={`${styles.queryContainer} ${styles.container}`}>
      <div className={styles.queryButtons}>
        <div className={styles.queryButtonsTitle}>
          <button
            className={`${styles.queryButton} ${
              isActive === 0 ? styles.queryButtonActive : ''
            }`}
            onClick={handleVariablesClick}
          >
            Variables
          </button>
          <button
            className={`${styles.queryButton} ${
              isActive === 1 ? styles.queryButtonActive : ''
            }`}
            onClick={handleHeadersClick}
          >
            Headers
          </button>
        </div>
        <button className={styles.arrowButton} onClick={handleArrowIconClick}>
          <ArrowIcon
            className={`${styles.arrowIcon} ${
              isOpen ? styles.rotatedArrow : ''
            }`}
          />
        </button>
      </div>
      <div className={styles.queryEditor}>
        <CodeMirror theme={bbedit} width="100%" editable={true} value={`{}`} />
      </div>
    </div>
  );
}

export default Query;
