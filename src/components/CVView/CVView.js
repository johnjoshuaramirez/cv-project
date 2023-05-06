import styles from './styles/CVView.module.css';
import Head from './Head';
import Aside from './Aside';
import Main from './Main';

export default function CVView() {
  return (
    <div className={styles.CVView}>
      <Head />
      <div className={styles.group}>
        <Aside />
        <Main />
      </div>
    </div>
  );
}
