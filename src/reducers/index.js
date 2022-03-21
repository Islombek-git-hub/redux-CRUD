import { combineReducers } from "redux";
import todos from "./todos";
import count from "./count";

const rootReducers = combineReducers({
    todos,
    count

})
export default rootReducers;