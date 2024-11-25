import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState'
const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext)
    const[Text,setText] = useState('')
    const[Amount,setAmount] = useState()
    const add = (e) =>{
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),
            text: Text,
            amount: parseInt(Amount)
        }
        addTransaction(newTransaction)
    }
  return (
    <div className='flex flex-col justify-center w-[400px] mx-auto py-4 mb-8 rounded-lg '>
        <h1 className='text-xl font-semibold pb-6 border-b-2 border-b-gray-400 text-center w-[60%] mx-auto tracking-wide'>Add Transaction</h1>
        <form className='flex flex-col justify-center my-5' onSubmit={add}>
            <div className='  px-4 flex justify-center flex-col gap-2'>
                <label htmlFor="text" className='text-lg font-semibold text-black'>Text :</label>
                <input type="text" className='w-[100%] mx-2 bg-transparent border-2 outline-none p-2 rounded-md border-gray-400' placeholder='Enter Text' value={Text} onChange={(e)=> setText(e.target.value)}/>
            </div>
            <div className='py-2 px-4 flex justify-center flex-col gap-2'>
                <label htmlFor="text" className='text-lg font-semibold text-black'>Amount :
                <br />
                 <span className='text-sm font-light text-gray-700'>Negative - Expense / Positive + Income</span>
                </label>
                <input type="text" className='w-[100%] mx-2 bg-transparent border-2  outline-none p-2 rounded-md border-gray-400' placeholder='Enter Amount' value={Amount}
                onChange={(e)=> setAmount(e.target.value)}/>
            </div>
            <button className='bg-gray-600 w-[60%] mx-auto my-4 p-2 rounded-lg text-white'>Add Transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction