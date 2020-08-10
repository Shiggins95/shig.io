import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../../SHIG_Styles/SHIG_WizardStep_Style.css';
import Form from '../SHIG_Form_Components/SHIG_Form_Component';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {
  _resetWizardState,
  _setWizardDirection,
  _setWizardField,
  _setWizardLabels,
  _setWizardError,
  _setWizardStep
} from '../../../SHIG_Redux/actions/quoteWizardActions';
import { _sendEmail, _sendEmailLocal } from '../../../SHIG_Helpers/emailSender';
import PopupModal from '../SHIG_Contact_Components/SHIG_Popup_Component';
import { stepOneInputs, stepThreeInputs, stepTwoInputs } from '../../../SHIG_Data/wizardFields';
import { _validateEmail, _validatePhoneNumber } from '../../../SHIG_Helpers/validationHelper';
import { _resetDatePickerState } from '../../../SHIG_Redux/actions/datePickerActions';

const WizardStep = (props) => {
  const { inputs, title } = props;
  const wizardState = useSelector((state) => state.wizardReducer);
  const { currentStep, steps, error } = wizardState;
  const { showPopup, errorTitle, errorMessage, success } = error;
  const { showLabels } = steps[currentStep];
  const dispatch = useDispatch();
  const inputMapping = { 0: stepOneInputs, 1: stepTwoInputs, 2: stepThreeInputs };

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
  /**
   * actual submit function
   * @param {Object} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(wizardState);
    const validation = validateFields(inputMapping[currentStep]);
    if (validation !== -1) {
      dispatch(
        _setWizardError({
          showPopup: true,
          errorTitle: 'Missing Values',
          errorMessage: 'Please enter all values marked with "*"',
          success: false
        })
      );
      return;
    }

    const contactDetails = wizardState.steps[0];
    const projectDetails = wizardState.steps[1];
    const additionalDetails = wizardState.steps[2];

    const { email, first_name, last_name, mobile } = contactDetails;
    const { contact_reason, budget, deadline } = projectDetails;
    const { no_of_pages, db_required, users_required, domain_purchased } = additionalDetails;
    const actualDeadline = moment(deadline).isValid() ? moment(deadline) : moment();
    const preferred_contact = wizardState.preferredContact;
    console.log('ACTUAL DEADLINE: ', actualDeadline);
    console.log('DEADLINE: ', deadline);
    const params = {
      recipient_email: 'stephen.higgins1995@gmail.com',
      first_name,
      last_name,
      email,
      mobile,
      budget,
      deadline: actualDeadline.format('DD/MM/YYYY'),
      contact_reason,
      no_of_pages,
      db_required,
      users_required,
      domain_purchased,
      preferred_contact
    };
    _sendEmail(params);

    dispatch(
      _setWizardError({
        showPopup: true,
        errorTitle: 'Enquiry Sent',
        errorMessage: 'Thank you for your enquiry! I will send you an email shortly with an estimate.',
        success: true
      })
    );
  };
  const validateFields = (inputs) => {
    let allPresent = true;
    let validEmail = true;
    let validPhoneNumber = true;
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (!input.required) {
        continue;
      }
      const currentValue = steps[currentStep][input.id];
      if (input.type === 'email') {
        validEmail = _validateEmail(currentValue);
      }
      if (input.id === 'mobile') {
        validPhoneNumber = _validatePhoneNumber(currentValue);
      }
      if (!currentValue || currentValue === input.label.toUpperCase()) {
        allPresent = false;
      }
    }
    if (!allPresent) {
      return 0;
    }
    if (!validEmail) {
      return 1;
    }
    if (!validPhoneNumber) {
      return 2;
    }
    return -1;
  };
  /**
   * only used to stop form submitting when pressing buttons in wizard
   * @param {Object} event
   */
  const _handleSubmit = (event) => {
    event.preventDefault();
  };
  const goLeft = () => {
    dispatch(_setWizardStep(currentStep - 1));
    dispatch(_setWizardDirection('left'));
  };
  const goRight = () => {
    // const validation = validateFields(inputMapping[currentStep]);
    const validation = -1;
    console.log(validation);
    const errorMapping = {
      0: { errorTitle: 'Missing Values', errorMessage: "Please enter all values marked with '*'" },
      1: { errorTitle: 'Invalid Email Address', errorMessage: 'Please enter a valid email address.' },
      2: { errorTitle: 'Invalid Phone Number', errorMessage: 'Please enter a valid phone number.' }
    };
    if (validation !== -1) {
      dispatch(_setWizardError({ showPopup: true, success: false, ...errorMapping[validation] }));
      return;
    }
    dispatch(_setWizardStep(currentStep + 1));
    dispatch(_setWizardDirection('right'));
  };
  const handleCancel = () => {
    dispatch(_resetWizardState());
  };

  const closePopup = () => {
    dispatch(_setWizardError({ errorMessage: '', errorTitle: '', showPopup: false, success: false }));
  };

  return (
    <div className="wizard_step">
      {showPopup ? (
        <PopupModal
          title={errorTitle}
          message={errorMessage}
          success={success}
          resetFunction={_resetWizardState}
          secondaryResetFunction={_resetDatePickerState}
          callback={closePopup}
          showSubHeading={false}
        />
      ) : null}
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
        ) : <div className="blank_button"/>}
        {/* only show if not on first step to go backward */}
        {currentStep !== 0 ? (
          <button id="back_button" className="button" onClick={goLeft}>
            Back
          </button>
        ) : <div className="blank_button"/>}
        {/* only show if not on last step to go forward */}
        {currentStep !== 2 ? (
          <button id="forwards_button" className="button" onClick={goRight}>
            Next
          </button>
        ) : null}
        {/* only show if on last step to finalise */}
        {currentStep === 2 ? (
          <button id="confirm_button" className="button" onClick={handleSubmit}>
            Enquire
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
