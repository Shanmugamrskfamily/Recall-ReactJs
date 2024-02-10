import React, { useEffect, useState, createContext } from "react";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const myNotes = JSON.parse(localStorage.getItem("notes"));
    if (myNotes) {
      setNotes(myNotes);
    }
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const saveNotesToLocalStorage = (updatedNotes) => {
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const createNote = (note) => {
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  const updateNote = (index, updatedNote) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = updatedNote;
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  return (
    <NotesContext.Provider value={{ notes, createNote, updateNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };
