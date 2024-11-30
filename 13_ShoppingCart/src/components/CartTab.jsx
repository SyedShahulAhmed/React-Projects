import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { toggleStatus } from '../Store/Cart';

const CartTab = () => {
  const carts = useSelector(store => store.cart.items);
  const tabStatus = useSelector(store => store.cart.tabStatus); // Renamed to tabStatus
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleStatus()); // Dispatch the toggle action to close the cart
  };

  return (
    <div
      className={`fixed top-0 right-0 shadow-2xl bg-gray-700 w-96 h-full flex flex-col justify-start items-center transform transition-transform duration-500 
        ${tabStatus ? "translate-x-0" : "translate-x-full"}`}
    >
      <h1 className='p-5 text-yellow-400 text-2xl font-bold'>Bag Overview</h1>
      <div className='flex-grow overflow-y-hidden '>
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>
      <div className='flex justify-between items-center gap-10 p-5'>
        <button onClick={handleClose} className='bg-black text-white px-10 py-3 rounded-lg shadow-lg'>
          Close
        </button>
        <button className='bg-orange-500 text-white px-10 py-3 rounded-lg shadow-lg'>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartTab;
