import React from 'react';
import classes from './AboutBlock.module.css';
import aboutimage01 from '../../assets/images/aboutimage01.jpg';

function AboutBlock() {
  return (
    <div className={classes['about-wrapper']}>
      <div className={`container ${classes['about-container']}`}>
        <img
          src={aboutimage01}
          alt="espresso machines"
          className={classes['about-image']}
        />
        <div className={classes['about-text']}>
          <h2>OUR GOALS</h2>
          <p>
            Aenean a lobortis lectus, aliquet commodo metus. Quisque venenatis
            et ante eu iaculis. Phasellus quis purus mi. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Mauris volutpat pretium porta. Mauris ac enim non elit efficitur
            egestas. Sed dignissim risus nisl, vel rhoncus erat ullamcorper ac.
            Duis eros neque, faucibus nec consequat sed, congue sed mi. Quisque
            lacinia lorem quis pharetra iaculis. Cras lorem lacus, blandit at
            ultricies quis, maximus ut purus. Curabitur diam magna, sodales eget
            velit et, fringilla lobortis risus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutBlock;
