import { stepOneInputs, stepTwoInputs, stepThreeInputs } from '../SHIG_Data/wizardFields';

export const generateFields = (inputs, title) => {
  const startingObj = {
    errorTitle: '',
    errorMessage: '',
    showPopup: false,
    success: false
  };

  const newObj = { ...startingObj, title };
  inputs.forEach((input) => {
    if (!newObj.showLabels) {
      newObj.showLabels = {};
    }
    newObj.showLabels[input.id] = input.type !== 'text';

    if (input.type !== 'textarea') {
      newObj[input.id] = input.label.toUpperCase();
    }
  });
  return newObj;
};

const getStartingValues = () => {
  const startingValues = [];
  stepOneInputs.forEach((input) => startingValues.push(input.label.toUpperCase()));
  stepTwoInputs.forEach((input) => startingValues.push(input.label.toUpperCase()));
  stepThreeInputs.forEach((input) => startingValues.push(input.label.toUpperCase()));
  return startingValues;
};

export const _generateWizardStartingState = () => {
  const startingState = {
    currentStep: 0,
    direction: 'right',
    renders: 0,
    preferredContact: 'email',
    steps: {
      0: generateFields(stepOneInputs, 'Enter Contact Information'),
      1: generateFields(stepTwoInputs, 'Enter Project Information'),
      2: generateFields(stepThreeInputs, 'Enter Additional Details')
    }
  };
  const startingValues = getStartingValues();

  return { startingState, startingValues };
};
