import { FC, FormEvent, useRef } from 'react';
import classes from './NewTodo.module.css';

const NewTodo: FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitFormHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredValue = inputRef.current!.value;
    //basic validation
    if (enteredValue.trim().length === 0) return;
    props.onAddTodo(enteredValue);
  };
  return (
    <form onSubmit={submitFormHandler} className={classes.form}>
      <label htmlFor="tod">
        <h1>Enter a new task</h1>
      </label>
      <input id="todo" type="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
