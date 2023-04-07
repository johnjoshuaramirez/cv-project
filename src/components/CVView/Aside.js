import React, { Component } from 'react';
import styles from './styles/Aside.module.css';

export default class Aside extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      const { website, email, number, address } = this.props.cv.personal;
      const { college, degree, collegeTimeframe, school, diploma, schoolTimeframe } = this.props.cv.education;
      const { skills } = this.props.cv;
      return (
         <div className={styles.aside}>
            <div className={styles.contact}>
               <h3>Contact</h3>
               <div className={styles.group}>
                  <p>{website}</p>
                  <p>{email}</p>
                  <p>{number}</p>
                  <p>{address}</p>
               </div>
            </div>
            <div className={styles.education}>
               <h3>Education</h3>
               <div className={styles.group}>
                  <h4>{college}</h4>
                  <h5>{degree}</h5>
                  <p>{collegeTimeframe}</p>
               </div>
               <div className={styles.group}>
                  <h4>{school}</h4>
                  <h5>{diploma}</h5>
                  <p>{schoolTimeframe}</p>
               </div>
            </div>
            <div className={styles.skills}>
               <h3>Skills</h3>
               <ul>
                  {skills.map((item, index) => {
                     return <li key={index}>{item.skill}</li>
                  })}
               </ul>
            </div>
         </div>
      );
   }
}