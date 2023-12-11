import { useEffect, useRef, useState } from 'react';
import styles from './documentation..module.scss';
import { getSchemaTypes } from '@/utils/graphqlSchema';
import { Field, SchemaObject } from '@/types/general';

function Documentation() {
  const [schemaObject, setSchemaObject] = useState<SchemaObject | undefined>(
    undefined
  );
  const types = useRef(null);

  useEffect(() => {
    async function getAllTypes() {
      types.current = await getSchemaTypes();

      setSchemaObject(types.current![0]);
    }
    getAllTypes();
  }, []);
  console.log(schemaObject);

  return (
    <div className={`${styles.docDescription} ${styles.container}`}>
      <span className={styles.title}>Documentation</span>
      <p className={styles.docText}>
        A GraphQL schema provides a root type for each kind of operation.
      </p>
      {schemaObject && schemaObject.fields && (
        <>
          {schemaObject.fields.map((field: Field) => (
            <p key={field.name}>
              <span className={styles.field}>{field.name}</span>
              <span>: </span>
              <span className={styles.type}>
                {field.type.kind === 'LIST' ? `[${field.type.ofType.name}]` : field.type.name}
              </span>
            </p>
          ))}
        </>
      )}
    </div>
  );
}

export default Documentation;
