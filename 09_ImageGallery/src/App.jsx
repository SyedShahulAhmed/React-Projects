import { useEffect, useRef, useState } from "react";
import search from './assests/search.png'

const url = 'https://api.unsplash.com/search/photos';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('nature'); 
  const searchInput = useRef(null);

  const fetchImages = async (query) => {
    try {
      const response = await fetch(
        `${url}?query=${query}&page=1&per_page=20&client_id=${import.meta.env.VITE_API_KEY}`
      );
      const data = await response.json();
      setImages(data.results || []);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  useEffect(() => {
    fetchImages(query);
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = searchInput.current.value;
    if (searchQuery) setQuery(searchQuery); 
  };

  const handleSelection = (category) => {
    searchInput.current.value = category;
    setQuery(category); 
  };

  return (
    <div className="flex  items-center pt-[100px] h-screen flex-col bg-[#BFECFF]">
      <div className="w-[500px] bg-[#FFF6E3] flex justify-center flex-col items-center p-5 gap-5 rounded-md">
        <h1 className="text-[#CDC1FF] text-3xl f font-extrabold">Image Search App</h1>
        
        <form
          className="bg-gray-200 flex justify-between items-center h-12 rounded-br-xl rounded-tr-xl w-full focus-within:border-2 border-black overflow-hidden"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Type something to search"
            className="bg-transparent text-lg border-none outline-none p-2 w-[95%] s"
            ref={searchInput}
          />
          <button type="submit">
            <img
              src={search}
              alt="Search"
              className="h-12 w-12 bg-[#FFDDAE] p-2 overflow-hidden rounded-br-xl rounded-tr-xl"
            />
          </button>
        </form>
      </div>

      <div className="flex justify-center items-center gap-4 mt-5">
        {['Nature', 'Urban', 'Wildlife', 'Abstract', 'Adventure', 'Food', 'Patterns', 'Technology'].map((category) => (
          <div
            key={category}
            className="bg-[#FFCCEA] p-3 shadow-md rounded-md cursor-pointer"
            onClick={() => handleSelection(category)}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 m-4 w-[1200px]">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.thumb}
            alt={image.alt_description || 'Image'}
            className="w-full h-full object-cover rounded-md scale-95 hover:scale-100"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
