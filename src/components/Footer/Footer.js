import React from "react";
import "./footer.css";

function Footer({
  clearCompletedTodos,
  uncompletedTodosCount,
  filter,
  setFilter,
  hasCompleted

}) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{uncompletedTodosCount} </strong>
        items left
      </span>
      <ul className="filters">
        <li>
          <a
            href="/"
            className={filter === "all" ? "selected" : ""}
            onClick={(e) => {
              e.preventDefault();
              setFilter("all");
            }}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={filter === "active" ? "selected" : ""}
            href="/active"
            onClick={(e) => {
              e.preventDefault();
              setFilter("active");
            }}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={filter === "completed" ? "selected" : ""}
            href="/completed"
            onClick={(e) => {
              e.preventDefault();
              setFilter("completed");
            }}
          >
            Completed
          </a>
        </li>
      </ul>
      {hasCompleted && (
        <button
          className="clear-completed"
          onClick={() => clearCompletedTodos()}
        >
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default React.memo(Footer);