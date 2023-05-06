import styles from './styles/Head.module.css';
import { useContext } from 'react';
import { Context } from '../../Context';

export default function Head() {
   const { personal } = useContext(Context);
   return (
      <div className={styles.head}>
         <div className={styles.name}>
            <h1>{personal.firstname} {personal.lastname}</h1>
         </div>
         <div className={styles.position}>
            <h4>Senior Software Engineer</h4>
         </div>
      </div>
   );
}