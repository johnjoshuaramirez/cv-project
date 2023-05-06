import styles from './styles/Experience.module.css';
import { skillsPlaceholder } from '../../utils/skillsPlaceholder';
import { useContext } from 'react';
import { Context } from '../../Context';

export default function Experience() {
  const {
    experiences,
    handleExperienceChange,
    handleAddExperience,
    handleRemoveExperience,
    skills,
    handleSkillChange,
    handleAddSkill,
    handleRemoveSkill
  } = useContext(Context);
  return (
    <div className={styles.card}>
      <h2>Practical Experience</h2>
      <form className={styles.form}>
        {experiences.map((experience, index) => (
          <div key={experience.id} className={styles.experience}>
            <div className={styles.group}>
              <h3>Work Experience #{index + 1}</h3>
              {experiences.length > 1 && (
                <button
                  id={experience.id}
                  className={styles.remove}
                  onClick={handleRemoveExperience}
                >
                  ×
                </button>
              )}
            </div>
            <input
              id={experience.id}
              className={styles.input}
              name="company"
              value={experience.company}
              onChange={handleExperienceChange}
              placeholder="Company"
              type="text"
            />
            <input
              id={experience.id}
              className={styles.input}
              name="position"
              value={experience.position}
              onChange={handleExperienceChange}
              placeholder="Your Position"
              type="text"
            />
            <textarea
              id={experience.id}
              className={styles.textarea}
              name="tasks"
              value={experience.tasks}
              onChange={handleExperienceChange}
              placeholder="Your Occupation, Daily Tasks and Workfield"
            ></textarea>
            <input
              id={experience.id}
              className={styles.input}
              name="start"
              value={experience.start}
              onChange={handleExperienceChange}
              placeholder="Start Date of Employment"
            />
            <input
              id={experience.id}
              className={styles.input}
              name="end"
              value={experience.end}
              onChange={handleExperienceChange}
              placeholder="End Date of Employment"
              type="text"
            />
          </div>
        ))}
        {experiences.length < 3 && (
          <button className={styles.new} onClick={handleAddExperience}>
            +
          </button>
        )}
        <h3>Skills & Techonologies</h3>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <div key={skill.id} className={styles.group}>
              <input
                id={skill.id}
                className={styles.input}
                value={skill.skill}
                onChange={handleSkillChange}
                placeholder={skillsPlaceholder[index]}
              />
              {skills.length > 1 && (
                <button
                  id={skill.id}
                  className={styles.remove}
                  onClick={handleRemoveSkill}
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>
        {skills.length < 9 && (
          <button className={styles.new} onClick={handleAddSkill}>
            +
          </button>
        )}
      </form>
    </div>
  );
}
