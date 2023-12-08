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

import styles from './main.module.scss';
import { Allotment, AllotmentHandle } from 'allotment';
import 'allotment/dist/style.css';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import DocSettings from '../../components/Main/DocSettings/DocSettings';
import Documentation from '../../components/Main/Documentation/Documentation';
import Request from '../../components/Main/Request/Request';
import Query from '../../components/Main/Query/Query';
import Response from '../../components/Main/Response/Response';
import EditorHeader from '../../components/Main/EditorHeader/EditorHeader';

function MainPage() {
  const ref = useRef<AllotmentHandle>(null!);
  const isDocsOpen = useSelector((state: RootState) => state.editor.isDocOpen);
  const querySectionSize = useSelector(
    (state: RootState) => state.editor.querySectionSize
  );

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Allotment vertical>
        <Allotment.Pane minSize={40} maxSize={40} preferredSize={'100%'}>
          <div >
            <button>New Tab</button>
          </div>
        </Allotment.Pane>
        <Allotment.Pane minSize={50} maxSize={50} preferredSize={'100%'}>
          <EditorHeader />
        </Allotment.Pane>
        <Allotment
          defaultSizes={isMobile ? [1, 1, 4, 6, 3] : [1, 1, 3, 4, 4]}
          minSize={50}
          vertical={isMobile}
        >
          <Allotment.Pane minSize={60} maxSize={60}>
            <DocSettings />
          </Allotment.Pane>
          <Allotment.Pane visible={isDocsOpen} minSize={200}>
            <Documentation />
          </Allotment.Pane>
          <Allotment.Pane minSize={300}>
            <Allotment
              key={querySectionSize}
              vertical
              defaultSizes={[100, 1]}
              ref={ref}
            >
              <Allotment.Pane minSize={50}>
                <Request />
              </Allotment.Pane>
              <Allotment.Pane minSize={querySectionSize}>
                <Query />
              </Allotment.Pane>
            </Allotment>
          </Allotment.Pane>
          <Allotment.Pane minSize={50}>
            <Response />
          </Allotment.Pane>
        </Allotment>
      </Allotment>
    </div>
  );
}

export default MainPage;
