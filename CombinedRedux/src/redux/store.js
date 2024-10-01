import { combineReducers, createStore } from "redux";
import counterreducer from "./counterreducer";
import todoreducer from "./todoreducer";

const rootReducer = combineReducers({
  counter: counterreducer,
  todo: todoreducer
});

const store = createStore(rootReducer);

export default store;
