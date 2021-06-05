import {
  ADD_TODO,
  TOGGLE_TODO,
  TOGGLE_ALL_TODOS,
  REMOVE_TODO, UPDATE_TODO,
  CLEAR_COMPLETED_TODOS
} from '../actions'

const todosReducer = (state = [], { type, payload }) => {

  switch (type) {

    case ADD_TODO:
      return (payload.title.trim())
        ? [
          {
            id: payload.id,
            title: payload.title,
            completed: false
          },
          ...state
        ]
        : state

    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === payload.id)
          ? { ...todo, completed: payload.completed }
          : todo
      )

    case TOGGLE_ALL_TODOS:
      return state.map(todo => {
        todo.completed = payload.completed;
        return todo;
      }
      )

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== payload.id)

    case UPDATE_TODO:
      return state.map(todo =>
        (todo.id === payload.id && payload.title.trim())
          ? { ...todo, title: payload.title }
          : todo
      )

    case CLEAR_COMPLETED_TODOS:
      return state.filter(todo =>
        (todo.completed)
          ? !todo.completed
          : todo
      )

    default:
      return state
  }

}

export default todosReducer;