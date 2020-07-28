const startingState = {
  name: 'NAME',
  reason: 'REASON FOR CONTACT',
  subject: 'SUBJECT',
  email: 'EMAIL',
  body: '',
  errorTitle: '',
  errorMessage: '',
  showPopup: false,
  success: false,
  showLabels: {
    name: false,
    reason: false,
    subject: false,
    email: false,
    body: false
  }
};

const contactFormReducer = (state = startingState, action) => {
  const { type, value, newName, newReason, newSubject, newEmail, newBody, labelKey, newError } = action;
  const { showLabels } = state;

  switch (type) {
    case 'SET_CONTACT_FORM_NAME':
      return { ...state, name: newName };
    case 'SET_CONTACT_FORM_EMAIL':
      return { ...state, email: newEmail };
    case 'SET_CONTACT_FORM_REASON':
      return { ...state, reason: newReason };
    case 'SET_CONTACT_FORM_SUBJECT':
      return { ...state, subject: newSubject };
    case 'SET_CONTACT_FORM_BODY':
      return { ...state, body: newBody };
    case 'SET_CONTACT_FORM_LABEL_STATE':
      showLabels[labelKey] = value;
      return { ...state, showLabels };
    case 'SET_CONTACT_FORM_ERROR':
      // use existing properties of state and spread new properties of new error
      return { ...state, ...newError };
    case 'RESET_CONTACT_FORM_STATE':
      return {
        name: 'NAME',
        reason: 'REASON FOR CONTACT',
        subject: 'SUBJECT',
        email: 'EMAIL',
        body: '',
        errorTitle: '',
        errorMessage: '',
        showPopup: false,
        success: false,
        showLabels: {
          name: false,
          reason: false,
          subject: false,
          email: false,
          body: false
        }
      };
    default:
      return state;
  }
};

export default contactFormReducer;
