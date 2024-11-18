import { useState } from 'react'
import Todo from './components/Todo'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='flex justify-center m-[100px]'>
    <Todo />
   </div>
  )
}

export default App
