import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0)

    const decrementCount = () => {
      setCount(prevState => (prevState - 1))
    }

    const incrementCount = () => {
      setCount(prevState => (prevState + 1))
    }

  return(
    // <>
    //  <button onClick={()=> setCount(count-1)}>-</button>
    //  <span>{count}</span>
    //  <button onClick={()=> setCount(count+1)}>+</button>
    // </>
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App;
