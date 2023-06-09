import styles from './styles/Main.module.css';
import { useContext } from 'react';
import { Context } from '../../Context';

export default function Main() {
  const { personal, experiences } = useContext(Context);
  return (
    <div className={styles.main}>
      <div className={styles.profile}>
        <h3>Profile</h3>
        <p>{personal.about}</p>
      </div>
      <div className={styles.experience}>
        <h3>Work Experience</h3>
        {experiences.map(experience => (
          <div key={experience.id} className={styles.group}>
            <h4>{experience.position}</h4>
            <div className={styles.duration}>
              <h5>
                {experience.company} |{' '}
                <span>
                  {experience.start} - {experience.end}
                </span>
              </h5>
            </div>
            <p>{experience.tasks}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
