import { combineReducers } from 'redux';
import rendererReducer from './renderer';
import navbarReducer from './navbarReducer';
import contactFormReducer from './contactFormReducer';
import wizardReducer from './wizardReducer';
import datePickerReducer from './datePickerReducer';

const rootReducer = combineReducers({
  renderer: rendererReducer,
  navbarState: navbarReducer,
  contactFormReducer: contactFormReducer,
  wizardReducer: wizardReducer,
  datePickerReducer: datePickerReducer
});

export default rootReducer;
