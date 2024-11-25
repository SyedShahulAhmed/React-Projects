import { useState } from 'react'
import Tracker from './components/Tracker'
import IncomeExpense from './components/IncomeExpense'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './Context/GlobalState'
function App() {
  return (
  <GlobalProvider>
      <div className='flex flex-col justify-center bg-slate-100 mx-5 max-w-[500px] sm:mx-auto my-10 rounded-md shadow-xl'>
      <Tracker/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
    </div>
  </GlobalProvider>
  )
}

export default App
