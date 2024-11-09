import { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  const [Category, setCategory] = useState("general");

  return (
    <div className='bg-gray-700'>
      <Navbar setCategory={setCategory} />
      <News Category={Category} />
    </div>
  );
}

export default App;
