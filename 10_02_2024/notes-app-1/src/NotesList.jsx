import React, { useState, useContext } from 'react';
import { NotesContext } from './NotesContext';

export const NotesList = () => {
    const { notes, updateNote, deleteNote, createNote } = useContext(NotesContext);
    const [inputValue, setInputValue] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);
    const [updateIndex, setUpdateIndex] = useState(null);

    const handleUpdate = (index) => {
        setIsUpdating(true);
        setUpdateIndex(index);
        setInputValue(notes[index]);
    };

    const handleDelete = (index) => {
        deleteNote(index);
    };

    const handleInputChange = (event) => {
        console.log('Key: ',event.key);
        setInputValue(event.target.value);
    };
    const handleAction = () => {
        if (isUpdating && updateIndex !== null) {
            updateNote(updateIndex, inputValue);
            setIsUpdating(false);
            setUpdateIndex(null);
        } else {
            if (inputValue.trim() !== '') {
                createNote(inputValue);
            }
        }
        setInputValue('');
    };

    return (
        <div className="notes-list-container">
            <h1>Notes List</h1>
            <div className='input-Note'>
            <textarea tabIndex="-1" className="notes-list-input"type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleInputChange} placeholder="Enter your note..." multiline='true'/>
            <div>
            <button className={isUpdating?'notes-list-update-button':'notes-list-action-button'} onClick={handleAction}>{isUpdating ? 'Update Note' : 'Create Note'}</button>
            </div>
            </div>
            {notes.map((note, index) => (
                <div key={index} className="notes-list-note">
                    <p>{index+1}. {note}</p>
                    <button className="notes-list-update-button" onClick={() => handleUpdate(index)}>Update</button>
                    <button className="notes-list-delete-button" onClick={() => handleDelete(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
};
