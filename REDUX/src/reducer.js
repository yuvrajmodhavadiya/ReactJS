// reducers.js
const initialState = {
  todos: []
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload,
            completed: false
          }
        ]
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };
    case "EDIT_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        )
      };
    default:
      return state;
  }
};
export default todoReducer;
