import React, { Component } from 'react';
import styles from './styles/CVView.module.css';
import Head from './Head';
import Aside from './Aside';
import Main from './Main';

export default class CVView extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className={styles.CVView}>
            <Head cv={this.props.cv} />
            <div className={styles.group}>
               <Aside cv={this.props.cv} />
               <Main cv={this.props.cv} />
            </div>
         </div>
      );
   }
}