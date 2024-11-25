import React, {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'


const Balance = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transactions => transactions.amount)
  const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2)
  return (
    <div>
    <h2 className="font-light pt-4">
      Your Balance :{" "}
      <span className={`font-bold text-2xl ${total < 0 ? 'text-red-500' : 'text-green-500'}`}>
        {total}
      </span>
    </h2>
  </div>  
  )
}

export default Balance