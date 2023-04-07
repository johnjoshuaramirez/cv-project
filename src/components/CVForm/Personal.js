import React, { Component } from 'react';
import styles from './styles/Personal.module.css';

export default class Personal extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      const { firstname, lastname, address, website, email, number, about } = this.props.cv.personal;
      const { handlePersonalChange } = this.props
      return (
         <div className={styles.personal}>
            <h2>Personal Data</h2>
            <form className={styles.form}>
               <div className={styles.group}>
                  <input
                     className={styles.input}
                     name="firstname"
                     value={firstname}
                     onChange={handlePersonalChange}
                     placeholder="First Name"
                     type="text"
                     required>
                  </input>
                  <input
                     className={styles.input}
                     value={lastname}
                     onChange={handlePersonalChange}
                     name="lastname"
                     placeholder="Last Name"
                     type="text"
                     required>
                  </input>
               </div>
               <input
                  className={styles.input}
                  name="address"
                  value={address}
                  onChange={handlePersonalChange}
                  placeholder="Your Address"
                  type="text"
                  required>
               </input>
               <input
                  className={styles.input}
                  name="website"
                  value={website}
                  onChange={handlePersonalChange}
                  placeholder="Your Website"
                  type="text"
                  required>
               </input>
               <div className={styles.group}>
                  <input
                     className={styles.input}
                     name="email"
                     value={email}
                     onChange={handlePersonalChange}
                     placeholder="Your email"
                     type="text"
                     required>
                  </input>
                  <input
                     className={styles.input}
                     value={number}
                     onChange={handlePersonalChange}
                     name="number"
                     placeholder="Your number"
                     type="text"
                     required>
                  </input>
               </div>
               <textarea
                  className={styles.textarea}
                  value={about}
                  onChange={handlePersonalChange}
                  name="about"
                  placeholder="Tell us something about yourself!"
                  required>
               </textarea>
            </form>
         </div>
      );
   }
}