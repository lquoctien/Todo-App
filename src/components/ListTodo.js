import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from "reactstrap";

import TodoItem from "./TodoItem";

export default function ListTodo({todos, onTodoClick, kindOfFilter}) {

  const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(
          t => t.completed
        );
      case 'SHOW_ACTIVE':
        return todos.filter(
          t => !t.completed
        );
    }
  }
  
  return (
    <div className="todo-list">
      <ListGroup style={{width:"100%"}} flush>
          {getVisibleTodos(todos, kindOfFilter).map((todo,index) =>
            <TodoItem 
              key={todo.id}
              {...todo}
              onClick={() => onTodoClick(todo)}
              
            />
          )}    
      </ListGroup>
    </div>
      
  )
};