import { useDispatch } from "react-redux";
import { removeTodo, markTodo } from "../actions/todos";

const TodoItem = ({name, id, isDone}) => {
    const dispatch = useDispatch()

    const handleMarkTodo = (e) => {
        dispatch(
            markTodo({
            id,
            name,
            isDone: e.target.checked,
            })
        )
    }

    return (
        <li className="list-group-item d-flex align-items-center justify-content-between">
            <div>
                <input type="checkbox" className="form-check-input me-2" onChange={handleMarkTodo}/>
                <label className={`form-check-label ${ isDone ? 'text-decoration-line-through' : ''}`}>{name}</label>
            </div>
            <button className="btn btn-danger" onClick={()=> dispatch(removeTodo(id))}>x</button>
        </li>
    );
}

export default TodoItem;
