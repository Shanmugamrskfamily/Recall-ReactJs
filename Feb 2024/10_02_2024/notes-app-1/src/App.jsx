import React from 'react';
import './App.css';
import { NotesProvider } from './NotesContext';
import { NotesList } from './NotesList';

function App() {
  return (
    <NotesProvider>
      <div>
        <NotesList/>
      </div>
    </NotesProvider>
  );
}

export default App;
