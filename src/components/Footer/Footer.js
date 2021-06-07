import React from "react";
import "./footer.css";
import FooterFilterButton from "../FooterFilterButton/FooterFilterButton"
import { FilterStatus } from "../../utils/enums";

const FilterConfig = [
  {
    title: "All",
    itemEnum: FilterStatus.all,
  },
  {
    title: "Active",
    itemEnum: FilterStatus.active,
  },
  {
    title: "Completed",
    itemEnum: FilterStatus.completed,
  }
];

function Footer({
  clearCompletedTodos,
  uncompletedTodosCount,
  setFilter,
  hasCompleted,
  filter
}) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{uncompletedTodosCount} </strong>
        items left
      </span>
      <ul className="filters">
        {
          FilterConfig.map(
            configItem =>
              <FooterFilterButton
                key={configItem.itemEnum}
                isSelected={configItem.itemEnum === filter}
                itemEnum={configItem.itemEnum}
                title={configItem.title}
                setFilter={setFilter}
              />
          )
        }
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

export default Footer;