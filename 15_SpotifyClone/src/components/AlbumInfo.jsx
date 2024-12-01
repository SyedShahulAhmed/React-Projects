import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const AlbumInfo = () => {
    const {PlayId}  = useContext(PlayerContext)
    const {id} = useParams()
    const data = albumsData[id]
  return (
    <>
    <Header/>
    <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
    <img src={data.image} alt="" className='w-48 rounded'/>
    <div className='flex flex-col'>
    <p>Playlist</p>
    <h1 className='text-5xl font-bold mb-4 md:text-7xl'>{data.name}</h1>
    <h2 >{data.desc}</h2>
    <p className='mt-1'>
        <img src={assets.spotify_logo} alt="" className='inline-block w-5 h-5 mx-2'/>
        <b>Spotify</b>
        - 1,233,393 likes
         <b>15 songs, </b>
        about 1 hr 30 min
    </p>
    </div>
    </div>
    <div className='grid grid-cols-2 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p className='hidden sm:block'>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img src={assets.clock_icon} alt="" className='m-auto w-4'/>
    </div>
    <hr />
    {
        songsData.map((item,key) =>(
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer' onClick={() => PlayId(item.id)}>
                <p className='text-white text-sm md:text-md'>
                    <b className='mr-4  text-[#a7a7a7]'>{key+1}</b>
                    <img src={item.image} alt="" className='inline-block mr-5 w-10 '/>
                    {item.name}
                </p>
                <p className='text-sm  hidden sm:block'>{data.name}</p>
                <p className='text-sm hidden sm:block'>3 days ago</p>
                <p className='text-sm   md:ml-0 text-center'>{item.duration}</p>
            </div>
        ))
    }
    </>
  )
}

export default AlbumInfo