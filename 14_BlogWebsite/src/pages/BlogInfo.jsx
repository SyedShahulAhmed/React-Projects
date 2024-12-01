import React from 'react'
import { useParams } from 'react-router-dom'
import articles from '../Constants/Blogs'
import read from '../assets/Icons/read.png'
const BlogInfo = () => {

    const { id } = useParams()

    const blog = articles.find((b) => b.id === parseInt(id))

  return (
    <div className='max-w-[1240px] mx-auto my-8'>
        <div className='w-[70%] mx-auto'>
            <img src={blog.image} alt="" className='w-full object-cover shadow-2xl  rounded-md hover:scale-105 transition-all duration-200'/>
        </div>
        <div className='mx-auto text-gray-700'>
           <h1 className='text-2xl font-bold px-5 text-center pt-10 pb-5 text-black'>{blog.title}</h1>
           <p className='text-lg font-semibold text-justify leading-relaxed px-5 tracking-wide'>{blog.content}</p>
           <p className='text-lg text-justify leading-relaxed px-5 tracking-wide'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam necessitatibus doloribus nihil quos quasi consequuntur corrupti animi repudiandae possimus, consequatur laborum et quam magni, aut, quia at odio reprehenderit ex commodi! Culpa vitae, voluptas maiores iure, cumque maxime quibusdam a nihil quasi dignissimos incidunt nobis excepturi perspiciatis, impedit nam eos. Autem temporibus reprehenderit quia nemo aliquid atque voluptas quas repellat nobis earum explicabo doloribus incidunt illum quisquam possimus laborum odio iusto, culpa veniam nostrum fugit. Obcaecati doloremque molestias ab sunt fuga. Dolore corporis fugiat nobis, aspernatur sint tenetur repellendus asperiores! Distinctio dolores, esse vitae corrupti aperiam reiciendis cumque at eligendi!
            <br/>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis asperiores nihil quis inventore aperiam id ad commodi corrupti, eveniet odio similique natus, molestiae quo ullam reprehenderit! Aliquam repellat quis necessitatibus ut consequuntur labore repudiandae a tempora, assumenda, illum dolorum nostrum esse. In molestias nulla adipisci nostrum sapiente, molestiae maxime omnis officia voluptas nihil eos unde sit. Molestiae odio, reiciendis dicta, optio velit qui voluptatibus eos hic nobis omnis, ipsam blanditiis mollitia dignissimos quibusdam non dolorum magni eveniet doloremque at. Magnam consequuntur delectus error aliquam, excepturi maiores quia consectetur optio. Temporibus ullam sapiente accusamus at ipsam autem perspiciatis dicta, amet eos.
           </p>
        </div>
        <div className='flex justify-between items-center px-5 my-5'>
            <div className='flex items-center gap-3 '>
                <img src={blog.authorPic} alt="" className='w-10 h-10 hover:scale-105 transition-all duration-200'/>
                <p className='text-lg font-bold'>{blog.author}</p>
            </div>
            
            <div>
                <p>Published: <span className='font-bold'>{blog.published_date}</span></p>
                <div className="flex gap-2 justify-start my-2 items-center">
                    <img src={read} alt="" className='w-6 h-6'/>
                    <p>{blog.reading_time}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogInfo