import React from 'react';
import PropTypes from 'prop-types';
import classes from './AboutBlock.module.css';

function AboutBlock({
  children,
  image,
  alt,
  orientation,
  backgroundColor,
  textColor,
}) {
  return (
    <div
      className={classes['about-wrapper']}
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      <div
        className={`container ${classes['about-container']}`}
        style={{
          flexDirection: orientation === 'left' ? 'row' : 'row-reverse',
        }}
      >
        <img src={image} alt={alt} className={classes['about-image']} />
        <div
          className={classes['about-text']}
          style={{
            textAlign: orientation === 'left' ? 'start' : 'end',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

AboutBlock.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  orientation: PropTypes.oneOf(['left', 'right']),
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

AboutBlock.defaultProps = {
  orientation: 'left',
  textColor: '#fff',
};

export default AboutBlock;
