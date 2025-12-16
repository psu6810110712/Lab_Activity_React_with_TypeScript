import type { Note } from '../types';

interface NoteListProps {
  notes: Note[];
}

const NoteList = ({ notes }: NoteListProps) => {
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
        </div>
      ))}
    </div>
  );
};

export default NoteList;