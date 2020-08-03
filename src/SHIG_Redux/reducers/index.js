import { combineReducers } from 'redux';
import rendererReducer from './renderer';
import navbarReducer from './navbarReducer';
import contactFormReducer from './contactFormReducer';
import wizardReducer from './wizardReducer';

const rootReducer = combineReducers({
  renderer: rendererReducer,
  navbarState: navbarReducer,
  contactFormReducer: contactFormReducer,
  wizardReducer: wizardReducer
});

export default rootReducer;
