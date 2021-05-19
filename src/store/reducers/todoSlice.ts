import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TodoId, TodoText, TodoState } from '../../models/Todo';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  items: [],
} as TodoState;

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state: TodoState, action: PayloadAction<TodoText>) {
      const newTodo = { id: uuidv4(), text: action.payload };
      state.items = state.items.concat(newTodo);
    },
    removeTodo(state: TodoState, action: PayloadAction<TodoId>) {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;
