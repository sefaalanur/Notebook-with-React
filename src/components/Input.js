import React, { useState } from "react";
import PostAddIcon from '@mui/icons-material/PostAdd';

const Input = (props) => {

const[note,setNote] = useState({
    title:"",
    content:""
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

function handleSubmit(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
   console.log(note);
}
    return (
    <div className="createArea">

        <form onSubmit={handleSubmit}>
          <label>NoteBook</label>
          <input onChange={handleChange} name="title" 
          className="inputs" placeholder="Title" 
          value={note.title}></input>

          <textarea onChange={handleChange} name="content" 
          className="inputs" placeholder="Content" 
          value={note.content}></textarea>

          <button><PostAddIcon /></button>
        </form>

    </div>
    );
}
 
export default Input;