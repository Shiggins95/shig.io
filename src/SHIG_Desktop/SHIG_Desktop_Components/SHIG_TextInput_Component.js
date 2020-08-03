import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../SHIG_Styles/SHIG_TextInput_Style.css';
import DatePicker from './SHIG_DatePicker_Component/SHIG_DatePicker_Component';

const TextInput = (props) => {
  const { id, label, type, size, showLabel, defaultValue, onClick, onChange } = props;
  const newProps = { id, label, type, size, value: defaultValue, onClick, onChange };
  let renderedInput = null;
  if (type === 'date') {
    renderedInput = (
      <div className={`text_input_container input_container_${size}`} id={'date_picker_top'}>
        <div className="label_container">
          {showLabel ? (
            <label htmlFor={id} className={id === 'body' ? '' : 'visible'}>
              {label.toUpperCase()}
            </label>
          ) : null}
        </div>
        <DatePicker onChange={onChange} value={new Date()} className="date-picker" />
      </div>
    );
    renderedInput = <DatePicker onChange={onChange} value={new Date()} className="date-picker" />;
  } else {
    renderedInput =
      type !== 'textarea' ? <input {...newProps} onFocus={onClick} /> : <textarea {...newProps} />;
  }
  return (
    <div className={`text_input_container input_container_${size}`}>
      {showLabel ? (
        <label htmlFor={id} className={id === 'body' ? '' : 'visible'}>
          {label.toUpperCase()}
        </label>
      ) : null}
      {renderedInput}
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
