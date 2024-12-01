import React from 'react'
const ServiceCard = ({image, heading, para }) => {
  return (
    <div className='max-w-[400px]  px-3 py-8 mx-5 border-2 border-gray-300 md:mx-auto rounded-lg shadow-lg hover:shadow-xl'>
    <img src={image} alt="" className='w-[50%] mx-auto my-3'/>
    <h1 className='text-xl font-bold '>{heading}</h1>
    <p className='tracking-wide text-justify py-2'>{para}</p>
   </div>
  )
}

export default ServiceCard