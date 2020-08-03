import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../SHIG_Styles/SHIG_ContactForm_Style.css';
import TextInput from './SHIG_TextInput_Component';
import {
  _resetContactFormState,
  _setContactFormError,
  _setContactFormLabels,
  contactFormMapping
} from '../../SHIG_Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { _capitaliseString } from '../../SHIG_Helpers/formatHelper';
import emailJS from 'emailjs-com';
import PopupModal from './SHIG_Popup_Component';
import Form from './SHIG_Form_Component';

const ContactForm = (props) => {
  const contactFormState = useSelector(({ contactFormReducer }) => contactFormReducer);
  const {
    name,
    reason,
    subject,
    email,
    body,
    errorTitle,
    errorMessage,
    showPopup,
    showLabels,
    success
  } = contactFormState;
  const labelState = showLabels;
  const dispatch = useDispatch();
  const [emailSent, setEmailSent] = useState(false);
  const handleChange = (event) => {
    const rawId = event.target.id;
    const id = _capitaliseString(rawId);
    dispatch(contactFormMapping['_setContactForm' + id](event.target.value));
  };
  const handleClick = (event) => {
    const rawId = event.target.id;
    const id = _capitaliseString(rawId);
    dispatch(contactFormMapping['_setContactForm' + id](''));
    dispatch(_setContactFormLabels(rawId, true));
  };
  const inputs = [
    {
      id: 'name',
      label: 'name',
      type: 'text',
      defaultValue: name,
      size: 'small',
      onClick: handleClick,
      onFocus: handleClick,
      showLabel: labelState.name
    },
    {
      id: 'reason',
      label: 'reason for contact',
      type: 'text',
      defaultValue: reason,
      size: 'small',
      onClick: handleClick,
      onFocus: handleClick,
      showLabel: labelState.reason
    },
    {
      id: 'email',
      label: 'email',
      type: 'text',
      defaultValue: email,
      size: 'medium',
      onClick: handleClick,
      onFocus: handleClick,
      showLabel: labelState.email
    },
    {
      id: 'subject',
      label: 'subject',
      type: 'text',
      defaultValue: subject,
      size: 'medium',
      onClick: handleClick,
      onFocus: handleClick,
      showLabel: labelState.subject
    },
    {
      id: 'body',
      label: 'email body',
      type: 'textarea',
      rows: 20,
      defaultValue: body,
      size: 'large',
      showLabel: true
    }
  ];

  const validateForm = () => {
    const requiredKeys = ['email', 'name', 'reason', 'subject'];
    const missingFields = [];
    let validation = true;
    requiredKeys.forEach((key) => {
      if (!contactFormState[key] || !labelState[key]) {
        validation = false;
        const currentKey = inputs.filter((input) => input.id === key)[0];
        missingFields.push(currentKey.label);
      }
    });
    if (!body) {
      validation = false;
      missingFields.push('body');
    }
    return { validation, missingFields };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { missingFields, validation } = validateForm(event);
    if (validation) {
      const params = {
        recipient_email: 'stephen.higgins1995@gmail.com',
        email_body: body,
        subject: subject,
        from_email: email
      };
      emailJS.send('gmail', 'template_one', params, 'user_NZ9AngoKPS2Lb7NFOpI8I').then((res) => {
        console.log(res);
      });
      event.target.reset();
      setEmailSent(true);
      dispatch(
        _setContactFormError({
          errorTitle: 'Email Sent',
          errorMessage: 'Thank you for your email. I will be in touch shortly',
          showPopup: true,
          success: true
        })
      );
    } else {
      let errorMessage = '';
      missingFields.forEach((field, index) => {
        errorMessage += _capitaliseString(field) + (index < missingFields.length - 1 ? ', ' : '');
      });
      dispatch(
        _setContactFormError({ errorTitle: 'Missing Fields', errorMessage, showPopup: true, success: false })
      );
    }
  };
  return (
    <div id="contact_form_container">
      <div className="lets_chat">
        <h1>Oh, Hi</h1>
        <h2>Lets have a chat...</h2>
      </div>
      <Form handleSubmit={handleSubmit} handleChange={handleChange} inputs={inputs} />
      {showPopup ? (
        <PopupModal
          message={errorMessage}
          title={errorTitle}
          success={success}
          resetFunction={_resetContactFormState}
        />
      ) : null}
    </div>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  resetFunction: PropTypes.func,
  inputs: PropTypes.array,
  showPopup: PropTypes.bool,
  success: PropTypes.bool,
  errorTitle: PropTypes.string,
  errorMessage: PropTypes.string
};

export default ContactForm;
