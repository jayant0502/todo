import { ADD_TODO, UPDATE_TODO, DELETE_TODO ,ADD_TODOS } from '../src/Action';

const initialState = {
  todos: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

      case ADD_TODOS:
        return {
          ...state,
          todos: action.payload,
        };
  
    
    default:
      return state;
  }
};

export default TodoReducer;
