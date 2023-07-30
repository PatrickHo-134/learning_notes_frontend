import { combineReducers } from 'redux';
import learningNoteReducer from './learningNoteReducer';

const rootReducer = combineReducers({
  learningNotes: learningNoteReducer,
  // Add other reducers here if you have more features
});

export default rootReducer;
