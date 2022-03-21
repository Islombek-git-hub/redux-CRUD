import {useRef}  from 'react'
import { addTodo } from '../actions/todos' 
import {useDispatch} from 'react-redux'
import { v4 as uuidv4} from 'uuid'

const TodosForm = () => {
  const inputRef = useRef(null)
  const formRef = useRef(null)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo({
      id: uuidv4(),
      name: inputRef.current.value,
      isDone: false
    }))
    formRef.current.reset()
  }
    return (
    <form className="card-body d-flex align-items-center justify-content-between" onSubmit={handleSubmit} ref={formRef}>
        <div>
          <input ref={inputRef} type="text" className="form-control" placeholder="add..." />
        </div>
        <button className="btn btn-success ms-1">add</button>
    </form>
    );
}

export default TodosForm;
