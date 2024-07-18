import React, { useRef, useState, useEffect } from "react";
import Card from "./Card";
import AddNoteCard from "./AddNoteCard";
import Modal from "./Modal";

const Foreground = () => {
  const ref = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  const handleAddNote = () => {
    setEditingNote(null); // Reset the editing note
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleNewNote = (newNote) => {
    const updatedNotes = editingNote
      ? notes.map((note) => (note.id === newNote.id ? newNote : note))
      : [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    handleCloseModal();
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setIsModalVisible(true);
  };

  const handleDeleteNote = (noteId) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }
  };

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-screen overflow-auto"
    >
      <div className="flex flex-wrap gap-3 p-5">
        <AddNoteCard reference={ref} onAddNote={handleAddNote} />
        {isModalVisible && (
          <Modal
            onClose={handleCloseModal}
            onSubmit={handleNewNote}
            note={editingNote}
          />
        )}
        {notes.map((note) => (
          <Card
            key={note.id}
            reference={ref}
            note={note}
            onEdit={() => handleEditNote(note)}
            onDelete={() => handleDeleteNote(note.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Foreground;
