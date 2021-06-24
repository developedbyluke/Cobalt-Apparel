import { combineReducers } from 'redux';
import navOpenReducer from './navOpenReducer';

const rootReducer = combineReducers({
  navOpen: navOpenReducer,
});

export default rootReducer;
