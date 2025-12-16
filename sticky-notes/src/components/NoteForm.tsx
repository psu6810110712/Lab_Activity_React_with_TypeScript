import React, { useState } from 'react';

interface NoteFormProps {
  onAdd: (text: string) => void;
}

const NoteForm = ({ onAdd }: NoteFormProps) => {
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your note..."
        style={{ padding: '8px', width: '300px', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '8px 16px' }}>
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;