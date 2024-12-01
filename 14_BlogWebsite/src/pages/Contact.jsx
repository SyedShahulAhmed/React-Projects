import React from 'react'
import contact from '../assets/Icons/Contact.png'
const Contact = () => {
  return (
   <div className='max-w-[1240px] mx-auto '>
    <div className='grid lg:grid-cols-2 mt-8'>
      <div>
        <img src={contact} alt="" className='p-8'/>
      </div>
      <div className='flex items-center bg-transparent flex-col justify-center gap-8'>
      <h1 className='text-3xl font-bold text-center tracking-wider uppercase'>Contact Us</h1>
         <form className='flex justify-center flex-col gap-2 mx-4 w-full'>
          <input type="text" name="" id="" className='text-lg p-2 w-[70%] mx-auto border-2 border-purple-600 bg-transparent rounded-md mb-1 ' placeholder='Enter name'/>
          <input type="email" name="" id="" className='text-lg p-2 w-[70%] mx-auto border-2 border-purple-600 bg-transparent rounded-md mb-1 ' placeholder='Enter email'/>
          <textarea name="" id="" cols="30" rows="5" className='resize-none w-[70%] mx-auto border-2 border-purple-600 bg-transparent p-2 text-lg rounded-md mb-1 ' placeholder='Enter message'></textarea>
          <button type="submit"
          className='w-[30%] bg-purple-400 mx-auto py-2 my-4 rounded-lg'>
            Send
          </button>
         </form>
      </div>
    </div>
   </div>
  )
}

export default Contact