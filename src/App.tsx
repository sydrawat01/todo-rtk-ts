import NewTodo from './components/NewTodo/NewTodo';
import Todos from './components/Todos/Todos';

import { TodoContextProvider } from './store/todo-context';

const App = () => {
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
};

export default App;
