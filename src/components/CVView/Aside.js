import { useContext } from 'react';
import { Context } from '../../Context';
import styles from './styles/Aside.module.css';

export default function Aside() {
   const { personal, education, skills } = useContext(Context);
   return (
      <div className={styles.aside}>
         <div className={styles.contact}>
            <h3>Contact</h3>
            <div className={styles.group}>
               <p>{personal.website}</p>
               <p>{personal.email}</p>
               <p>{personal.number}</p>
               <p>{personal.address}</p>
            </div>
         </div>
         <div className={styles.education}>
            <h3>Education</h3>
            <div className={styles.group}>
               <h4>{education.college}</h4>
               <h5>{education.degree}</h5>
               <p>{education.collegeTimeframe}</p>
            </div>
            <div className={styles.group}>
               <h4>{education.school}</h4>
               <h5>{education.diploma}</h5>
               <p>{education.schoolTimeframe}</p>
            </div>
         </div>
         <div className={styles.skills}>
            <h3>Skills</h3>
            <ul>
               {skills.map((skill, index) => {
                  return <li key={index}>{skill.skill}</li>
               })}
            </ul>
         </div>
      </div>
   );
}