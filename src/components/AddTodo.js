import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from "reactstrap";

import plusImg from '../img/plus.png'

export default function AddTodo({onAddClick}){
  const [text, setText] = useState('')
  const [nextTodoId, setNexTodoId] = useState(0);

  let url = plusImg;
  
  return (
    <Container className="text-center my-3" >
      <Row>
        <Col>
            <input 
              className="add-todo__input"
              type='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
              />
        
            <button 
              className="add-todo__btn"
              onClick={() => {
                text && onAddClick({text, id: nextTodoId, completed: false})
                setText('')
                setNexTodoId(nextTodoId + 1)
              }}
            >
              <img src= {url} width={40} alt='add-button'/>
            </button>
          </Col>
      </Row>
             
    </Container>
  );
};