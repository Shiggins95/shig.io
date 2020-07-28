import { combineReducers } from 'redux';
import rendererReducer from './renderer';
import navbarReducer from './navbarReducer';
import contactFormReducer from './contactFormReducer';

const rootReducer = combineReducers({
  renderer: rendererReducer,
  navbarState: navbarReducer,
  contactFormReducer: contactFormReducer
});

export default rootReducer;
