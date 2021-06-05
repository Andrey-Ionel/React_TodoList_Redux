import { createStore } from "redux";
import todosReducer from "./reducer";

export default createStore(todosReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__());