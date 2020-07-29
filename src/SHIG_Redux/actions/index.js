export const _setSplashRendered = (value) => {
  const type = value === true ? 'SET_SPLASH_PAGE_TRUE' : 'SET_SPLASH_PAGE_FALSE';
  return { type };
};
export const _setNavRendered = (value) => {
  const type = value === true ? 'SET_NAV_TRUE' : 'SET_NAV_FALSE';
  return { type };
};
export const _setHomeServicesRendered = (value) => {
  const type = value === true ? 'SET_HOME_SERVICES_TRUE' : 'SET_HOME_SERVICES_FALSE';
  return { type };
};
export const _setIconsRendered = (value, newIcons) => {
  const type = value === true ? 'SET_ICONS_BAR_TRUE' : 'SET_ICONS_BAR_FALSE';
  return { type, newIcons };
};
export const _setButtonsRendered = (value) => {
  const type = value === true ? 'SET_BUTTONS_BAR_TRUE' : 'SET_BUTTONS_BAR_FALSE';
  return { type };
};
export const _setServicesComponentsRendered = (value, newState) => {
  const type = value === true ? 'SET_SERVICES_COMPONENTS_TRUE' : 'SET_SERVICES_COMPONENTS_FALSE';
  return { type, newState };
};
export const _resetRenderedState = () => {
  return { type: 'RESET_ALL_RENDERED_STATE' };
};

export const _setNavbarTitle = (newTitle) => {
  return { type: 'SET_NAVBAR_TITLE', newTitle };
};

const _setContactFormName = (newName) => {
  return { type: 'SET_CONTACT_FORM_NAME', newName };
};

const _setContactFormEmail = (newEmail) => {
  return { type: 'SET_CONTACT_FORM_EMAIL', newEmail };
};

const _setContactFormSubject = (newSubject) => {
  return { type: 'SET_CONTACT_FORM_SUBJECT', newSubject };
};

const _setContactFormBody = (newBody) => {
  return { type: 'SET_CONTACT_FORM_BODY', newBody };
};

const _setContactFormReason = (newReason) => {
  return { type: 'SET_CONTACT_FORM_REASON', newReason };
};

export const _setContactFormError = (newError) => {
  return { type: 'SET_CONTACT_FORM_ERROR', newError };
};

export const _setContactFormLabels = (labelKey, value) => {
  return { type: 'SET_CONTACT_FORM_LABEL_STATE', labelKey, value };
};

export const _resetContactFormState = () => {
  return { type: 'RESET_CONTACT_FORM_STATE' };
};

export const contactFormMapping = {
  _setContactFormName,
  _setContactFormEmail,
  _setContactFormSubject,
  _setContactFormBody,
  _setContactFormReason
};
