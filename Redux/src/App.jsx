
import './App.css'
import Navbar from './Components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, multiply, incrementByAmount } from './Redux/Counter/counter'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar/>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={()=> dispatch(increment())}>+</button>
        <button onClick={()=> dispatch(multiply())}>*</button>
        <button onClick={()=> dispatch(incrementByAmount(5))}>+ by 5</button>

      </div>
    </>
  )
}

export default App
