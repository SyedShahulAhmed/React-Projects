import React from 'react';
import { Link } from 'react-router-dom';

const Blogcard = ({ articles }) => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 mx-4 lg:mx-0">
      {articles.map((item, index) => (
        <Link
          to={`/blogs/${item.id}`} // Ensure the `to` path is dynamic
          key={index} // Use a unique key for each blog card
          className="bg-slate-200 p-5 rounded-md shadow-md  transition-transform  duration-300"
        >
          <div>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover mx-auto rounded"
            />
          </div>
          <h1 className="text-lg py-2 font-semibold">{item.title}</h1>
          <div className="flex gap-2 justify-start items-center pb-2">
            <img
              src={item.authorPic}
              alt={item.author}
              className="w-6 h-6 rounded-full"
            />
            <p className="text-sm font-bold">{item.author}</p>
          </div>
          <p className="font-light">
            Published:{' '}
            <span className="text-sm font-bold">{item.published_date}</span>
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Blogcard;
