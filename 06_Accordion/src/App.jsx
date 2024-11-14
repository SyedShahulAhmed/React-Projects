import { useState } from 'react'
import Accordion from './components/Accordion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen flex justify-center bg-gradient-to-r from-rose-100 to-teal-100 items-center overflow-hidden'>
      <Accordion/>
    </div>
  )
}

export default App
