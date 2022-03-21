import { TODO } from "../constants/todos";

const initialState = [];

function todos(state = initialState, action) {
  switch (action.type) {
    case TODO.ADD_TODO:
      return [...state, action.payload];
    case TODO.REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload.id);
    case TODO.MARK_DONE:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            isDone: action.payload.isDone,
          };
        } else {
          return item;
        }
      });
    case TODO.INTIALIZE_TODOS:
      return action.payload;
    default:
      return state;
  }
}

export default todos;
