import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <div className=' overflow-hidden'>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
