import NewTodo from './components/NewTodo/NewTodo';
import Todos from './components/Todos/Todos';

import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NewTodo />
      <Todos />
    </Provider>
  );
};

export default App;
