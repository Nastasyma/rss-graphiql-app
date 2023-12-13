import { IDataItem, ISchemaType } from '@/types/general';
import DocList from '../DocList/DocList';
import styles from './details.module.scss';

interface IDetailsProps {
  field: IDataItem | undefined;
  type: ISchemaType;
  setData: React.Dispatch<React.SetStateAction<IDataItem[]>>;
}

function Details({ field, type, setData }: IDetailsProps) {
  const { description, kind } = type;
  const types = type.fields || type.inputFields;
  const args = field && field.args;

  const renderDescription = () => {
    if (description || kind) {
      return (
        <div>
          {description && <div className={styles.docText}>DESCRIPTION</div>}
          {description && <div className={styles.docText}>{description}</div>}
          {kind && kind === 'SCALAR' && (
            <div className={styles.fieldBlock}>
              <span className={styles.field}>{kind.toLocaleLowerCase()}</span>
              <span> </span>
              <span className={styles.type}>{type.name}</span>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {renderDescription()}
      {types && <DocList data={types} setData={setData} title="TYPE DETAILS" />}
      {args && args.length > 0 && (
        <DocList data={args} setData={setData} title="ARGUMENTS" />
      )}
    </div>
  );
}

export default Details;
