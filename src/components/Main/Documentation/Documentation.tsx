import { useEffect, useRef, useState } from 'react';
import styles from './documentation..module.scss';
import { getSchemaTypes } from '@/utils/graphqlSchema';
import { IField, ISchemaObject, ISchemaType } from '@/types/general';
import { getFieldType } from '@/utils/getFieldType';
import { useAppSelector } from '@/store/store';

function Documentation() {
  const [schemaObject, setSchemaObject] = useState<ISchemaObject | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);
  const types = useRef<ISchemaType[]>([]);
  const tabs = useAppSelector((state) => state.tabs.tabs);
  const activeTab = useAppSelector((state) => state.tabs.activeTab);

  useEffect(() => {
    async function getAllTypes() {
      setIsLoading(true);
      if (tabs[activeTab].url === '') {
        return;
      }
      types.current = await getSchemaTypes(tabs[activeTab].url);

      const rootType = types.current!.find(
        (type) => type.name === 'Query' || type.name === 'Root'
      );

      const mutationType = types.current!.find(
        (type) => type.name === 'Mutation'
      );

      const subscriptionType = types.current!.find(
        (type) => type.name === 'Subscription'
      );

      setSchemaObject((prevSchemaObject) => ({
        ...prevSchemaObject!,
        queries: rootType,
        mutations: mutationType,
        subscriptions: subscriptionType,
      }));
      setIsLoading(false);
    }
    getAllTypes();
  }, [tabs, activeTab]);

  return (
    <div className={`${styles.docDescription} ${styles.container}`}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <span className={styles.title}>Documentation</span>
          <p className={styles.docText}>
            A GraphQL schema provides a root type for each kind of operation.
          </p>
          {schemaObject && schemaObject.queries && (
            <div>
              <p className={styles.docText}>QUERIES</p>
              <ul>
                {schemaObject.queries.fields.map((field: IField) => (
                  <li key={field.name} className={styles.fieldBlock}>
                    <span className={styles.field}>{field.name}</span>
                    <span>: </span>
                    <span className={styles.type}>
                      {getFieldType(field.type)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {schemaObject && schemaObject.mutations && (
            <div>
              <p className={styles.docText}>MUTATIONS</p>
              <ul>
                {schemaObject.mutations.fields.map((field: IField) => (
                  <li key={field.name} className={styles.fieldBlock}>
                    <span className={styles.field}>{field.name}</span>
                    <span>: </span>
                    <span className={styles.type}>
                      {getFieldType(field.type)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {schemaObject && schemaObject.subscriptions && (
            <div>
              <p className={styles.docText}>SUBSCRIPTIONS</p>
              <ul>
                {schemaObject.subscriptions.fields.map((field: IField) => (
                  <li key={field.name} className={styles.fieldBlock}>
                    <span className={styles.field}>{field.name}</span>
                    <span>: </span>
                    <span className={styles.type}>
                      {getFieldType(field.type)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Documentation;
