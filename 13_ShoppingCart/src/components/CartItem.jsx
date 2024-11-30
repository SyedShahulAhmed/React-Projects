import React, { useEffect, useState } from "react";
import { products } from "../Product";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../Store/Cart";
import add from '../assets/plus.png';
import minus from '../assets/minus.png';

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const dispatch = useDispatch();
  const [detail, setDetail] = useState({}); // Initialize with an empty object

  useEffect(() => {
    // Find the product details by productId
    const findDetail = products.find((product) => product.id === productId);
    setDetail(findDetail || {}); // Default to empty object if not found
  }, [productId]);

  const handleRemove = () => {
    if (quantity > 1) {
      dispatch(changeQuantity({ productId: productId, quantity: quantity - 1 }));
    } else if (quantity === 1) {
      // Remove item when quantity is 1 and "remove" is clicked
      dispatch(changeQuantity({ productId: productId, quantity: 0 }));
    }
  };

  const handleAdd = () => {
    dispatch(changeQuantity({ productId: productId, quantity: quantity + 1 }));
  };

  if (!detail.id) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center bg-slate-600 shadow-lg p-2 text-white border-b-3 border-black gap-5 mx-1 my-2 rounded-md">
      {/* Uniform image size */}
      <img 
        src={detail.image} 
        alt={detail.name} 
        className="w-16 h-16 object-cover rounded-md" 
      />
      <h3 className="text-white">{detail.name}</h3>
      <p className="text-white">${detail.price * quantity}</p>
      <div className="w-20 flex justify-between items-center">
        {/* Remove button */}
        <button
          className="rounded-full w-6 h-6"
          onClick={handleRemove}
          aria-label="Decrease quantity or remove item"
        >
          <img src={minus} alt="minus" />
        </button>
        <span>{quantity}</span>
        {/* Add button */}
        <button
          className="bg-red-500 rounded-full w-6 h-6"
          onClick={handleAdd}
          aria-label="Increase quantity"
        >
          <img src={add} alt="add" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
