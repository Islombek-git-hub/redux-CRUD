import { useDispatch, useSelector } from 'react-redux';

import { inc, dec } from '../actions/count';

const Counter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h2 className='mt-5'>Count: {count.value}</h2>
            <button className="btn btn-success" onClick={()=> {dispatch(inc())}}>INC+</button>
            <button className="btn btn-danger ms-2" onClick={()=> {dispatch(dec())}}>DEC-</button>
        </div>
    );
}

export default Counter;
