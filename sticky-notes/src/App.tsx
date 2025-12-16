import './App.css';
import { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import type { Note } from './types';


function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(),
      text: text
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>The Persistent Sticky Note Wall</h1>
      <hr />

      <NoteForm onAdd={addNote} />

      <div style={{ marginTop: '20px' }}>
        <NoteList notes={notes} onDelete={deleteNote} />
      </div>
    </div>
  );
}

export default App;