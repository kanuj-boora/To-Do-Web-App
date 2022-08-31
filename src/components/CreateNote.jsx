import React from "react";

function CreateNote(props) {

  const [note, setNote] = React.useState({
    title: "",
    content: "",
  });

  function handleChange(event) {

    const { name, value } = event.target;

    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });

    console.log(note);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={note.content}
        />
        <button
          onClick={(event) => {

            props.addNote(note);

            setNote({ title: "", content: "" });

            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
