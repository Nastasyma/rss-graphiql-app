import styles from './documentation..module.scss';

function Documentation() {
  return (
    <div className={`${styles.docDescription} ${styles.container}`}>
      <span className={styles.title}>Documentation</span>
      <p className={styles.docText}>
        A GraphQL schema provides a root type for each kind of operation.
      </p>
      <p>query: Query</p>
    </div>
  );
}

export default Documentation;
