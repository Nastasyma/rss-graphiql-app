import { useState } from 'react';
import styles from './Tabs.module.scss';
import CloseIcon from '../../../assets/close.svg?react';

function Tabs() {
  const [tabCount, setTabCount] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleAddTab = () => {
    setTabCount(tabCount + 1);
  };

  const handleDeleteTab = (index: number) => {
    if (tabCount === 1) return;

    const newTabCount = tabCount - 1;
    let newActiveTab = activeTab;

    if (index === activeTab) {
      newActiveTab = index > 0 ? index - 1 : index + 1;
    } else if (index < activeTab) {
      newActiveTab = activeTab - 1;
    }

    setTabCount(newTabCount);
    setActiveTab(newActiveTab);
  };

  return (
    <div className={styles.container}>
      {[...Array(tabCount)].map((_, index) => (
        <div key={index} className={styles.tab}>
          <button
            className={`${styles.button} ${styles.tabButton} ${index === activeTab ? styles.active : ''}`}
            onClick={() => handleTabClick(index)}
          >
            New Tab
          </button>
          {index > 0 && (
            <button className={styles.closeButton} onClick={() => handleDeleteTab(index)}>
              <CloseIcon/>
            </button>
          )}
        </div>
      ))}
      <button className={`${styles.button} ${styles.add}`} onClick={handleAddTab}>+</button>
    </div>
  );
}

export default Tabs;
