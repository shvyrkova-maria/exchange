import * as styles from '../Loader/Loader.module.css';
export default function Loader() {
  return (
    <div className={styles.spinWrapper}>
      <div className={styles.spinner}></div>
    </div>
  );
}
