import React from 'react';
import AboutImage from './AboutImage';
import AboutBlock from './AboutBlock';
import classes from './AboutPage.module.css';
import aboutimage01 from '../../assets/images/aboutimage01.jpg';
import aboutimage02 from '../../assets/images/aboutimage02.jpg';
import aboutimage03 from '../../assets/images/aboutimage03.jpg';

function AboutPage() {
  return (
    <div className={classes.page}>
      <AboutImage />
      <AboutBlock
        image={aboutimage01}
        alt="espresso machines"
        orientation="left"
        backgroundColor="#0e070d"
        textColor="#fff"
      >
        <h2>OUR GOALS</h2>
        <p>
          Aenean a lobortis lectus, aliquet commodo metus. Quisque venenatis et
          ante eu iaculis. Phasellus quis purus mi. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Mauris
          volutpat pretium porta. Mauris ac enim non elit efficitur egestas. Sed
          dignissim risus nisl, vel rhoncus erat ullamcorper ac. Duis eros
          neque, faucibus nec consequat sed, congue sed mi. Quisque lacinia
          lorem quis pharetra iaculis. Cras lorem lacus, blandit at ultricies
          quis, maximus ut purus. Curabitur diam magna, sodales eget velit et,
          fringilla lobortis risus.
        </p>
      </AboutBlock>
      <AboutBlock
        image={aboutimage02}
        alt="a cup of coffee with a little note saying enjoy little things"
        orientation="right"
        backgroundColor="#ADB0A0"
        textColor="#0E070D"
      >
        <h2>WHO WE ARE</h2>
        <p>
          Aenean a lobortis lectus, aliquet commodo metus. Quisque venenatis et
          ante eu iaculis. Phasellus quis purus mi. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Mauris
          volutpat pretium porta. Mauris ac enim non elit efficitur egestas. Sed
          dignissim risus nisl, vel rhoncus erat ullamcorper ac. Duis eros
          neque, faucibus nec consequat sed, congue sed mi. Quisque lacinia
          lorem quis pharetra iaculis. Cras lorem lacus, blandit at ultricies
          quis, maximus ut purus. Curabitur diam magna, sodales eget velit et,
          fringilla lobortis risus.
        </p>
      </AboutBlock>
      <AboutBlock
        image={aboutimage03}
        alt="a blue neon coffee sign"
        orientation="left"
        backgroundColor="#e4e2dc"
        textColor="#0E070D"
      >
        <h2>OUR STORY</h2>
        <p>
          Aenean a lobortis lectus, aliquet commodo metus. Quisque venenatis et
          ante eu iaculis. Phasellus quis purus mi. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Mauris
          volutpat pretium porta. Mauris ac enim non elit efficitur egestas. Sed
          dignissim risus nisl, vel rhoncus erat ullamcorper ac. Duis eros
          neque, faucibus nec consequat sed, congue sed mi. Quisque lacinia
          lorem quis pharetra iaculis. Cras lorem lacus, blandit at ultricies
          quis, maximus ut purus. Curabitur diam magna, sodales eget velit et,
          fringilla lobortis risus.
        </p>
      </AboutBlock>
      <div className={classes['about-contact']}>
        <h2 className={classes['about-button']}>CONTACT US</h2>
      </div>
    </div>
  );
}

export default AboutPage;
