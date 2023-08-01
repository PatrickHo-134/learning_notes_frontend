import axios from 'axios';

// Action Types
export const FETCH_LEARNING_NOTES_REQUEST = 'FETCH_LEARNING_NOTES_REQUEST';
export const FETCH_LEARNING_NOTES_SUCCESS = 'FETCH_LEARNING_NOTES_SUCCESS';
export const FETCH_LEARNING_NOTES_FAILURE = 'FETCH_LEARNING_NOTES_FAILURE';
export const CREATE_LEARNING_NOTE_REQUEST = 'CREATE_LEARNING_NOTE_REQUEST';
export const CREATE_LEARNING_NOTE_SUCCESS = 'CREATE_LEARNING_NOTE_SUCCESS';
export const CREATE_LEARNING_NOTE_FAILURE = 'CREATE_LEARNING_NOTE_FAILURE';

// Action Creators
export const fetchLearningNotesRequest = () => ({
  type: FETCH_LEARNING_NOTES_REQUEST,
});

export const fetchLearningNotesSuccess = (learningNotes) => ({
  type: FETCH_LEARNING_NOTES_SUCCESS,
  payload: learningNotes,
});

export const fetchLearningNotesFailure = (error) => ({
  type: FETCH_LEARNING_NOTES_FAILURE,
  payload: error,
});

export const createLearningNoteRequest = () => ({
  type: CREATE_LEARNING_NOTE_REQUEST,
});

export const createLearningNoteSuccess = (newLearningNote) => ({
  type: CREATE_LEARNING_NOTE_SUCCESS,
  payload: newLearningNote,
});

export const createLearningNoteFailure = (error) => ({
  type: CREATE_LEARNING_NOTE_FAILURE,
  payload: error,
});

// Thunk to fetch learning notes from the backend
export const fetchLearningNotes = () => {
  return (dispatch) => {
    dispatch(fetchLearningNotesRequest());
    axios
      .get('http://127.0.0.1:8000/api/learning_notes/')
      .then((response) => {
        const learningNotes = response.data;
        dispatch(fetchLearningNotesSuccess(learningNotes));
      })
      .catch((error) => {
        dispatch(fetchLearningNotesFailure(error.message));
      });
  };
};

// Thunk to create a new learning note
export const createLearningNote = (newLearningNote) => {
  return (dispatch) => {
    dispatch(createLearningNoteRequest());
    axios
      .post('http://127.0.0.1:8000/api/learning_notes', newLearningNote)
      .then((response) => {
        const createdLearningNote = response.data;
        dispatch(createLearningNoteSuccess(createdLearningNote));
      })
      .catch((error) => {
        dispatch(createLearningNoteFailure(error.message));
      });
  };
};
