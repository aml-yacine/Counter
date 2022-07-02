import { useState } from "react";
import { useSelector ,useDispatch } from "react-redux";
import TodoForm from "../../component/todo/TodoForm";
import TodoList from "../../component/todo/TodoList";
import './Todo.css';
// import {addToDoAction, deleteToDoAction} from '../../redux';
import { addtoDo , deletetoDo} from "../../redux/todoSlice";

function Todo() {

  const todos = useSelector(state =>state.todo.todos);
  console.log(todos ) 

   const dispatch = useDispatch();

  const addTodoAction = (task) => {
    // dispatch(addToDoAction(task));
    dispatch(addtoDo(task))
  };

  const deleteTodoAction = (index) => {
    // dispatch(deleteToDoAction(index))
    dispatch(deletetoDo(index));
  }

  return (
    <div  className="text-center py-2 my-5 todo-wrapper container">
      <TodoForm addTodo={addTodoAction} />
      <TodoList todos={todos} deleteTodo={deleteTodoAction} />
    </div>
  );
}

export default Todo;
