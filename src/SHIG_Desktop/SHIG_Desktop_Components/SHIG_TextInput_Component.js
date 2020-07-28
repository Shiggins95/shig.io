import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../SHIG_Styles/SHIG_TextInput_Style.css';

const TextInput = (props) => {
  const { id, label, type, size, showLabel, defaultValue, onClick, onChange } = props;
  const newProps = { id, label, type, size, value: defaultValue, onClick, onChange };
  return (
    <div className={`text_input_container input_container_${size}`}>
      {showLabel ? (
        <label htmlFor={id} className={id === 'body' ? '' : 'visible'}>
          {label.toUpperCase()}
        </label>
      ) : null}
      {type !== 'textarea' ? <input {...newProps} onFocus={onClick} /> : <textarea {...newProps} />}
    </div>
  );
};

TextInput.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func
};

export default TextInput;
