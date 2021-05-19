import { FC } from 'react';
import TodoItem from './TodoItem';

import { Todo } from '../../models/Todo';

import classes from './Todos.module.css';

const Todos: FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.list}>
      {props.items.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, todo.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
