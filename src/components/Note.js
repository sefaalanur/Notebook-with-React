import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Col from "react-bootstrap/Col";

const Note = (props) => {
const handleClick = () =>{
    props.onDelete(props.id);
}
    return (


          <Col sm={6} className="notes">
          <h4>{props.title}</h4>
          <p>{props.content}</p>
          <button onClick={handleClick}><DeleteForeverIcon /></button>
          </Col>


    );
}

export default Note;