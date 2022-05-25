import React from 'react';
import AboutImage from './AboutImage';
import AboutBlock from './AboutBlock';
import classes from './AboutPage.module.css';

function AboutPage() {
  return (
    <div className={classes.page}>
      <AboutImage />
      <AboutBlock />
    </div>
  );
}

export default AboutPage;
