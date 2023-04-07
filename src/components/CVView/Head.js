import React, { Component } from 'react';
import styles from './styles/Head.module.css';

export default class Head extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      const { firstname, lastname } = this.props.cv.personal
      return (
         <div className={styles.head}>
            <div className={styles.name}>
               <h1>{firstname} {lastname}</h1>
            </div>
            <div className={styles.position}>
               <h4>Senior Software Engineer</h4>
            </div>
         </div>
      );
   }
}