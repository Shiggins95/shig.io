export const _setWizardField = (currentStep, currentField, value) => {
  return { type: 'SET_WIZARD_FIELD', currentStep, currentField, value };
};

export const _setWizardDirection = (newDirection) => {
  return { type: 'SET_WIZARD_DIRECTION', newDirection };
};

export const _setWizardStep = (newStep) => {
  return { type: 'SET_WIZARD_STEP', newStep };
};

export const _setWizardLabels = (newLabels, currentStep, currentField) => {
  return { type: 'SET_WIZARD_LABELS', newLabels, currentStep, currentField };
};
export const _setWizardError = (newError) => {
  return { type: 'SET_WIZARD_ERROR', newError };
};

export const _resetWizardState = () => {
  return { type: 'RESET_ALL_STATE' };
};

export const _setWizardPreferredContact = (newPreferredContact) => {
  return { type: 'SET_WIZARD_PREFERRED_CONTACT', newPreferredContact };
};
