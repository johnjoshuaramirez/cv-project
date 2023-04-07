import React, { Component } from 'react'
import styles from './styles/Education.module.css';

export default class Education extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      const { college, degree, collegeTimeframe, school, diploma, schoolTimeframe } = this.props.cv.education;
      const { handleEducationChange } = this.props
      return (
         <div className={styles.card}>
            <h2>Educational Data</h2>
            <form className={styles.form}>
               <h3>College</h3>
               <div className={styles.group}>
                  <input
                     className={styles.input}
                     name="college"
                     value={college}
                     onChange={handleEducationChange}
                     placeholder="Your College"
                     type="text"
                     required>
                  </input>
                  <input
                     className={styles.input}
                     name="degree"
                     value={degree}
                     onChange={handleEducationChange}
                     placeholder="Your Degree"
                     type="text"
                     required>
                  </input>
                  <input
                     className={styles.input}
                     name="collegeTimeframe"
                     value={collegeTimeframe}
                     onChange={handleEducationChange}
                     placeholder="Timeframe"
                     type="text"
                     required>
                  </input>
               </div>
               <h3>School</h3>
               <div className={styles.group}>
                  <input
                     className={styles.input}
                     name="school"
                     value={school}
                     onChange={handleEducationChange}
                     placeholder="Your School"
                     type="text"
                     required>
                  </input>
                  <input
                     className={styles.input}
                     name="diploma"
                     value={diploma}
                     onChange={handleEducationChange}
                     placeholder="Your Diploma"
                     type="text"
                     required>
                  </input>
                  <input
                     className={styles.input}
                     name="schoolTimeframe"
                     value={schoolTimeframe}
                     onChange={handleEducationChange}
                     placeholder="Timeframe"
                     type="text"
                     required>
                  </input>
               </div>
            </form>
         </div>
      );
   }
}