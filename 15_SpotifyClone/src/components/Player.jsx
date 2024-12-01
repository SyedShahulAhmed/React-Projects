import React, { useContext } from "react";
import { assets } from "../assets/assets";
import  { PlayerContext } from "../context/PlayerContext";

const Player = () => {

  const {SeekBar,Track,SeekBg,PlayStatus,play,pause,Time,Previous,Next,SeekSong,Shuffle} = useContext(PlayerContext)

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img src={Track.image} alt="" className="w-12" />
        <div>
          <p>{Track.name}</p>
          <p>{Track.desc}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto ">
        <div className="flex gap-4 ">
            <img  src={assets.shuffle_icon} alt="" className="w-4 cursor-pointer" onClick={Shuffle}/>
            <img src={assets.prev_icon} alt="" className="w-4 cursor-pointer" onClick={Previous}/>
            {PlayStatus
            ? 
            <img onClick={pause} src={assets.pause_icon} alt="" className="w-4 cursor-pointer" /> :
            <img onClick={play} src={assets.play_icon} alt="" className="w-4 cursor-pointer" />
          }
            <img src={assets.next_icon} alt="" className="w-4 cursor-pointer" onClick={Next}/>
            <img src={assets.loop_icon} alt="" className="w-4 cursor-pointer" />
        </div>
        <div className="flex items-center gap-5">
            <p>{Time.CurrentTime.minute}:{Time.CurrentTime.second}</p>
            <div className="w-[60vw] max-w-[500px]
            bg-gray-400 rounded-full cursor-pointer" onClick={SeekSong} ref={SeekBg}>
                <hr className="h-1 border-none w-0 bg-green-800 rounded-full" ref={SeekBar}/>
            </div>
            <p>{Time.TotalTime.minute}:{Time.TotalTime.second}</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img src={assets.plays_icon} alt="" className="w-4"/>
        <img src={assets.mic_icon} alt="" className="w-4"/>
        <img src={assets.queue_icon} alt="" className="w-4"/>
        <img src={assets.speaker_icon} alt="" className="w-4"/>
        <img src={assets.volume_icon} alt="" className="w-4"/>
        <div className="w-20 bg-slate-50 h-1 rounded
        ">

        </div>
        <img src={assets.mini_player_icon} alt="" className="w-4"/>
        <img src={assets.zoom_icon} alt="" className="w-4"/>
      </div>
    </div>
  );
};

export default Player;
