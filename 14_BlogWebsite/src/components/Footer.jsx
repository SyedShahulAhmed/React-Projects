import React from 'react'
import linkedin from '../assets/Icons/linkedin.png'
import github from '../assets/Icons/github.png'
import Xcom from '../assets/Icons/X.png'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='bg-[#D0CDD7] w-full flex flex-col justify-between items-center px-8 gap-2 sm:px-14 md:px-16 lg:py36 py-4  lg:flex-row mt-5'>
        <div>
        <h1 className='text-md font-semibold'>Designed and Developed by <span className='text-pink-600 font-bold'>Shahul Ahmed</span></h1>
        </div>
        <div>
            <p className='text-md font-bold'>Copyright © 2024 SA</p>
        </div>
        <div className='mt-2'>
            <ul className='flex justify-center gap-8'>
             <Link to={'https://x.com/ShahulAhmed17?t=fc_t7cu32MB3FFu8ggr-Bg&s=08"'}><li><img src={Xcom} alt="" className='w-6 h-6' /></li></Link>
                <Link to={'https://github.com/SyedShahulAhmed'}><li><img src={github} alt="" className='w-6 h-6' /></li></Link>
                <Link to={'https://www.linkedin.com/in/shahul-ahmed/'}><li><img src={linkedin} alt="" className='w-6 h-6' /></li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Footer