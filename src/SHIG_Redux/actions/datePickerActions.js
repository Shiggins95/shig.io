export const _setDatePickerMonth = (newMonthDate) => {
  return {
    type: 'SET_DATE_PICKER_MONTH',
    newMonthDate
  };
};

export const _setDatePickerDate = (newCurrentDate) => {
  return {
    type: 'SET_DATE_PICKER_DATE',
    newCurrentDate
  };
};

export const _setDatePickerDays = (newDays) => {
  return {
    type: 'SET_DATE_PICKER_DAYS',
    newDays
  };
};

export const _toggleDatePicker = () => {
  return { type: 'SET_DATE_PICKER_SHOW' };
};

export const _setDatePickerMultiple = (newState) => {
  return {
    type: 'SET_DATE_PICKER_MULTIPLE',
    newState
  };
};

export const _setDatePickerView = (newCurrentView) => {
  return {
    type: 'SET_DATE_PICKER_VIEW',
    newCurrentView
  };
};

export const _resetDatePickerState = () => {
  return {
    type: 'RESET_DATE_PICKER_STATE'
  };
};
