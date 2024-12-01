import React from 'react'

const ArtistCard = ({name,image}) => {
  return (
    <div className='min-w-[220px] hover:bg-[#ffffff26] p-2 rounded mx-3'>
        <img src={image} alt="" className='h-[200px] w-[200px] rounded-full mb-2 object-cover'/>
        <p className='font-semibold'>{name}</p>
        <p className='text-slate-400'>Artist</p>

    </div>
  )
}

export default ArtistCard