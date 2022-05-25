import React from 'react';
import classes from './AboutImage.module.css';

function AboutImage() {
  return (
    <div className={classes['about-image']}>
      <div className="container">
        <div className={classes['about-text']}>
          <h2>ABOUT US</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            in nisi fringilla, maximus lacus a, vehicula sapien. Etiam venenatis
            ut arcu sit amet finibus. Donec varius magna ullamcorper nibh
            tristique tempor. Vivamus luctus elementum sem, porttitor tincidunt
            lacus feugiat a. Aliquam magna erat, gravida a nisi quis, vestibulum
            rutrum lorem. Aliquam vitae ex arcu. Ut non sapien enim. Nulla
            tristique mollis molestie. Curabitur pharetra placerat ante, vel
            tincidunt ligula lacinia in. Sed pulvinar purus vel leo accumsan
            sodales.
          </p>
          <p>
            Maecenas iaculis a risus in viverra. Nunc interdum iaculis ex et
            fermentum. Donec malesuada neque eros, sit amet commodo neque
            suscipit quis. Proin ullamcorper at orci vel bibendum. Mauris ex
            quam, fermentum sit amet tortor ac, laoreet sodales elit. Proin
            faucibus pulvinar vehicula. Maecenas commodo dapibus tincidunt. Ut
            consectetur justo sit amet turpis tempus, convallis accumsan arcu
            consectetur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutImage;
