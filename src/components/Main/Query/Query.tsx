import styles from './query.module.scss';
import ArrowIcon from '../../../assets/211687_down_arrow_icon.svg?react';
import 'allotment/dist/style.css';
import CodeMirror from '@uiw/react-codemirror';
import { bbedit } from '@uiw/codemirror-theme-bbedit';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store/store';
import { setQuerySectionSize } from '../../../store/reducers/editorSlice';

function Query() {
  const dispatch = useAppDispatch();
  const querySectionSize = useSelector(
    (state: RootState) => state.editor.querySectionSize
  );

  const handleArrowIconClick = () => {
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
            className={`${styles.queryButton} ${styles.queryButtonActive}`}
          >
            Variables
          </button>
          <button className={styles.queryButton}>Headers</button>
        </div>
        <button className={styles.arrowButton} onClick={handleArrowIconClick}>
          <ArrowIcon className={styles.arrowIcon} />
        </button>
      </div>
      <div className={styles.queryEditor}>
        <CodeMirror theme={bbedit} width="100%" editable={true} value={`{}`} />
      </div>
    </div>
  );
}

export default Query;
