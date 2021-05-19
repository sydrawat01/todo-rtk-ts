import { v4 as uuidv4 } from 'uuid';

export class Todo {
  id: string;
  text: string;

  constructor(text: string) {
    this.id = uuidv4();
    this.text = text;
  }
}

export type TodoId = string;
export type TodoText = string;
export type TodoState = { items: Todo[] };
