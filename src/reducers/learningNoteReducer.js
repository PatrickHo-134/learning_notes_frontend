import {
  FETCH_LEARNING_NOTES_REQUEST,
  FETCH_LEARNING_NOTES_SUCCESS,
  FETCH_LEARNING_NOTES_FAILURE,
  CREATE_LEARNING_NOTE_REQUEST,
  CREATE_LEARNING_NOTE_SUCCESS,
  CREATE_LEARNING_NOTE_FAILURE,
  ARCHIVE_LEARNING_NOTE_REQUEST,
  ARCHIVE_LEARNING_NOTE_SUCCESS,
  ARCHIVE_LEARNING_NOTE_FAILURE,
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
    case ARCHIVE_LEARNING_NOTE_REQUEST:
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
        learningNotes: [action.payload, ...state.learningNotes],
        loading: false,
      };

    case ARCHIVE_LEARNING_NOTE_SUCCESS:
      const noteList = state.learningNotes.filter(function (note) {
        return note.id !== action.noteId;
      });

      return {
        ...state,
        learningNotes: noteList,
        loading: false,
      };

    case FETCH_LEARNING_NOTES_FAILURE:
    case CREATE_LEARNING_NOTE_FAILURE:
    case ARCHIVE_LEARNING_NOTE_FAILURE:
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
