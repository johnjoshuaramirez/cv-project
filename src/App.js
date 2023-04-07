import React, { Component } from 'react';
import styles from './App.module.css';
import CVForm from './components/CVForm/CVForm';
import CVView from './components/CVView/CVView';
import uniqid from 'uniqid';
import { autofill } from './utils/autofill';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      personal: {
        firstname: '',
        lastname: '',
        address: '',
        website: '',
        email: '',
        number: '',
        about: ''
      },

      education: {
        college: '',
        degree: '',
        collegeTimeframe: '',
        school: '',
        diploma: '',
        schoolTimeframe: ''
      },

      skills: [
        { id: uniqid(), skill: '', },
        { id: uniqid(), skill: '', },
        { id: uniqid(), skill: '', }
      ],

      experiences: [
        {
          id: uniqid(),
          company: '',
          position: '',
          tasks: '',
          start: '',
          end: ''
        },
      ]
    }
  }

  handleAutofill = () => {
    this.setState(autofill);
  }

  handlePersonalChange = e => {
    this.setState(prevState => ({
      personal: {
        ...prevState.personal,
        [e.target.name]: e.target.value
      }
    }));
  }

  handleEducationChange = e => {
    this.setState(prevState => ({
      education: {
        ...prevState.education,
        [e.target.name]: e.target.value
      }
    }));
  }

  handleAddExperience = () => {
    this.setState(prevState => ({
      experiences: [
        ...prevState.experiences,
        {
          id: uniqid(),
          company: '',
          position: '',
          tasks: '',
          start: '',
          end: ''
        },
      ]
    }));
  }

  handleRemoveExperience = e => {
    this.setState(prevState => ({
      experiences: prevState.experiences.filter(experience => experience.id !== e.target.id)
    }))
  }

  handleExperienceChange = e => {
    this.setState(prevState => {
      const newExperiences = [...prevState.experiences];
      const index = newExperiences.findIndex(experience => experience.id === e.target.id);
      newExperiences[index] = { ...newExperiences[index], [e.target.name]: e.target.value };
      return { experiences: newExperiences }
    });
  }

  handleSkillChange = e => {
    this.setState(prevState => {
      const newSkills = [...prevState.skills];
      const index = newSkills.findIndex(skill => skill.id === e.target.id);
      newSkills[index] = { ...newSkills[index], skill: e.target.value };
      return { skills: newSkills }
    })
  }

  handleAddSkill = () => {
    this.setState(prevState => ({
      skills: [
        ...prevState.skills,
        { id: uniqid(), skill: '' }
      ]
    }));
  }

  handleRemoveSkill = e => {
    this.setState(prevState => ({
      skills: prevState.skills.filter(skill => skill.id !== e.target.id)
    }))
  }

  render() {
    console.log(this.state.experiences)
    return (
      <div className={styles.body}>
        <CVForm
          cv={this.state}
          handleAutofill={this.handleAutofill}
          handlePersonalChange={this.handlePersonalChange}
          handleEducationChange={this.handleEducationChange}
          handleSkillChange={this.handleSkillChange}
          handleAddSkill={this.handleAddSkill}
          handleRemoveSkill={this.handleRemoveSkill}
          handleAddExperience={this.handleAddExperience}
          handleExperienceChange={this.handleExperienceChange}
          handleRemoveExperience={this.handleRemoveExperience}
        />
        <CVView
          cv={this.state}
        />
      </div>
    );
  }
}