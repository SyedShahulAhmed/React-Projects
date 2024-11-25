import { useContext } from 'react'
import React from 'react'
import {GlobalContext} from '../Context/GlobalState'

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transactions => transactions.amount)

  const income = amounts.filter(item => item > 0).reduce((acc,item) => (acc += item),0)
  .toFixed(2)
  const expense = amounts.filter(item => item < 0).reduce((acc,item) => (acc += item),0)
  .toFixed(2)
  return (
    <div className='flex justify-center  border-2 max-w-[320px] mx-auto mt-8 bg-slate-200'>
        <div className='flex flex-col justify-center items-center  w-[150px] gap-2 py-3'>
            <h1 className='text-xl text-green-500 font-semibold'>Income</h1>
            <p className='text-xl font-semibold text-gray-700'>{income}</p>
        </div>
        <div className='flex flex-col justify-center items-center border-l-2 border-l-gray-300 w-[150px] gap-2 py-3'>
            <h1 className='text-xl text-red-500 font-semibold'>Expense</h1>
            <p className='text-xl font-semibold text-gray-700'>{expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpense