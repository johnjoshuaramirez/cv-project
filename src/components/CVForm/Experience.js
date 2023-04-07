import React, { Component } from 'react';
import styles from './styles/Experience.module.css';
import { skillsPlaceholder } from '../../utils/skillsPlaceholder';

export default class Experience extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      const { cv: { skills, experiences }, handleAddSkill, handleRemoveSkill,
         handleSkillChange, handleAddExperience, handleExperienceChange,
         handleRemoveExperience } = this.props;
      return (
         <div className={styles.card}>
            <h2>Practical Experience</h2>
            <form className={styles.form}>

               {experiences.map((item, index) => (
                  <div key={item.id} className={styles.experience}>
                     <div className={styles.group}>
                        <h3>Work Experience #{index + 1}</h3>         
                        {experiences.length > 1 &&
                           <button
                              id={item.id}
                              className={styles.remove}
                              onClick={handleRemoveExperience}
                              type="button">×
                           </button>
                        }
                     </div>
                     <input
                        id={item.id}
                        className={styles.input}
                        name="company"
                        value={item.company}
                        onChange={handleExperienceChange}
                        placeholder="Company"
                        type="text">
                     </input>
                     <input
                        id={item.id}
                        className={styles.input}
                        name="position"
                        value={item.position}
                        onChange={handleExperienceChange}
                        placeholder="Your Position"
                        type="text">
                     </input>
                     <textarea
                        id={item.id}
                        className={styles.textarea}
                        name="tasks"
                        value={item.tasks}
                        onChange={handleExperienceChange}
                        placeholder="Your Occupation, Daily Tasks and Workfield">
                     </textarea>
                     <input
                        id={item.id}
                        className={styles.input}
                        name="start"
                        value={item.start}
                        onChange={handleExperienceChange}
                        placeholder="Start Date of Employment">
                     </input>
                     <input
                        id={item.id}
                        className={styles.input}
                        name="end"
                        value={item.end}
                        onChange={handleExperienceChange}
                        placeholder="End Date of Employment"
                        type="text">
                     </input>
                  </div>
               ))}
               {experiences.length < 3 &&
                  <button
                     className={styles.new}
                     onClick={handleAddExperience}
                     type="button">
                     +
                  </button>}
               <h3>Skills & Techonologies</h3>
               <div className={styles.skills}>
                  {skills.map((item, index) => (
                     <div key={item.id} className={styles.group}>
                        <input
                           id={item.id}
                           className={styles.input}
                           value={item.skill}
                           onChange={handleSkillChange}
                           placeholder={skillsPlaceholder[index]}>
                        </input>
                        {skills.length > 1 &&
                           <button
                              id={item.id}
                              className={styles.remove}
                              onClick={handleRemoveSkill}
                              type="button">
                              ×
                           </button>
                        }
                     </div>
                  ))}
               </div>
               {skills.length < 9 &&
                  <button
                     className={styles.new}
                     onClick={handleAddSkill}
                     type="button">
                     +
                  </button>
               }
            </form>
         </div>
      );
   }
}