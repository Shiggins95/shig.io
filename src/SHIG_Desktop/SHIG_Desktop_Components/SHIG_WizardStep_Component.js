import React from 'react';
import PropTypes from 'prop-types';
import '../../SHIG_Styles/SHIG_WizardStep_Style.css';
import Form from './SHIG_Form_Component';
import { useDispatch, useSelector } from 'react-redux';
import {
  _resetWizardState,
  _setWizardDirection,
  _setWizardField,
  _setWizardLabels,
  _setWizardStep
} from '../../SHIG_Redux/actions/quoteWizardActions';

const WizardStep = (props) => {
  const { inputs, title } = props;
  const wizardState = useSelector((state) => state.wizardReducer);
  const datePickerState = useSelector((state) => state.datePickerReducer);
  const { currentDate } = datePickerState;
  const { currentStep, steps } = wizardState;
  const { showLabels } = steps[currentStep];
  const dispatch = useDispatch();

  const handleClick = (event) => {
    showLabels[event.target.id] = true;
    dispatch(_setWizardLabels(showLabels, currentStep, event.target.id));
  };
  inputs.forEach((input) => {
    input.onClick = handleClick;
    input.onFocus = handleClick;
  });
  const handleChange = (event) => {
    dispatch(_setWizardField(currentStep, event.target.id, event.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(wizardState);
    console.log(currentDate);
  };
  // only used to stop form submitting when pressing buttons in wizard
  const _handleSubmit = (event) => {
    event.preventDefault();
  };
  const goLeft = () => {
    dispatch(_setWizardStep(currentStep - 1));
    dispatch(_setWizardDirection('left'));
  };
  const goRight = () => {
    dispatch(_setWizardStep(currentStep + 1));
    dispatch(_setWizardDirection('right'));
  };
  const handleCancel = () => {
    dispatch(_resetWizardState());
  };

  return (
    <div className="wizard_step">
      <div className="title">{title}</div>
      <Form
        inputs={inputs}
        handleClick={handleClick}
        handleChange={handleChange}
        handleSubmit={_handleSubmit}
      />
      <div className="navigation_buttons">
        {/* only show if not on first step to cancel */}
        {currentStep !== 0 ? (
          <button id="cancel_button" className="button" onClick={handleCancel}>
            Cancel
          </button>
        ) : null}
        {/* only show if not on first step to go backward */}
        {currentStep !== 0 ? (
          <button id="back_button" className="button" onClick={goLeft}>
            Previous
          </button>
        ) : null}
        {/* only show if not on last step to go forward */}
        {currentStep !== 2 ? (
          <button id="forwards_button" className="button" onClick={goRight}>
            Next
          </button>
        ) : null}
        {/* only show if on last step to finalise */}
        {currentStep === 2 ? (
          <button id="confirm_button" className="button" onClick={handleSubmit}>
            Make Enquiry
          </button>
        ) : null}
      </div>
    </div>
  );
};

WizardStep.propTypes = {
  inputs: PropTypes.array
};

export default WizardStep;
