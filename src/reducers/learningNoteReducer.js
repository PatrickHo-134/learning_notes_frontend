import {
  FETCH_LEARNING_NOTES_REQUEST,
  FETCH_LEARNING_NOTES_SUCCESS,
  FETCH_LEARNING_NOTES_FAILURE,
  CREATE_LEARNING_NOTE_REQUEST,
  CREATE_LEARNING_NOTE_SUCCESS,
  CREATE_LEARNING_NOTE_FAILURE,
} from "../actions/learningNoteActions";

const initialState = {
  learningNotes: [],
  loading: false,
  error: null,
};

const learningNoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEARNING_NOTES_REQUEST:
    case CREATE_LEARNING_NOTE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_LEARNING_NOTES_SUCCESS:
      return {
        ...state,
        learningNotes: action.payload,
        loading: false,
      };
    case CREATE_LEARNING_NOTE_SUCCESS:
      return {
        ...state,
        learningNotes: [...state.learningNotes, action.payload],
        loading: false,
      };
    case FETCH_LEARNING_NOTES_FAILURE:
    case CREATE_LEARNING_NOTE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default learningNoteReducer;
