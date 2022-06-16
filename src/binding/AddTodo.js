import { connect } from "react-redux";

import AddTodo from '../components/AddTodo';
import { onAddClick } from "../redux/todo";

const mapStateToProps = (state) => {
  return {
    todos: state.todo.items
  }
}

const mapActionsToProps = {
  onAddClick
}

export default connect(mapStateToProps, mapActionsToProps)(AddTodo);