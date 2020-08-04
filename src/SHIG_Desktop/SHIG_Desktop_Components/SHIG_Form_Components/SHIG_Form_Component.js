import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../SHIG_Input_Components/SHIG_TextInput_Component';

const Form = (props) => {
  const { inputs, handleSubmit, handleChange } = props;
  return (
    <form id="contact_form" onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <TextInput {...input} onChange={handleChange} key={input.id} />
      ))}
      <input type="submit" />
    </form>
  );
};

Form.propTypes = {
  inputs: PropTypes.array,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
};

export default Form;
