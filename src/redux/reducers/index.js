import {combineReducers} from 'redux';
import alert from './alert';
import contact from './contact';

const rootReducers = combineReducers({
  alert,
  contact,
});

export default rootReducers;
