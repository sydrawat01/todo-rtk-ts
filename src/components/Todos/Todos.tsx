import { FC } from 'react';
import TodoItem from './TodoItem';

import {
  useAppSelector,
  useAppDispatch,
  selectTodos,
} from '../../store/hooks/hooks';

import { removeTodo } from '../../store/actions/todoActions';

import classes from './Todos.module.css';

const Todos: FC = () => {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();
  return (
    <ul className={classes.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          onRemoveTodo={() => dispatch(removeTodo(todo.id))}
        />
      ))}
    </ul>
  );
};

export default Todos;
