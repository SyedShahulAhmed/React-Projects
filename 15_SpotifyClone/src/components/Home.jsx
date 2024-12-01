import React from "react";
import Header from "./Header";
import AlbumCard from "./AlbumCard";
import { albumsData, songsData,ArtistsData } from "../assets/assets";
import SongCard from "./SongCard";
import ArtistCard from "./ArtistCard";
const Home = () => {
  return (
    <>
      <Header />
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, key) => (
            <AlbumCard
              key={key}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item,key) =>(
            <SongCard
            key={key}
            id={item.id}
            name={item.name}
            image={item.image}
            desc={item.desc}/>
          ))}
        </div>
      </div>
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl">Popular artists</h1>
        <div className="flex overflow-auto">
          {ArtistsData.map((item,key) =>(
            <ArtistCard
            key={key}
            id={item.id}
            name={item.name}
            image={item.image}
            desc={item.desc}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
