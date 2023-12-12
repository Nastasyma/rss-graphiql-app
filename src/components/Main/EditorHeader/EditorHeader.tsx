import { useAppDispatch, useAppSelector } from '@/store/store';
import styles from './EditorHeader.module.scss';
import { updateTabContent } from '@/store/reducers/tabSlice';
import { useEffect } from 'react';

function EditorHeader() {
  const dispatch = useAppDispatch();
  const tabs = useAppSelector((state) => state.tabs.tabs);
  const activeTab = useAppSelector((state) => state.tabs.activeTab);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newURL = event.target.value;
    dispatch(
      updateTabContent({
        url: newURL,
      })
    );
  };


  useEffect(() => {
    if (tabs.length === 1 && tabs[0].url === '') {
      dispatch(
        updateTabContent({
          url: 'https://graphql-pokemon2.vercel.app',
        })
      );
    }
  }, [tabs, dispatch]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={tabs[activeTab]?.url}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default EditorHeader;
