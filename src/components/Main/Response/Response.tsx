import styles from './response.module.scss';
import 'allotment/dist/style.css';
import CodeMirror from '@uiw/react-codemirror';
import { useAppSelector } from '@/store/store';
import { tokyoNightDay } from '@uiw/codemirror-theme-tokyo-night-day';
import { langs } from '@uiw/codemirror-extensions-langs';

function Response() {
  const activeTab = useAppSelector((store) => store.tabs.activeTab);
  const response = useAppSelector(
    (store) => store.tabs.tabs[activeTab].responseContent
  );

  const basicSetup = {
    highlightActiveLine: false,
    foldGutter: false,
    lineNumbers: false,
  };

  return (
    <div className={`${styles.responseContainer} ${styles.container}`}>
      <span className={styles.title}>Response</span>
      <CodeMirror
        editable={false}
        readOnly={true}
        theme={tokyoNightDay}
        value={response}
        extensions={[langs.json()]}
        basicSetup={basicSetup}
      />
    </div>
  );
}

export default Response;
