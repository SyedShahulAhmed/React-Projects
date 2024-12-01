import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

  return (
    <div>
        <div className='w-full flex justify-between items-center font-semibold '>
        <div className='flex items-center gap-2'>
        <img onClick={()=> navigate(-1)} src={assets.arrow_left} alt="" className='w-8 bg-black p-2 rounded-2xl'/>
        <img onClick={()=> navigate(1)} src={assets.arrow_right} alt="" className='w-8 bg-black p-2 rounded-2xl'/>
        </div>
        <div className='flex items-center gap-4'>
        <p className='bg-white text-sm text-black px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Preminum</p>
        <p className='bg-black px-3 py-1 rounded-2xl text-sm cursor-pointer'><a href="https://play.google.com/store/apps/details?id=com.spotify.music&pcampaignid=web_share">Install App</a></p>
        <p className='bg-blue-600 text-black w-7 h-7 rounded-full flex items-center justify-center'>S</p>
        </div>
        </div>
        <div className='flex items-center gap-2 mt-4 '>
        <p className='bg-white text-black px-4 py-1 rounded-2xl font-semibold cursor-pointer'>All</p>
        <p className='bg-black text-white px-4 py-1 rounded-2xl font-semibold cursor-pointer'>Music</p>
        <p className='bg-black text-white px-4 py-1 rounded-2xl font-semibold cursor-pointer'>Podcast</p>
        </div>
    </div>
  )
}

export default Header