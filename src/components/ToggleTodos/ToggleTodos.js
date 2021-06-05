import React, { useState } from "react";
import "./toggleTodos.css";

function ToggleTodos({ toggleAllTodos, isCompletedAll }) {
  const [checked, setChecked] = useState(isCompletedAll);
  const onChangeCheckBoxAllVal = (event) => {
    setChecked(event.target.checked);
    if (event) {
      toggleAllTodos(event.target.checked);
    }
  };

  return (
    <>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={checked}
        onChange={onChangeCheckBoxAllVal}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
}

export default React.memo(ToggleTodos);