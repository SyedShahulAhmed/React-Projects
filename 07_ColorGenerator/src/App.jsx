import { useState } from 'react'
import Color from './components/Color'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Color/>
   </div>
  )
}

export default App
