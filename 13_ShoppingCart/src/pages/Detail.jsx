import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Product.js";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/Cart";
import add from '../assets/plus.png'
import minus from '../assets/minus.png'
const Detail = () => {
  const { slug } = useParams();
  const [detail, setdetail] = useState([]);
  const [quantity,setQuantity] = useState(1)
  const dispatch = useDispatch()
  useEffect(() => {
    const findDetail = products.filter((product) => product.slug === slug);
    if (findDetail.length > 0) {
      setdetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  });
  const Removeitem = ()=>{
    setQuantity(quantity - 1 < 1 ? 1 :quantity -1)
  }
  const Additem = ()=>{
    setQuantity(quantity + 1 )
  }
  const handleAddCart = ()=>{
    dispatch(addToCart({
      productId: detail.id,
      quantity: quantity
    }))
  }

  return (
    <div className="h-screen " >
       <div class="one relative mb-8 ">
  <h1 class="text-center uppercase  text-3xl relative">
    item Overview
    <span class="block w-24 h-px bg-gray-400 absolute top-full mt-2 left-1/2 transform -translate-x-1/2"></span>
  </h1>
</div>
    <div className="grid md:grid-cols-2 gap-5 mt-5 md:border-2 bg-gray-800 border-gray-500 shadow-xl shadow-gray-900 md:p-5 m-10 rounded-md">
    <div>
        <img src={detail.image} alt="" className="w-full shadow-2xl"/>
      </div>
      <div className="flex flex-col gap-5 md:border-l-2 p-5 border-gray-600 ">
        <h1 className="text-4xl uppercase font-bold">{detail.name}</h1>
        <p className="text-3xl font-bold">
          ${detail.price}
        </p>
        <div className="flex gap-5 flex-col md:flex-row">
          <div className="flex gap-2 justify-center items-center">
            <button className=" h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center" onClick={Removeitem}>
            <img src={minus} alt="" className="h-8 w-8"/>
            </button>
            <span className=" h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">{quantity}</span>
            <button className="b h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center" onClick={Additem}>
          <img src={add} alt="" className="h-8 w-8"/>
            </button>
          </div>
          <button className="bg-yellow-500  text-black px-5 py-2 rounded-3xl shadow-2xl  hover:scale-105 hover:bg-yellow-600 " onClick={handleAddCart}>
            Add To Cart
          </button>
        </div>
        <p className="leading-relaxed text-justify text-gray-400">
          {detail.description}
        </p>
      </div>
    </div>
    </div>
  );
};

export default Detail;
