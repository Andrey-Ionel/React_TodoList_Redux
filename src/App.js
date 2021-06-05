import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addNewTodoAction,
  toggleTodoAction,
  toggleAllTodosAction,
  removeTodoAction,
  updateTodoAction,
  clearCompletedTodosAction
} from "./store/actions/";
import AddTodo from "./components/AddTodo/AddTodo";
import { ListTodos } from "./components/ListTodos/ListTodos";
import Footer from "./components/Footer/Footer";
import ToggleTodos from "./components/ToggleTodos/ToggleTodos";
import "./styles.css";

function App(props) {
  const { todos,
    addNewTodo,
    toggleTodo,
    toggleAllTodos,
    removeTodo,
    updateTodo,
    clearCompletedTodos } = props;

  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }
    if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  const uncompletedTodosCount = todos.reduce((count, todo) => {
    if (!todo.completed) {
      count++;
    }
    return count++;
  }, 0);

  const completedTodosCount = todos.reduce((count, todo) => {
    if (todo.completed) count++;
    return count;
  }, 0);

  const isCompletedAll = todos.length === completedTodosCount;
  const hasCompleted = completedTodosCount > 0;
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <AddTodo addNewTodo={addNewTodo} />
      </header>
      <section className="main">
        {todos.length > 0 && (
          <ToggleTodos
            toggleAllTodos={toggleAllTodos}
            isCompletedAll={isCompletedAll}
          />
        )}
        <ListTodos
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </section>
      {todos.length > 0 && (
        <Footer
          filter={filter}
          setFilter={setFilter}
          clearCompletedTodos={clearCompletedTodos}
          uncompletedTodosCount={uncompletedTodosCount}
          hasCompleted={hasCompleted}
        />
      )}
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state,
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNewTodo: todo => dispatch(addNewTodoAction(todo)),
  toggleTodo: (id, completed) => dispatch(toggleTodoAction(id, completed)),
  toggleAllTodos: completed => dispatch(toggleAllTodosAction(completed)),
  removeTodo: id => dispatch(removeTodoAction(id)),
  updateTodo: (id, title) => dispatch(updateTodoAction(id, title)),
  clearCompletedTodos: () => dispatch(clearCompletedTodosAction()),
})

export default React.memo(connect(mapStateToProps,
  mapDispatchToProps)(App));