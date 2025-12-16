import type { Note } from '../types';

interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

const NoteList = ({ notes, onDelete }: NoteListProps) => {
  if (notes.length === 0) {
    return <p>No notes yet</p>;
  }

  return (
    <div>
      {notes.map((note) => (
        <div
          key={note.id}
          style={{
            padding: '10px',
            margin: '10px 0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span>{note.text}</span>
          <button
            onClick={() => onDelete(note.id)}
            style={{
              padding: '5px 10px',
              backgroundColor: '#ff4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;