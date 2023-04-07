import React, { Component } from 'react';
import styles from './styles/CVForm.module.css';
import General from './General';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';

export default class CVForm extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      const { cv, handlePersonalChange, handleEducationChange, handleAddSkill,
         handleRemoveSkill, handleSkillChange, handleAddExperience,
         handleExperienceChange, handleRemoveExperience, handleAutofill } = this.props;
      return (
         <div className={styles.CVForm}>
            <General handleAutofill={handleAutofill} />
            <Personal
               cv={cv}
               handlePersonalChange={handlePersonalChange}
            />
            <Education
               cv={cv}
               handlePersonalChange={handlePersonalChange}
               handleEducationChange={handleEducationChange}
            />
            <Experience
               cv={cv}
               handleAddSkill={handleAddSkill}
               handleRemoveSkill={handleRemoveSkill}
               handleSkillChange={handleSkillChange}
               handleAddExperience={handleAddExperience}
               handleExperienceChange={handleExperienceChange}
               handleRemoveExperience={handleRemoveExperience}
            />
         </div>
      );
   }
}