import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./addTodo.css";

function AddTodo({ addNewTodo }) {
  const [todoName, setTodo] = useState("");
  const onChangeInputVal = (event) => {
    setTodo(event.target.value);
  };
  const onEnterPress = (event) => {
    if (event.charCode === 13) {
      addNewTodo({
        title: todoName,
      });
      setTodo("");
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const inputRef = useRef(null);

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      onChange={onChangeInputVal}
      onKeyPress={onEnterPress}
      name="text"
      value={todoName}
      ref={inputRef}
    />
  );
}


AddTodo.propTypes = {
  title: PropTypes.string,
  addNewTodo: PropTypes.func
}

export default React.memo(AddTodo);