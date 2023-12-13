import { useState } from 'react';
import Details from '../Details/Details';
import Navigation from '../Navigation/Navigation';
import { IDataItem, ISchemaType } from '@/types/general';
import DocList from '../DocList/DocList';
import styles from './schema.module.scss';

interface ISchemaProps {
  types: ISchemaType[];
}

function Schema({ types }: ISchemaProps) {
  const [fields, setFields] = useState<IDataItem[]>([]);
  const field = fields[fields.length - 1];
  // console.log('fields', fields);

  const filteredTypes = types
    .filter(
      (item) =>
        item.name === 'Query' ||
        item.name === 'Root' ||
        item.name === 'Mutation' ||
        item.name === 'Subscription'
    )
    .sort((a, b) => {
      if (a.name === 'Query' || a.name === 'Root') return -1;
      if (b.name === 'Query' || b.name === 'Root') return 1;
      if (a.name === 'Mutation') return -1;
      if (b.name === 'Mutation') return 1;
      return 0;
    });
  // console.log('filteredTypes', filteredTypes);

  const selectedField = filteredTypes
    .flatMap((item) => item.fields)
    .find((item) => item.name === field?.name);

  const selectedType = types.find((item) => item.name === String(field?.type));

  return (
    <div>
      {selectedType ? (
        <>
          <Navigation fields={fields} setData={setFields} />
          <Details
            field={selectedField}
            type={selectedType}
            setData={setFields}
          />
        </>
      ) : (
        <>
          <span className={styles.title}>Documentation</span>
          <p className={styles.docText}>
            A GraphQL schema provides a root type for each kind of operation.
          </p>
          {filteredTypes.map((item, index) => (
            <DocList
              key={`${item.name}-${index}`}
              title={item.name.toLocaleUpperCase()}
              data={item.fields}
              setData={setFields}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default Schema;
