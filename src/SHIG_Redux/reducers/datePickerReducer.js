import moment from 'moment';
const startingState = {
  days: [],
  open: false,
  currentView: 'days',
  monthDate: moment(),
  currentDate: moment()
};
const datePickerReducer = (state = startingState, action) => {
  const { type, newMonthDate, newCurrentDate, newDays, newState, newCurrentView } = action;

  switch (type) {
    case 'SET_DATE_PICKER_MONTH':
      return { ...state, monthDate: newMonthDate };
    case 'SET_DATE_PICKER_DATE':
      return { ...state, currentDate: newCurrentDate };
    case 'SET_DATE_PICKER_DAYS':
      return { ...state, days: newDays };
    case 'SET_DATE_PICKER_MULTIPLE':
      return { ...state, ...newState };
    case 'SET_DATE_PICKER_SHOW':
      return { ...state, open: !state.open };
    case 'SET_DATE_PICKER_VIEW':
      return { ...state, currentView: newCurrentView };
    case 'RESET_DATE_PICKER_STATE':
      return {
        days: [],
        open: false,
        currentView: 'days',
        monthDate: moment(),
        currentDate: moment()
      };
    default:
      return state;
  }
};

export default datePickerReducer;
