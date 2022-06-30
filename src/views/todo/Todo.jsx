import { useState } from "react";
import { useSelector ,useDispatch } from "react-redux";
import TodoForm from "../../component/todo/TodoForm";
import TodoList from "../../component/todo/TodoList";
import './Todo.css';
import {addToDoAction, deleteToDoAction} from '../../redux';

function Todo() {

  const todos = useSelector(state =>state.todos)
  console.log("todos ",todos)

   const dispatch = useDispatch();

  const addTodo = (task) => {
    dispatch(addToDoAction(task));
  };


  const deleteTodo = (index) => {
    dispatch(deleteToDoAction(index))
  }

  return (
    <div  className="text-center py-2 my-5 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
