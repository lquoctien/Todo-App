import React from "react";
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from "reactstrap";

import listAllImg from '../img/listAll.png'
import completedListImg from '../img/check.png'
import nonCompletedListImg from '../img/close.png'

import TodoItem from "./TodoItem";
import TodoAdd from "./TodoAdd";

export default function TodoList() {

  const [nextTodoId, setNexTodoId] = useState(0);
  const [todos, setTodos] = useState([]);
  const [filterTodos, setfilterTodos] = useState([]);

  useEffect(() => {
    filter();
  },[todos])
  
  let allUrl = listAllImg;
  let completedUrl = completedListImg;
  let nonCompletedUrl = nonCompletedListImg;

  const onTodoClick = (item) => {
    setTodos(
      [
        ...todos.slice(0, item.id),
        {
          ...item,
        completed: !item.completed
      },
        ...todos.slice(item.id + 1)
      ]
    )
    filter();
  };

  const onAddClick = (text) => {
    text = text.trim();
    if (!text) {
      return;
    }
    setTodos(
      [
        ...todos, {
          id: nextTodoId,
          text: text,
          completed: false
          }
      ]
    )
    setNexTodoId(nextTodoId + 1);
  };

  const filter = (filter = 'ALL') => {
    if(filter === 'ALL')
    setfilterTodos([...todos]) 
    if(filter === 'COMPLETED')
    setfilterTodos([...(todos.filter((todo) => todo.completed  ))])
    if(filter === 'ACTIVE')
    setfilterTodos([...(todos.filter((todo) => !todo.completed  ))])
  }

  return (
    <div className="todo-app">
      <ListGroup style={{width:"100%"}} flush>
          {filterTodos.map((todo,index) =>
            <TodoItem 
              key={index}
              {...todo}
              onClick={() => onTodoClick(todo)}
              
            />
          )}    
      </ListGroup>
  
      <TodoAdd onAddClick={onAddClick}/>

      <div className="d-flex justify-content-between" style={{width:"60%"}}>
        <button className="button-list" onClick={()=>filter()}>
          <img src= {allUrl} width={25} alt='all-list'/>
        </button>
        <button className="button-list" onClick={()=>filter('ACTIVE')}>
          <img src= {nonCompletedUrl} width={25} height={25} alt='noncompleted-list'/>
        </button>
        <button className="button-list" onClick={()=>filter('COMPLETED')}>
          <img src= {completedUrl} width={25} alt='completed-list'/>
        </button>
      </div>


    </div>
      
  )
};
