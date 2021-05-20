export type TodoId = string;
export type TodoText = string;

export type Todo = {
  id: TodoId;
  text: TodoText;
};

export type TodoState = { items: Todo[] };
