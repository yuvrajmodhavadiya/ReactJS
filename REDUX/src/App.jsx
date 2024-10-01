// App.js
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./TodoList";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
