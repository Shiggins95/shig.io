import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../SHIG_Styles/SHIG_Icon_Style.css';

const IconComponent = (props) => {
  const { displayClass, sizing, classNames, icons, label } = props;
  return (
    <div className={`content_box ${displayClass}`}>
      <h2>{label}</h2>
      <div className="icons">
        {icons.map((icon, index) => {
          return (
            <FontAwesomeIcon
              key={index + sizing[index]}
              icon={icon}
              size={sizing[index]}
              className={`fa_icon ${classNames[index]}`}
            />
          );
        })}
      </div>
    </div>
  );
};

IconComponent.propTypes = {
  displayClass: PropTypes.string,
  label: PropTypes.string,
  sizing: PropTypes.array,
  icons: PropTypes.array,
  classNames: PropTypes.array
};

export default IconComponent;
