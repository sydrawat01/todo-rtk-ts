import { FC } from 'react';
import classes from './TodoItem.module.css';

const TodoItem: FC<{ text: string; onRemoveTodo: () => void }> = (props) => {
  return (
    <div className={classes.todo}>
      <li>{props.text}</li>
      <button onClick={props.onRemoveTodo}>X</button>
    </div>
  );
};

export default TodoItem;
