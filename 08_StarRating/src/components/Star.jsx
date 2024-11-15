import React from 'react'
import { useState } from 'react'
import Emoji from './Emoji'
import {FaStar} from 'react-icons/fa'

const Star = ({Stars = 5}) => {

    const [Rate,setRate] = useState(0)

    const [Hover,setHover] = useState(0)

    function Rating(currentIndex){
        setRate(currentIndex)
    }

    function MouseEnter(currentIndex){
        setHover(currentIndex)
    }

    function MouseLeave(){
        setHover(Rate)
    }
   return (
    <div className='flex justify-center items-center h-screen '>
<div className='flex justify-center  items-center flex-col gap-10 border-2 border-black p-6 bg-blue-300'>
    <Emoji Rate={Rate} Hover={Hover}/>
<div className='flex justify-center items-center'>
{
    [...Array(Stars)].map((_,index)=>{
        index += 1
            return <FaStar
            
            key={index}
            className={index <= (Hover || Rate) ? 'text-yellow-300':'text-black'}
            onClick={()=>Rating(index)}
            onMouseMove={()=>MouseEnter(index)}
            onMouseLeave={()=>MouseLeave()}
            size={50}
            />
    })

}
</div>
</div>
    </div>
  )
}

export default Star