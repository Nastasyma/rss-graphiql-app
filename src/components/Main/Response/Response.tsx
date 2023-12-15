import styles from './response.module.scss';
import 'allotment/dist/style.css';
import CodeMirror from '@uiw/react-codemirror';
import { bbedit } from '@uiw/codemirror-theme-bbedit';
import { useAppSelector } from '@/store/store';

function Response() {
  const activeTab = useAppSelector((store) => store.tabs.activeTab);
  const response = useAppSelector(
    (store) => store.tabs.tabs[activeTab].responseContent
  );
  return (
    <div className={`${styles.responseContainer} ${styles.container}`}>
      <span className={styles.title}>Response</span>
      <CodeMirror
        editable={false}
        readOnly={true}
        theme={bbedit}
        value={response}
      />
    </div>
  );
}

export default Response;
