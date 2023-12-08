import { useState } from 'react';
import styles from './Tabs.module.scss';

function Tabs() {
  const [tabCount, setTabCount] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleAddTab = () => {
    setTabCount(tabCount + 1);
  };

  return (
    <div className={styles.container}>
      {[...Array(tabCount)].map((_, index) => (
        <button
          key={index}
          className={`${styles.button} ${index === activeTab ? styles.active : ''}`}
          onClick={() => handleTabClick(index)}
        >
          New Tab
        </button>
      ))}
      <button className={`${styles.button} ${styles.add}`} onClick={handleAddTab}>+</button>
    </div>
  );
}

export default Tabs;
