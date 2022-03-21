import TodoItem from "./todo-item";
import {useSelector} from'react-redux'



const TodoItems = () => {
    const todos = useSelector(state => state.todos)
    return (
        <ul className="list-group list-group-flush">
            { todos.length > 0 ? 
            todos.map((item)=>{
                return <TodoItem key={item.id} name={item.name} id={item.id} isDone={item.isDone}/>
            })
        :
        <h5 className="text-center my-2">Todos not created yet</h5>
        }
            
      </ul>
    );
}

export default TodoItems;
