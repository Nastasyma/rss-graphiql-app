import styles from './response.module.scss';

function Response() {
  return (
    <div className={`${styles.responseContainer} ${styles.container}`}>
    <span className={styles.title}>Response</span>
  </div>
  )
}

export default Response