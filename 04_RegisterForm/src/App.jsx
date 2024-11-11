import { useState } from 'react'
import Login from './components/Form/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Login />
    </div>
  )
}

export default App
