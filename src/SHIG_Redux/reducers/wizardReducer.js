import { _generateWizardStartingState, generateFields } from '../../SHIG_Helpers/generationHelper';
import { stepOneInputs, stepThreeInputs, stepTwoInputs } from '../../SHIG_Data/wizardFields';

const { startingState, startingValues } = _generateWizardStartingState();

export default (state = startingState, action) => {
  const {
    type,
    newStep,
    currentStep,
    newLabels,
    currentField,
    value,
    newDirection,
    newPreferredContact,
    newError
  } = action;

  switch (type) {
    case 'SET_WIZARD_STEP':
      return { ...state, currentStep: newStep };
    case 'SET_WIZARD_PREFERRED_CONTACT':
      return { ...state, preferredContact: newPreferredContact };
    case 'SET_WIZARD_LABELS':
      // get current value for comparison
      const currentValue = state.steps[currentStep][currentField];
      return {
        // return existing state
        ...state,
        steps: {
          // return existing steps
          ...state.steps,
          // modify current step that is passed in
          [currentStep]: {
            // return existing current step
            ...state.steps[currentStep],
            // set current fields value to '' if it is its starting value else keep as is
            [currentField]: startingValues.indexOf(currentValue) === -1 ? currentValue : '',
            showLabels: newLabels
          }
        }
      };
    case 'SET_WIZARD_FIELD':
      return {
        ...state,
        steps: { ...state.steps, [currentStep]: { ...state.steps[currentStep], [currentField]: value } }
      };
    case 'SET_WIZARD_DIRECTION':
      return { ...state, direction: newDirection };
    case 'SET_WIZARD_ERROR':
      return { ...state, error: newError };
    case 'RESET_ALL_WIZARD_STATE':
      debugger;
      const _startingState = _generateWizardStartingState().startingState;
      _startingState.direction = 'left';
      return _startingState;
    default:
      return state;
  }
};
