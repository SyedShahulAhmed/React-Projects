import React, { useEffect, useState } from 'react'

const Color = () => {
    const [Type,setType] = useState('hex')

    const [color,setcolor] = useState('#212121')

    useEffect(()=>{
        if(Type === 'rgb'){
            GenerateRgb
        }
        else{
            GenerateHex
        }
    },setType)


    function GenerateHex(){
        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

        let HexColor = ''

        for (let i = 0; i < 6; i++) {
            HexColor += Math.floor(Math.random()*6)
        }
        console.log(HexColor);
        setcolor(`#${HexColor}`)
    }
    function GenerateRgb(){
        const r = Math.floor(Math.random()*256)
        const g = Math.floor(Math.random()*256)
        const b = Math.floor(Math.random()*256)

        setcolor(`rgb(${r},${g},${b})`)
    }

  return (
    <div className='w-full h-screen 
    flex justify-center items-center flex-col ' style={{background:color}}>
       <div className='flex justify-center items-center b '> 
       <button onClick={()=>setType('hex')} className='bg-[#D4F6FF] w20 rounded-full m-3 text-black p-3 font-bold'>HEX</button>
        <button onClick={()=>setType('rgb')} className='bg-[#D4F6FF] w20 rounded-full m-3 text-black p-3 font-bold'>RGB</button>
       </div>
       <div>
       <button onClick={Type === 'hex' ? GenerateHex : GenerateRgb} className='bg-[#FFDDAE] w20 rounded-lg m-3 text-black font-semibold p-3'>Generate</button>
       </div>
        <div className='text-center bg-transparent p-3 rounded-lg border-2 border-black  shadow-lg text-3xl '>
            <h1 className='mb-2 text-4xl font-bold bg-gradient-to-r from-red-500
            to-yellow-300 text-transparent bg-clip-text'>{Type=== 'rgb' ? 'RGB' : 'Hex'}</h1>
            <h1 className='
                  text-5xl font-extrabold bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text
                  p-2
            '>{color}</h1>
        </div>
    </div>
  )
}

export default Color