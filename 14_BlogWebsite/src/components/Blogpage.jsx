import React, { useEffect, useState } from 'react';
import Blogcard from './Blogcard.jsx';
import articles from '../Constants/Blogs.js';
import next from '../assets/Icons/next.png'
import prev from '../assets/Icons/previous.png'

const Blogpage = () => {
  const [page, setPage] = useState(1); // Current page number
  const [category, setCategory] = useState(null); // Selected category
  const [filteredArticles, setFilteredArticles] = useState([]); // Articles to display

  const pageSize = 6; // Number of articles per page

  // Filter articles based on the selected category
  useEffect(() => {
    if (category) {
      const filtered = articles.filter(
        (article) => article.category === category
      );
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(articles);
    }
  }, [category]);

  // Pagination logic
  const startIndex = (page - 1) * pageSize;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + pageSize
  );

  return (
    <div>
      {/* Categories */}
      <div className="max-w-[1240px] mx-auto my-5">
        <div className="flex gap-4 items-center flex-wrap">
          <button
            onClick={() => setCategory(null)}
            className={`px-4 py-2 rounded text-white ${
              !category ? 'bg-yellow-500 text-white' : 'bg-[#011936]'
            }`}
          >
            All
          </button>
          {/* Add category buttons dynamically */}
          {[...new Set(articles.slice(0,8).map((article) => article.category))].map(
            (cat, index) => (
              <button
                key={index}
                onClick={() => {
                  setCategory(cat);
                  setPage(1); // Reset page to 1 when category changes
                }}
                className={`px-4 py-2 rounded mx-auto text-white ${
                  category === cat ? 'bg-yellow-500 text-black' : 'bg-[#011936]'
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>
      </div>

      {/* Blogs */}
      <div className='max-w-[1240px] mx-auto'>
        <Blogcard articles={paginatedArticles} />
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-5">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 mx-2 roundeddisabled:opacity-50"
        >
          <img src={prev} alt=""  className='w-8 h-8'/>
        </button>
        <span className="px-4 py-2 text-xl font-bold">{page}</span>
        <button
          onClick={() =>
            setPage((prev) =>
              prev < Math.ceil(filteredArticles.length / pageSize)
                ? prev + 1
                : prev
            )
          }
          disabled={page === Math.ceil(filteredArticles.length / pageSize)}
          className="px-4 py-2 mx-2 rounded disabled:opacity-50"
        >
         <img src={next} alt=""  className='w-8 h-8 '/>
        </button>
      </div>
    </div>
  );
};

export default Blogpage;
