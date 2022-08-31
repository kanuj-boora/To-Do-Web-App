import React from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";
// import notes from "../notes";

function App() {
  const [notes, setNotes] = React.useState([
    {
      key: 1,
      title: "Note title",
      content: "Note content",
    },
  ]);

  function addNote(newNote) {
    newNote = { key: notes.length + 1, ...newNote };

    console.log(newNote);

    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(ind) {
    console.log(ind);

    setNotes(() => {
      return notes.filter((note) => {
        return note.key !== ind;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateNote addNote={addNote} />
      {notes.map((note) => {
        return (
          <Note
            key={note.key}
            id={note.key}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
