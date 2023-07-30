import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createLearningNote } from '../actions/learningNoteActions';

const LearningNoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLearningNote = {
      title,
      content,
    };
    dispatch(createLearningNote(newLearningNote));
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Create Learning Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default LearningNoteForm;
