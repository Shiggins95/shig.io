import { combineReducers } from 'redux';
import rendererReducer from './renderer';

const rootReducer = combineReducers({
  renderer: rendererReducer
});

export default rootReducer;
