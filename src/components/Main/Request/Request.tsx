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
    let indentLevel = 0;
  const indentSize = 2;
    const requestArr = request
      .split(regex)
      .filter((el) => el)
      .map((line) => {
        const trimmedLine = line.trim();
  
        if (trimmedLine.endsWith('{')) {
          // Увеличиваем отступ для следующей строки
          let result = `${' '.repeat(indentLevel * indentSize)}${trimmedLine}\n`;
          indentLevel++;
          return result;
        } else if (trimmedLine.startsWith('}')) {
          // Уменьшаем отступ для текущей строки
          indentLevel--;
          return `${' '.repeat(indentLevel * indentSize)}${trimmedLine}\n`;
        } else {
          // Строки без изменения уровня отступа
          return `${' '.repeat(indentLevel * indentSize)}${trimmedLine}\n`;
        }
      })
      //   if (el.indexOf('{') !== el.lastIndexOf('{')) {
      //     const elArr = el.split('{').filter((el => el)).map((el) => {
      //       return `${el}{`;
      //     })
      //     return elArr
      //   } else if(el.indexOf('}') !== el.lastIndexOf('}') ){
      //     const elArr = el.split('}').map(el => {
      //       const trimEl =el.trim();
      //       console.log(trimEl);
      //       if (!trimEl){
      //         return '}'
      //       } else {
      //         return trimEl
      //       }
      //     })
      //     console.log(elArr);
      //     return elArr
      //   } else {
      //   return el
      //   }
      // })
      // .flat(1)
      // .map(el =>{
      //   space = newSpace;
      //   el = el.trim();
    
      //     if(el.endsWith('{')){
      //       newSpace+=2
      //   return `${' '.repeat(space)}${el}`;
      //     }
      //     if (el.includes('}')){
      //       newSpace-=2
      //   return `${' '.repeat(newSpace)}${el}`;
      //     }
      //     return `${' '.repeat(space)}${el}`;
      // });
        dispatch(updateTabContent({requestContent: requestArr.join(' ') }));
    console.log(requestArr);
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
