import React from "react";

import AddTodo from "../binding/AddTodo";
import ListTodo from "../binding/ListTodo";
import Footer from "../binding/FilterTodos";



export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1 className="todo-title">Todos</h1>

      <ListTodo />

      <AddTodo />

      <Footer />
    </div>
  )
  
};