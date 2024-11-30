import React from 'react'
import {products} from '../Product.js'
import ProductCard from '../components/ProductCard'
const Home = () => {
  return (
    <div>
  <div class="one relative mb-8 ">
  <h1 class="text-center uppercase  text-3xl relative">
    Featured Products
    <span class="block w-24 h-px bg-gray-400 absolute top-full mt-2 left-1/2 transform -translate-x-1/2"></span>
  </h1>
</div>
      <div className='max-w-[1240px] grid lg:grid-cols-4 gap-4 mx-auto md:grid-cols-3 grid-cols-2 '>
        {products.map((item,key)=>(
          <ProductCard key={key} data={item}/>
))}
      </div>
    </div>
  )
}

export default Home