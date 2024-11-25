import React, { useContext } from 'react'
import {GlobalContext} from '../Context/GlobalState'

import Transaction from './Transaction'

const TransactionList = () => {

  const {transactions} = useContext(GlobalContext)

  return (
    <div className='flex flex-col justify-center items-center mt-8 w-[300px] mx-auto'>
        <h3 className='text-xl md:text-2xl font-semibold pb-3 border-b-2 w-[60%] border-b-gray-400 text-center mb-6 tracking-wide'>History</h3>
        <ul className='flex flex-col justify-center items-center'>
          {transactions.map(transactions => (
            <Transaction key={transactions.id} transactions={transactions} />))}
        </ul>
    </div>
  )
}

export default TransactionList