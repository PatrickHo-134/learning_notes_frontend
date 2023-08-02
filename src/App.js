import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LearningNoteList from './components/LearningNoteList'
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/timeline" element={<LearningNoteList />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
