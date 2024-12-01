import React, { useContext } from 'react'
import SideBar from './components/SideBar'
import Player from './components/Player'
import Song from './components/Song'
import { PlayerContext } from './context/PlayerContext'

function App() {

  const {AudioRef, Track} = useContext(PlayerContext)

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
      <SideBar/>
      <Song/>
      </div>
      <Player/>
      <audio ref={AudioRef} src={Track.file} preload='auto'></audio>
    </div>
  )
}

export default App
