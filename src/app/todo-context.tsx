import { createContext, FC, useState } from 'react';
import { Todo } from '../models/Todo';

import { v4 as uuidv4 } from 'uuid';

type TodoContextTypeObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = createContext<TodoContextTypeObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

export const TodoContextProvider: FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = { id: uuidv4(), text };
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };
  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const contextValue: TodoContextTypeObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};
