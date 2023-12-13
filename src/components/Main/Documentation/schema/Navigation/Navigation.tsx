import { IDataItem } from '@/types/general';
import styles from './navigation.module.scss';

interface INavigationProps {
  fields: IDataItem[];
  setData: React.Dispatch<React.SetStateAction<IDataItem[]>>;
}

function Navigation({ fields, setData }: INavigationProps) {
  const nav = ['Documentation', ...fields.map((field) => field.name)];

  const handleClick = (name: string) => {
    const index = nav.indexOf(name) - 1;
    setData((prev) => prev.slice(0, index + 1));
  };

  return (
    <div className={styles.fieldBlock}>
      {nav.map((navItem, index) => {
        const isLastItem = index === nav.length - 1;
        const capitalizedNavItem =
          navItem.charAt(0).toUpperCase() + navItem.slice(1);

        return (
          <div
            key={`${navItem}-${index}`}
            onClick={() => handleClick(navItem)}
            className={
              index === nav.length - 1 ? styles.active : styles.inactive
            }
          >
            <span>{capitalizedNavItem}</span> {isLastItem ? '' : '→'}
          </div>
        );
      })}
    </div>
  );
}

export default Navigation;
