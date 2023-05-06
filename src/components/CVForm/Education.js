import styles from './styles/Education.module.css';
import { useContext } from 'react';
import { Context } from '../../Context';

export default function Education() {
   const { education, handleEducationChange } = useContext(Context)
   return (
      <div className={styles.card}>
         <h2>Educational Data</h2>
         <form className={styles.form}>
            <h3>College</h3>
            <div className={styles.group}>
               <input
                  className={styles.input}
                  name="college"
                  value={education.college}
                  onChange={handleEducationChange}
                  placeholder="Your College"
                  type="text">
               </input>
               <input
                  className={styles.input}
                  name="degree"
                  value={education.degree}
                  onChange={handleEducationChange}
                  placeholder="Your Degree"
                  type="text">
               </input>
               <input
                  className={styles.input}
                  name="collegeTimeframe"
                  value={education.collegeTimeframe}
                  onChange={handleEducationChange}
                  placeholder="Timeframe"
                  type="text">
               </input>
            </div>
            <h3>School</h3>
            <div className={styles.group}>
               <input
                  className={styles.input}
                  name="school"
                  value={education.school}
                  onChange={handleEducationChange}
                  placeholder="Your School"
                  type="text">
               </input>
               <input
                  className={styles.input}
                  name="diploma"
                  value={education.diploma}
                  onChange={handleEducationChange}
                  placeholder="Your Diploma"
                  type="text">
               </input>
               <input
                  className={styles.input}
                  name="schoolTimeframe"
                  value={education.schoolTimeframe}
                  onChange={handleEducationChange}
                  placeholder="Timeframe"
                  type="text">
               </input>
            </div>
         </form>
      </div>
   );
}
