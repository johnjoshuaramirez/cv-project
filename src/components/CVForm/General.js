import React, { Component } from 'react';
import styles from './styles/General.module.css';

export default class General extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      const { handleAutofill } = this.props;
      return (
         <div className={styles.card}>
            <div className={styles.head}>
               <h1>CV Builder</h1>
               <div className={styles.buttons}>
                  <button className={styles.save}>Save</button>
                  <button className={styles.autofill} onClick={handleAutofill}>Autofill</button>
               </div>
            </div>
            <div className={styles.credit}>
               <h3>An application by</h3>
               <a href="https://github.com/johnjoshuaramirez" target="_blank">
                  <button className={styles.github}>johnjoshuaramirez</button>
               </a>
            </div>
         </div>
      );
   }
}