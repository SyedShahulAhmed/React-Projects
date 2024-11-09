import React from 'react';
import Image from '../images/default.jpg'

const Newsitems = ({ title, description, src, url }) => {
  return (
    <div className="max-w-80 w-full rounded-lg overflow-hidden shadow-lg bg-white inline-flex flex-col mx-3 ">
      <img className="w-full h-[200px] object-cover" src={src ? src:Image} alt="News" />
      <div className="p-5 flex flex-col justify-between h-full">
        <h3 className="text-xl font-semibold mb-2">
          {title ? title.slice(0, 50) : "Title Unavailable"}
        </h3>
        <p className="text-gray-700 text-base mb-4 line-clamp-3">
          {description ? description.slice(0, 90) : "Description Unavailable"}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
            Read more
          </button>
        </a>
      </div>
    </div>
  );
};

export default Newsitems;
