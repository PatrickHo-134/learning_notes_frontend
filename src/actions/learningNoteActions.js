import axios from "axios";

// Action Types
export const FETCH_LEARNING_NOTES_REQUEST = "FETCH_LEARNING_NOTES_REQUEST";
export const FETCH_LEARNING_NOTES_SUCCESS = "FETCH_LEARNING_NOTES_SUCCESS";
export const FETCH_LEARNING_NOTES_FAILURE = "FETCH_LEARNING_NOTES_FAILURE";

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

export const CREATE_LEARNING_NOTE_REQUEST = "CREATE_LEARNING_NOTE_REQUEST";
export const CREATE_LEARNING_NOTE_SUCCESS = "CREATE_LEARNING_NOTE_SUCCESS";
export const CREATE_LEARNING_NOTE_FAILURE = "CREATE_LEARNING_NOTE_FAILURE";

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
  const authToken = localStorage.getItem("token");

  return (dispatch) => {
    dispatch(fetchLearningNotesRequest());
    axios
      .get("http://127.0.0.1:8000/api/learning_notes/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${authToken}`,
        },
      })
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
  const authToken = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${authToken}`,
  };

  return (dispatch) => {
    dispatch(createLearningNoteRequest());
    axios
      .post("http://localhost:8000/api/learning_notes/", newLearningNote, {
        headers: headers,
      })
      .then((response) => {
        const createdLearningNote = response.data;
        dispatch(createLearningNoteSuccess(createdLearningNote));
      })
      .catch((error) => {
        dispatch(createLearningNoteFailure(error.message));
      });
  };
};

export const ARCHIVE_LEARNING_NOTE_REQUEST = "ARCHIVE_LEARNING_NOTE_REQUEST";
export const ARCHIVE_LEARNING_NOTE_SUCCESS = "ARCHIVE_LEARNING_NOTE_SUCCESS";
export const ARCHIVE_LEARNING_NOTE_FAILURE = "ARCHIVE_LEARNING_NOTE_FAILURE";

export const archiveLearningNoteRequest = () => {
  return { type: ARCHIVE_LEARNING_NOTE_REQUEST };
};

export const archiveLearningNoteSuccess = (id) => {
  return { type: ARCHIVE_LEARNING_NOTE_SUCCESS, noteId: id };
};

export const archiveLearningNoteFailure = (error) => {
  return { type: ARCHIVE_LEARNING_NOTE_FAILURE, payload: error };
};

export const archiveLearningNote = (id) => {
  const authToken = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${authToken}`,
  };

  return (dispatch) => {
    dispatch(archiveLearningNoteRequest());

    axios
      .post(`http://localhost:8000/api/learning_notes/${id}/archive/`, null, {
        headers: headers,
      })
      .then((response) => {
        // Dispatch archiveLearningNoteSuccess action with the learning note id
        dispatch(archiveLearningNoteSuccess(id));
      })
      .catch((error) => {
        // Dispatch archiveLearningNoteFailure action if archiving fails
        dispatch(
          archiveLearningNoteFailure(
            "Failed to archive learning note. Please try again."
          )
        );
      });
  };
};
