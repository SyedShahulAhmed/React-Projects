import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const ContextProvider = (props) => {
  const AudioRef = useRef();

  const SeekBg = useRef();
  const SeekBar = useRef();

  const [Track, setTrack] = useState(songsData[0]);
  const [PlayStatus, setPlayStatus] = useState(false);
  const [Time, setTime] = useState({
    CurrentTime: {
      second: 0,
      minute: 0,
    },
    TotalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    AudioRef.current.play();
    setPlayStatus(true);
  };
  const pause = () => {
    AudioRef.current.pause();
    setPlayStatus(false);
  };

  const PlayId = async (id) => {
    await setTrack(songsData[id]);
    await AudioRef.current.play();
    setPlayStatus(true);
  };

  const Previous = async () => {
    if (Track.id > 0) {
      await setTrack(songsData[Track.id - 1]);
      await AudioRef.current.play();
      setPlayStatus(true);
    }
  };
  const Next = async () => {
    if (Track.id < songsData.length - 1) {
      await setTrack(songsData[Track.id + 1]);
      await AudioRef.current.play();
      setPlayStatus(true);
    }
  };

  const SeekSong = async (e) => {
    AudioRef.current.currentTime =
      (e.nativeEvent.offsetX / SeekBg.current.offsetWidth) *
      AudioRef.current.duration;
  };

  const Shuffle = async () => {
    const rand = Math.floor(Math.random() * songsData.length);
    setTrack(songsData[rand]);
    setTimeout(() => {
      AudioRef.current.play();
      setPlayStatus(true);
    }, 100);
  };
  
  const handleNextSong = () => {
    const currentIndex = songsData.findIndex((song) => song === Track);
    const nextIndex = (currentIndex + 1) % songsData.length;
    setTrack(songsData[nextIndex]);
    setTimeout(() => {
      AudioRef.current.play();
      setPlayStatus(true);
    }, 100);
  };

  useEffect(() => {
    if (AudioRef.current) {
      AudioRef.current.onended = handleNextSong;
    }
  }, [Track]);

  useEffect(() => {
    setTimeout(() => {
      AudioRef.current.ontimeupdate = () => {
        SeekBar.current.style.width =
          Math.floor(
            (AudioRef.current.currentTime / AudioRef.current.duration) * 100
          ) + "%";

        setTime({
          CurrentTime: {
            second: Math.floor(AudioRef.current.currentTime % 60),
            minute: Math.floor(AudioRef.current.currentTime / 60),
          },
          TotalTime: {
            second: Math.floor(AudioRef.current.duration % 60),
            minute: Math.floor(AudioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [AudioRef]);

  const ContextValue = {
    AudioRef,
    SeekBar,
    SeekBg,
    Track,
    setTrack,
    Time,
    setTime,
    PlayStatus,
    setPlayStatus,
    play,
    pause,
    PlayId,
    Previous,
    Next,
    SeekSong,
    Shuffle
  };

  return (
    <PlayerContext.Provider value={ContextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default ContextProvider;
