import styles from './Modal.module.scss';

interface ModalProps {
  errorMessage: string;
}
function Modal({ errorMessage }: ModalProps): JSX.Element {
  return (
      <div className={styles.modalWrapper}>
        <div>{errorMessage}</div>
      </div>
  );
}

export default Modal;