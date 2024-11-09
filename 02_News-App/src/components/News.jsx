import React, { useEffect, useState } from 'react';
import Newsitems from './Newsitems';


export const News = ({ Category }) => {
  const [Articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${Category}&apiKey=Your Api`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.articles) {
          setArticles(data.articles);
        }
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [Category]);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold p-2 m-3 text-white">Latest <span className='bg-red-500 rounded-lg p-1 text-black'>News</span></h1>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {Articles.length > 0 ? (
          Articles.map((news, index) => (
            <Newsitems
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))
        ) : (
          <p className="text-center">No news articles available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default News;
