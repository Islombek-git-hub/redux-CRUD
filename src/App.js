import TodoItems from "./components/todo-items";
import TodosFooter from "./components/todos-footer";
import TodosForm from "./components/todos-form";
import TodosHeader from "./components/todos-header";
import Counter from "./components/Counter";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { initializeTodos } from "./actions/todos";
function App() {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(initializeTodos(JSON.parse(localStorage.getItem("todos"))));
  }, []);
  return (
    <div className="container">
      <h1 className="my-2 text-center">Redux-CRUD</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <TodosHeader />
            <TodosForm />
            <TodoItems />
            <TodosFooter />
            {/*  */}
            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
