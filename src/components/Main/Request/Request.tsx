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
import { prettifying } from '@/utils/prettifying';
import { setResponse } from '@/store/reducers/responseSlice';

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

  const onPrettifyClick = (request:string) => {
    const response = prettifying(request)
    dispatch(updateTabContent({ index: activeTab, requestContent: response }));
  }

  const makeRequest = (url:string, query:string, variables?:string, headers?:string) => {
    console.log(url);
    console.log(query);
    const requestBody = {
      query,
      variables: { first: 1 },
    };
    return fetch(url, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then((res)=>res.json()).catch((err) => console.error(err))
  }
  
  const onPlayClick = async (url:string, query:string) => {
    const res = await makeRequest(url, query)
    dispatch(setResponse(JSON.stringify(res, null, 2)))
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
            <PlayIcon className={styles.icon} onClick={()=>{onPlayClick(tabs[activeTab].url, tabs[activeTab].requestContent)}}/>
          </button>
          <button title="Prettify Query">
            <PrettifyIcon
              className={styles.icon}
              onClick={() => onPrettifyClick(tabs[activeTab]?.requestContent)}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Request;
