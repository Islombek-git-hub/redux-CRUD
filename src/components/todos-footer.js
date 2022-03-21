import { useSelector } from "react-redux";

const TodosFooter = () => {
    const todoItems = useSelector(state => state.todos)
    const handleSave = ()=>{
        localStorage.setItem('todos', JSON.stringify(todoItems))
    }
    return (
        <div className="card-footer">
            <button className="btn btn-primary" onClick={handleSave}>save</button>
        </div>
    );
}

export default TodosFooter;
