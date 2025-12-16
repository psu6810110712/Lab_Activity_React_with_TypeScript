import './App.css';
import { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import type { Note } from './types';


function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(),
      text: text
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>The Persistent Sticky Note Wall</h1>
      <hr />

      <NoteForm onAdd={addNote} />

      <div style={{ marginTop: '20px' }}>
        <NoteList notes={notes} />
      </div>
    </div>
  );
}

export default App;