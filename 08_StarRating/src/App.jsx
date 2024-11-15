import { useState } from 'react'
import Star from './components/Star'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Star Stars={5} />
    </div>
  )
}

export default App
