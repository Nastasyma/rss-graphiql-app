import { IDataItem } from '@/types/general';
import styles from './DocList.module.scss';

interface IDocListProps {
  data: IDataItem[];
  setData: React.Dispatch<React.SetStateAction<IDataItem[]>>;
  title: string;
}

function DocList({ data, setData, title }: IDocListProps) {
  const handleItemClick = (item: IDataItem) => {
    const newDataItem: IDataItem = {
      name: item.name,
      type: item.type?.name || item.type?.ofType?.name,
    } as IDataItem;
    setData((prevData: IDataItem[]) => [...prevData, newDataItem]);
  };

  return (
    <>
      <div className={styles.docText}>{title}</div>
      <ul>
        {data.map((dataItem) => {
          const { name } = dataItem;
          const type =
            dataItem.type?.name ||
            (dataItem.type?.ofType?.name && `[${dataItem.type.ofType?.name}]`);
          if (name && type) {
            return (
              <li
                key={name}
                onClick={() => handleItemClick(dataItem)}
                className={styles.fieldBlock}
              >
                <span className={styles.field}>{name}</span>
                <span>: </span>
                <span className={styles.type}>{type}</span>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}

export default DocList;
