import styles from './tabs.module.scss';
import CloseIcon from '../../../assets/close.svg?react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import {
  addTab,
  deleteTab,
  setActiveTab,
} from '../../../store/reducers/tabSlice';

function Tabs() {
  const dispatch = useAppDispatch();
  const tabs = useAppSelector((state) => state.tabs.tabs);
  const activeTab = useAppSelector((state) => state.tabs.activeTab);

  const handleTabClick = (index: number) => {
    dispatch(setActiveTab(index));
  };

  const handleAddTab = () => {
    dispatch(addTab(''));
  };

  const handleDeleteTab = (index: number) => {
    dispatch(deleteTab(index));
  };

  // const handleDeleteTab = (index: number) => {
  //   if (tabCount === 1) return;

  //   const newTabCount = tabCount - 1;
  //   let newActiveTab = activeTab;

  //   if (index === activeTab) {
  //     newActiveTab = index > 0 ? index - 1 : index + 1;
  //   } else if (index < activeTab) {
  //     newActiveTab = activeTab - 1;
  //   }

  //   setTabCount(newTabCount);
  //   setActiveTab(newActiveTab);
  // };

  return (
    <div className={styles.container}>
      {tabs.map((_, index) => (
        <div key={index} className={styles.tab}>
          <button
            className={`${styles.button} ${styles.tabButton} ${
              index === activeTab ? styles.active : ''
            }`}
            onClick={() => handleTabClick(index)}
          >
            New Tab
          </button>
          {index > 0 && (
            <button
              className={styles.closeButton}
              onClick={() => handleDeleteTab(index)}
              title="Close tab"
            >
              <CloseIcon />
            </button>
          )}
        </div>
      ))}
      <button
        className={`${styles.button} ${styles.add}`}
        onClick={handleAddTab}
        title="Add tab"
      >
        +
      </button>
    </div>
  );
}

export default Tabs;
