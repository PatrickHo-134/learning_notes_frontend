import { combineReducers } from 'redux';
import learningNoteReducer from './learningNoteReducer';
import userLoginReducer from './userReducer';

const rootReducer = combineReducers({
  learningNotes: learningNoteReducer,
  userLogin: userLoginReducer,
  // Add other reducers here if you have more features
});

export default rootReducer;
