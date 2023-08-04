import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container
} from "@mui/material";
import { fetchLearningNotes, createLearningNote } from '../actions/learningNoteActions';
import LearningNoteCard from './LearningNoteCard';
import AddLearningNoteModal from './AddLearningNoteModal';

const LearningNoteList = () => {
  const dispatch = useDispatch();
  const learningNotes = useSelector((state) => state.learningNotes.learningNotes);

  useEffect(() => {
    dispatch(fetchLearningNotes());
  }, [dispatch]);

  const handleAddNote = (newNote) => {
    dispatch(createLearningNote(newNote)); // Dispatch the action to add the new note to Redux store
  };

  // If learningNotes is empty or still loading, display a message
  if (learningNotes.length === 0) {
     return <p>No learning notes found. Please create one.</p>;
   }

  return (
    <Container maxWidth="md">
      <h1>Timeline</h1>
      <AddLearningNoteModal onAddNote={handleAddNote} />
      {learningNotes.length === 0 ? (
        <p>Your Time Line is empty. Let's create your first note.</p>
      ) : (
        learningNotes.map((note) => <LearningNoteCard key={note.id} learningNote={note} />)
      )}
    </Container>
  );
};

export default LearningNoteList;
