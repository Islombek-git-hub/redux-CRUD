import { COUNTER } from "../constants/todos";

const initialCount = { value: 0 };

function count(state = initialCount, action) {
  switch (action.type) {
    case COUNTER.INC:
      return {
        ...state,
        value: state.value + 1,
      };
    case COUNTER.DEC:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
}
export default count;
