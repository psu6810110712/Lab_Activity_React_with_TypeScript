// App.tsx
import React from 'react';
import './App.css';

import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>My Note App</h1>
      <hr />
      
      <NoteForm />
      
      <div style={{ marginTop: '20px' }}>
        <NoteList />
      </div>
    </div>
  );
}

export default App;