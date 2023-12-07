import styles from './request.module.scss';
import 'allotment/dist/style.css';
import CodeMirror from '@uiw/react-codemirror';
import { bbedit } from '@uiw/codemirror-theme-bbedit';
import PlayIcon from '../../../assets/play.svg?react';
import PrettifyIcon from '../../../assets/prettify.svg?react';
import { requestTemplate } from './requestTemplate';

function Request() {
  return (
    <div className={`${styles.requestContainer} ${styles.container}`}>
      <span className={styles.title}>Request</span>
      <div className={styles.request}>
        <div className={styles.requestEditor}>
          <CodeMirror
            theme={bbedit}
            width="100%"
            height="100%"
            editable={true}
            value={requestTemplate}
          />
        </div>
        <div className={styles.requestButtons}>
          <button title="Execute Query">
            <PlayIcon className={styles.icon} />
          </button>
          <button title="Prettify Query">
            <PrettifyIcon className={styles.icon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Request;
