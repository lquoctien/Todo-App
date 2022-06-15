import { useRef } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from "reactstrap";

import plusImg from '../img/plus.png'

export default function TodoAdd({onAddClick}){
  const textInput = useRef(null);
  let url = plusImg;
  const addToDo = () => {
    textInput.current.value && onAddClick(textInput.current.value);
    textInput.current.value = null
  }
  
  return (
    <Container className="text-center my-3" >
      <Row>
        <Col>
            <input 
              className="add-todo__input"
              ref={textInput}
              />
        
            <button 
              className="add-todo__btn"
              onClick={addToDo}
            >
              <img src= {url} width={32} alt='add-button'/>
            </button>
          </Col>
      </Row>
             
    </Container>
  );
};
