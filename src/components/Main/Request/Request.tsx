import styles from './request.module.scss';
import 'allotment/dist/style.css';
import CodeMirror from '@uiw/react-codemirror';
import { bbedit } from '@uiw/codemirror-theme-bbedit';
import PlayIcon from '../../../assets/play.svg?react';
import PrettifyIcon from '../../../assets/prettify.svg?react';
import { requestTemplate } from './requestTemplate';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { updateTabContent } from '../../../store/reducers/tabSlice';
import { useEffect } from 'react';

function Request() {
  const dispatch = useAppDispatch();
  const tabs = useAppSelector((state) => state.tabs.tabs);
  const activeTab = useAppSelector((state) => state.tabs.activeTab);

  const handleNewTabContent = (content: string) => {
    dispatch(updateTabContent({ index: activeTab, requestContent: content }));
  };

  useEffect(() => {
    if (tabs.length === 1 && tabs[0].requestContent === '') {
      handleNewTabContent(requestTemplate);
    }
  }, [tabs, handleNewTabContent]);

  const prettifying = (request: string) => {
    let space = 0;
    let newSpace = 0;
    const regex = /({|}|\{[^{}]*})/g;
    const requestArr = request.split(regex).filter((el) => el);
    let newArr: string[] = [];
    for (let i = 0; i < requestArr.length; i++) {
      let elem = requestArr[i].trim();
      if (requestArr[i + 1] === '{') {
        elem = elem + ' {';
        requestArr.splice(i + 1, 1);
      }
      if (elem) {
        newArr.push(elem);
      }
    }
    newArr = newArr.map(el =>{
      space = newSpace;

        if(el.endsWith('{')){
          newSpace+=2
      return `${' '.repeat(space)}${el}`;
        }
        if (el.includes('}')){
          newSpace-=2
          newSpace = newSpace<0 ? 0: newSpace
      return `${' '.repeat(newSpace)}${el}`;
        }
        return `${' '.repeat(space)}${el}`;
    });
    
    dispatch(updateTabContent({ requestContent: newArr.join('\n') }));
  };

  return (
    <div className={`${styles.requestContainer} ${styles.container}`}>
      <span className={styles.title}>Request</span>
      <div className={styles.request}>
        <div className={styles.requestEditor}>
          <CodeMirror
            editable={true}
            value={tabs[activeTab]?.requestContent}
            theme={bbedit}
            onChange={handleNewTabContent}
          />
        </div>
        <div className={styles.requestButtons}>
          <button title="Execute Query">
            <PlayIcon className={styles.icon} />
          </button>
          <button title="Prettify Query">
            <PrettifyIcon
              className={styles.icon}
              onClick={() => prettifying(tabs[0].requestContent)}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Request;
