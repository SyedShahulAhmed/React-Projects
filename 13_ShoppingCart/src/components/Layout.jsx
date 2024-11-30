import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import CartTab from './CartTab'
import { useSelector } from 'react-redux'
const Layout = () => {
  const stausCart  = useSelector(store => store.cart.tabStatus)
  return (
    <div className='bg-gray-800 '>
      <main className='w-[1200px] max-w-full m-auto p-5 text-white'>
        <Header />
        <Outlet />
      </main>
      <CartTab/>
    </div>
  )
}

export default Layout