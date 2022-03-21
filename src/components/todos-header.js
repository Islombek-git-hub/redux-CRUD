import React, { useSelector } from 'react-redux';




const TodosHeader = () => {
    const todos = useSelector(state => state.todos)
    
    return (
        <div className="card-header">
            <h4>Todos: {todos.length}</h4>
        </div>
    );
}

export default TodosHeader;
