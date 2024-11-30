import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatus } from '../Store/Cart';
import cart from '../assets/cart.png'
const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    // Calculate total quantity by summing up the quantity of each item in the cart
    let total = 0;
    carts.forEach(item => {
      total += item.quantity; // Add item quantity to the total
    });
    setTotalQuantity(total);
  }, [carts]); // Recalculate whenever the cart items change

  const openTab = () => {
    dispatch(toggleStatus());
  };

  return (
    <div className='flex justify-between items-center mb-5'>
      <Link to="/" className='text-3xl font-bold text-yellow-400 uppercase'>Cart<span className='text-white'>ly</span></Link>
      <div className='w-10 h-10 bg-gray-400 rounded-full flex justify-center items-center relative'>
        <img src={cart} alt="" className='h-6 w-6' onClick={openTab}/>
        <span className='absolute top-2/3 right-1/2 bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full'>
          {totalQuantity}
        </span>
      </div>
    </div>
  );
};

export default Header;
