import { FC, useContext } from 'react';
import TodoItem from './TodoItem';

import { TodoContext } from '../../store/todo-context';

import classes from './Todos.module.css';

const Todos: FC = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <ul className={classes.list}>
      {todoCtx.items.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          onRemoveTodo={todoCtx.removeTodo.bind(null, todo.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
