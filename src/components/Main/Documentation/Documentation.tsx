import { useEffect, useRef, useState } from 'react';
import styles from './documentation..module.scss';
import { getSchemaTypes } from '@/utils/graphqlSchema';
import { IField, ISchemaObject, ISchemaType } from '@/types/general';
import { getFieldType } from '@/utils/getFieldType';

function Documentation() {
  const [schemaObject, setSchemaObject] = useState<ISchemaObject | undefined>(
    undefined
  );
  const types = useRef<ISchemaType[]>([]);

  useEffect(() => {
    async function getAllTypes() {
      types.current = await getSchemaTypes();

      const rootType = types.current!.find(
        (type) => type.name === 'Query' || type.name === 'Root'
      );

      const mutationType = types.current!.find(
        (type) => type.name === 'Mutation'
      );

      const subscriptionType = types.current!.find(
        (type) =>
          type.name === 'Subscription'
      );

      setSchemaObject(prevSchemaObject => ({
        ...prevSchemaObject!,
        queries: rootType,
        mutations: mutationType,
        subscriptions: subscriptionType,
      }));
      console.log('types.current', types.current);
    }
    getAllTypes();
  }, []);
  console.log('schemaObject', schemaObject);

  return (
    <div className={`${styles.docDescription} ${styles.container}`}>
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
                <span className={styles.type}>{getFieldType(field.type)}</span>
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
                <span className={styles.type}>{getFieldType(field.type)}</span>
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
                <span className={styles.type}>{getFieldType(field.type)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Documentation;
