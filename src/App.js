import "./styles.css";
import React, { useState } from "react";
import CurrentDate from "./components/Date";
import Input from "./components/Input";
import Note from "./components/Note";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [isClicked,setIsClicked] = useState(false);
  const clicked = () => {
    setIsClicked(true);
  }
  const [notes,setNotes] = useState([]);
  const addNote = (newNote) => {
      setNotes(preValue => { 
        return [...preValue, newNote];
      })};
   
      function deleteNote(id) {
        setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
      }
    let createArea =  (
      <h1 onClick={clicked} className="starter">
       Start adding new notes...
      </h1>
    );
    if (isClicked === true) {
      createArea = <Input onAdd={addNote} />;
    }
     
  return (

    <Container >
      <Row>
        <Col>
               {createArea}

        </Col>
        <Col>
               <CurrentDate />
        </Col>
      </Row>
      <Row className="row">
      {notes.map((myNote,index) => {
        return ( <Note
          key={index}
          id={index}
          title={myNote.title}
          content={myNote.content} 
          onDelete={deleteNote}
          /> );}
      )}
      </Row>
    </Container>

  );
}
