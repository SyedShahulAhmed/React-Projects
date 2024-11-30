import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Store/Cart';

const ProductCard = (props) => {
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);
  const { id, name, price, image, slug } = props.data;
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart({
      productId: id,
      quantity: 1
    }));
  };

  return (
    <div className="bg-slate-300 p-5 rounded-lg shadow- shadow-gray-600 max-w-[300px] h-full ">

      <Link to={`/${slug}`} className="block">
        <img
          src={image}
          alt={name}
          className="w-48 h-48 object-cover object-top rounded-md mx-auto"
        />
      </Link>
      <h3 className="text-2xl font-medium tracking-wide py-3 text-black h-20  mt-4 ">{name}</h3>
      <div className="flex justify-between items-center">
        <p className="text-black text-lg">
          <span className="font-semibold">${price}</span>
        </p>
        <button onClick={handleAdd}
          className="bg-gray-700 p-2 rounded-md text-sm hover:bg-gray-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
