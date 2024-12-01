import React from 'react'

const Authorcard = ({img, name, job, publish}) => {
  return (
      <div className='max-w-[300px] mx-auto my-8 bg-slate-200 p-8 rounded-lg shadow-lg hover:shadow-xl'>
      <img src={img} alt="" className='w-28 h-28 mx-auto '/>
     <div className='flex flex-col justify-center items-center py-3 gap-2'>
     <p className='text-lg font-bold '>{name}</p>
      <p className='text-lg font-bold '>{job}</p>
      <p><strong>{publish}</strong> Articles Published</p>
     </div>
      </div>
  )
}

export default Authorcard