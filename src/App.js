import { useState } from 'react';
import { Context } from './Context';
import { autofill } from './utils/autofill';
import uniqid from 'uniqid';
import styles from './App.module.css';
import CVForm from './components/CVForm/CVForm';
import CVView from './components/CVView/CVView';

export default function App() {
  const [personal, setPersonal] = useState({
    firstname: '',
    lastname: '',
    address: '',
    website: '',
    email: '',
    number: '',
    about: ''
  });

  const [education, setEducation] = useState({
    college: '',
    degree: '',
    collegeTimeframe: '',
    school: '',
    diploma: '',
    schoolTimeframe: ''
  });

  const [skills, setSkills] = useState([
    { id: uniqid(), skill: '' },
    { id: uniqid(), skill: '' },
    { id: uniqid(), skill: '' }
  ]);

  const [experiences, setExperiences] = useState([
    {
      id: uniqid(),
      company: '',
      position: '',
      tasks: '',
      start: '',
      end: ''
    }
  ]);

  function handleAutofill() {
    setPersonal(autofill.personal);
    setEducation(autofill.education);
    setExperiences(autofill.experiences);
    setSkills(autofill.skills);
  }

  function handlePersonalChange(e) {
    setPersonal({
      ...personal,
      [e.target.name]: e.target.value
    });
  }

  function handleEducationChange(e) {
    setEducation({
      ...education,
      [e.target.name]: e.target.value
    });
  }

  function handleAddExperience() {
    setExperiences([
      ...experiences,
      {
        id: uniqid(),
        company: '',
        position: '',
        tasks: '',
        start: '',
        end: ''
      }
    ]);
  }

  function handleRemoveExperience(e) {
    setExperiences(
      experiences.filter(experience => experience.id !== e.target.id)
    );
  }

  function handleExperienceChange(e) {
    const index = experiences.findIndex(
      experience => experience.id === e.target.id
    );
    const newExperiences = [...experiences];
    newExperiences[index] = {
      ...newExperiences[index],
      [e.target.name]: e.target.value
    };
    setExperiences(newExperiences);
  }

  function handleSkillChange(e) {
    const index = skills.findIndex(skill => skill.id === e.target.id);
    const newSkills = [...skills];
    newSkills[index] = { ...newSkills[index], skill: e.target.value };
    setSkills(newSkills);
  }

  function handleAddSkill() {
    setSkills([...skills, { id: uniqid(), skill: '' }]);
  }

  function handleRemoveSkill(e) {
    setSkills(skills.filter(skill => skill.id !== e.target.id));
  }

  const value = {
    handleAutofill,
    personal,
    handlePersonalChange,
    education,
    handleEducationChange,
    skills,
    handleSkillChange,
    handleAddSkill,
    handleRemoveSkill,
    experiences,
    handleExperienceChange,
    handleAddExperience,
    handleRemoveExperience,
  };

  return (
    <Context.Provider value={value}>
      <div className={styles.body}>
        <CVForm />
        <CVView />
      </div>
    </Context.Provider>
  );
}
