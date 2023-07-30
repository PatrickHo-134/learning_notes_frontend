import React from 'react';
import LearningNoteList from './components/LearningNoteList';
import LearningNoteForm from './components/LearningNoteForm';

const App = () => {
  return (
    <div>
      <h1>My Learning Note App</h1>
      <LearningNoteList />
      <LearningNoteForm />
    </div>
  );
};

export default App;
