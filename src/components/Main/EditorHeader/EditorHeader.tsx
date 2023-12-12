import { useState } from 'react';
import styles from './EditorHeader.module.scss';

function EditorHeader() {
  const [inputValue, setInputValue] = useState(
    'https://graphql-pokemon2.vercel.app'
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form
      className={styles.container}
      onSubmit={(event) => event.preventDefault()}
    >
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit">OK</button>
    </form>
  );
}
export default EditorHeader;
