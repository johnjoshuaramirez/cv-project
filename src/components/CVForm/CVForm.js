import styles from './styles/CVForm.module.css';
import General from './General';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';

export default function CVForm() {
  return (
    <div className={styles.CVForm}>
      <General />
      <Personal />
      <Education />
      <Experience />
    </div>
  );
}
