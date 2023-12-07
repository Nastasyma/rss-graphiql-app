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
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import DocSettings from '../../components/Main/DocSettings/DocSettings';
import Documentation from '../../components/Main/Documentation/Documentation';
import Request from '../../components/Main/Request/Request';
import Query from '../../components/Main/Query/Query';
import Response from '../../components/Main/Response/Response';

function MainPage() {
  const ref = useRef<AllotmentHandle>(null!);
  const isDocsOpen = useSelector((state: RootState) => state.editor.isDocOpen);
  const querySectionSize = useSelector(
    (state: RootState) => state.editor.querySectionSize
  );

  return (
    <div className={styles.mainContainer}>
      <Allotment defaultSizes={[1, 3, 4, 4]} minSize={50}>
        <Allotment.Pane minSize={60} maxSize={60}>
          <DocSettings />
        </Allotment.Pane>
        <Allotment.Pane visible={isDocsOpen}>
          <Documentation />
        </Allotment.Pane>
        <Allotment.Pane minSize={300}>
          <Allotment key={querySectionSize} vertical defaultSizes={[100, 1]} ref={ref}>
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
    </div>
  );
}

export default MainPage;
