import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLearningNotes } from '../actions/learningNoteActions';
import LearningNoteCard from './LearningNoteCard';

let note1 = {
     "id": 1,
     "user": 1,
     "title": "First Note in the system",
     "content": "foo bar baz",
     "created_at": "2023-07-27T13:44:17.732510Z"
 }

let note2 = {
     "id": 2,
     "user": 1,
     "title": "Second note",
     "content": "foo bar baz",
     "created_at": "2023-07-27T13:44:31.544494Z"
 }

let testData = new Array(note1, note2)

const LearningNoteList = () => {
  const dispatch = useDispatch();
  const learningNotes = useSelector((state) => state.learningNotes.learningNotes);

  useEffect(() => {
    dispatch(fetchLearningNotes());
  }, [dispatch]);

  // If learningNotes is empty or still loading, display a message
  if (learningNotes.length === 0) {
     return <p>No learning notes found. Please create one.</p>;
   }

  return (
    <div>
      <h2>Time Line</h2>
      {learningNotes.length === 0 ? (
        <p>Your Time Line is empty. Let's create your first note.</p>
      ) : (
        learningNotes.map((note) => <LearningNoteCard key={note.id} learningNote={note} />)
      )}
    </div>
  );
};

export default LearningNoteList;
