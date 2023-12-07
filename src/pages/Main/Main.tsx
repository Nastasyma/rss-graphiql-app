// приватная страница - нужно будет проверять на авторизацию и если не авторизован - делать перенаправление на welcome
// Должен быть header
// Редактор запросов/просмотрщик JSON. Редактор запросов должен поддерживать предварительное оформление. Любое стороннее решение/решение с открытым исходным кодом запрещено, вы должны реализовать его самостоятельно. Средство просмотра JSON должно быть доступно только для чтения, оно будет использоваться в разделе ответов.
// Раздел редактора переменных.
// Раздел редактора заголовков (если вы делаете запрос CORS, каждый добавленный заголовок должен поддерживаться серверной частью, учтите это).
// Раздел документации должен быть виден только тогда, когда приложение получает успешный ответ с определением схемы от API.
// Раздел ответов. Должен быть представлен одним и тем же компонентом редактора запросов/просмотра JSON. Следует только читать.
// Кнопка «Изменить конечную точку» — позволяет пользователю переключиться на произвольную конечную точку GraphQL.
// Функциональный редактор, позволяющий редактировать запросы и улучшать 60 точек.
// Проводник эксплуатационной документации, видимый только при успешном запросе SDL 50 баллов
// Раздел переменных, который можно отображать или скрывать, указанные переменные отправляются на сервер 30 баллов
// Раздел заголовка, который можно показать или скрыть, добавленные пользователем заголовки отправляются на сервер 20 баллов
// Раздел ответов с редактором, доступным только для чтения, в качестве средства просмотра JSON 40 баллов

import styles from './Main.module.scss';
import { Allotment, AllotmentHandle } from 'allotment';
import DocIcon from '../../assets/book.svg?react';
import PlayIcon from '../../assets/play.svg?react';
import PrettifyIcon from '../../assets/prettify.svg?react';
import ArrowIcon from '../../assets/211687_down_arrow_icon.svg?react';
import 'allotment/dist/style.css';
import { useRef, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { bbedit } from '@uiw/codemirror-theme-bbedit';

function MainPage() {
  const ref = useRef<AllotmentHandle>(null!);
  const [isVisible, setIsVisible] = useState(false);
  const [minSize, setMinSize] = useState(150);

  const handleDocIconClick = () => {
    setIsVisible(!isVisible);
  };

  const handleArrowIconClick = () => {
    if (minSize === 150) {
      setMinSize(50);
    } else {
      setMinSize(150);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <Allotment defaultSizes={[1, 3, 4, 4]} minSize={50}>
        <Allotment.Pane minSize={60} maxSize={60}>
          <div className={`${styles.docContainer} ${styles.container}`}>
            <button className={styles.docButton} onClick={handleDocIconClick}>
              <DocIcon className={styles.docIcon} />
            </button>
          </div>
        </Allotment.Pane>
        <Allotment.Pane visible={isVisible}>
          <div className={`${styles.docDescription} ${styles.container}`}>
            Documentation
          </div>
        </Allotment.Pane>
        <Allotment.Pane minSize={300}>
          <Allotment key={minSize} vertical defaultSizes={[100, 1]} ref={ref}>
            <Allotment.Pane minSize={50}>
              <div className={`${styles.requestContainer} ${styles.container}`}>
                Request
                <div className={styles.request}>
                  <div className={styles.requestEditor}>
                    <CodeMirror theme={bbedit} width="100%" editable={true} />
                  </div>
                  <div className={styles.requestButtons}>
                    <button>
                      <PlayIcon className={styles.icon} />
                    </button>
                    <button>
                      <PrettifyIcon className={styles.icon} />
                    </button>
                  </div>
                </div>
              </div>
            </Allotment.Pane>
            <Allotment.Pane minSize={minSize}>
              <div className={`${styles.queryContainer} ${styles.container}`}>
                <div className={styles.queryButtons}>
                  <div className={styles.queryButtonsTitle}>
                    <button className={`${styles.queryButton} ${styles.queryButtonActive}`}>Variables</button>
                    <button className={styles.queryButton}>Headers</button>
                  </div>
                  <button className={styles.arrowButton} onClick={handleArrowIconClick} >
                    <ArrowIcon className={styles.arrowIcon} />
                  </button>
                </div>
                <CodeMirror theme={bbedit} width="100%" editable={true} />
              </div>
            </Allotment.Pane>
          </Allotment>
        </Allotment.Pane>
        <Allotment.Pane minSize={50}>
          <div className={`${styles.responseContainer} ${styles.container}`}>
            Response
          </div>
        </Allotment.Pane>
      </Allotment>
    </div>
  );
}

export default MainPage;
