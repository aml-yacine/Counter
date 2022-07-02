
const TodoList = ({ todos,deleteTodo }) => {
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <ul key={i}>
            <li className="border d-flex p-5 my-5">
            <div className="text d-flex justify-content-between w-100">
             <div className="list_content">
             <p>Title : {todo.title}</p>
              <p>Content : {todo.content}</p>
             </div>
             <div className="list_remove">
            <button className="btn btn-outline-danger" onClick={()=>{deleteTodo(i)}}>Remove</button>
             </div>
            </div>
            </li>
          </ul>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left">
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoList;
