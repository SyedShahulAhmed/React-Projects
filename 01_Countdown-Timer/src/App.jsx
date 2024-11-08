import { useState } from 'react'
import Timer from "./Timer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center  h-screen bg-gradient-to-r from-blue-800 to-indigo-900'>
      <Timer duration={100 * 24 * 60 * 60 * 1000}/>
    </div>
  )
}

export default App
