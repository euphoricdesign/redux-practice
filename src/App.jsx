import { useDispatch, useSelector } from 'react-redux'

import { increment, decrement, incrementBy2 } from './store/slices/counter'


function App() {

  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div className="card">
        count is { counter }
      </div>
      <button onClick={ () => dispatch(increment()) }>
         Increment
      </button>
      <button onClick={ () => dispatch(incrementBy2(2)) }>
         Increment By 2
      </button>
      <button onClick={ () => dispatch(decrement()) }>
         Decrement
      </button>
    </div>
  )
}

export default App
