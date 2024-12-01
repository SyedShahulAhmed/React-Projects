import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import AlbumInfo from './AlbumInfo'
import { albumsData } from '../assets/assets'

const Song = () => {

  const Refer = useRef()
  const location = useLocation()

  const isAlbum = location.pathname.includes("album")

  const AlbumId = isAlbum ? location.pathname.slice(-1) : ""

  const BgColor = albumsData[Number(AlbumId)].bgColor

  useEffect(() =>{
    if(isAlbum){
      Refer.current.style.background = `linear-gradient(${BgColor},#121212)`
    }
    else{
       Refer.current.style.background =`#121212`
    }
  })

  return (
    <div ref={Refer} className='w-full md:mt-2  px-6 py-3 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-1'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/album/:id' element={<AlbumInfo/>}/>
      </Routes>
    </div>
  )
}

export default Song