import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [expandCreateArea, setexpandCreateArea] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function renderTitleInput() {
    return (
      <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      />
    );
  }

  return (
    <div>
      <form
        className="create-note"
        autoComplete="off"
        onMouseEnter={e => {
          setexpandCreateArea(true);
        }}
        onMouseLeave={e => {
          setexpandCreateArea(false);
        }}
      >
        {expandCreateArea ? renderTitleInput() : ""}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={expandCreateArea ? 3 : 0}
        />
        <Zoom in={expandCreateArea}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
