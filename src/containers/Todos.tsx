import * as React from "react";

import { TodoContext } from "../context/todoContext";
import Todo from "../components/Todo";

const Todos = () => {
  const { todos, updateTodo } = React.useContext(TodoContext) as unknown as ContextType;
  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
      ))}
    </>
  );
};

export default Todos;