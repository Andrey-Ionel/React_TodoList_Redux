export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_ALL_TODOS = 'TOGGLE_ALL_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const CLEAR_COMPLETED_TODOS = 'CLEAR_COMPLETED_TODOS';

export const addNewTodoAction = (payload) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    title: payload.title,
    completed: payload.completed
  }
});

export const toggleTodoAction = (id, completed) => ({
  type: TOGGLE_TODO,
  payload: { id, completed }
});

export const toggleAllTodosAction = (completed) => ({
  type: TOGGLE_ALL_TODOS,
  payload: { completed }
});

export const removeTodoAction = (id) => ({
  type: REMOVE_TODO,
  payload: { id }
});

export const updateTodoAction = (id, title) => ({
  type: UPDATE_TODO,
  payload: { id, title }
});

export const clearCompletedTodosAction = () => ({
  type: CLEAR_COMPLETED_TODOS,
});