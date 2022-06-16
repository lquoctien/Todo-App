import { connect } from "react-redux";

import ListTodo from "../components/ListTodo";

import { onTodoClick } from "../redux/todo";

const mapStateToProps = (state) => {
  return {
    todos: state.todo.items,
    kindOfFilter: state.filter.kindOfFilter
  }
}

const mapActionsToProps = {
  onTodoClick,
}

export default connect(mapStateToProps, mapActionsToProps)(ListTodo);