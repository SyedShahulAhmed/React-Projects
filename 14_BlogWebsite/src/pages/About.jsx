import React from 'react'
import about from '../assets/Icons/About.png'
import Authorcard from '../components/Authorcard'
import author1 from '../assets/Authors/author1.png'
import author2 from '../assets/Authors/author2.png'
import author3 from '../assets/Authors/author3.png'
import author4 from '../assets/Authors/author4.png'
const About = () => {
  return (
    <div className='max-w-[1240px] mx-auto place-content-center'>
      <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold uppercase tracking-wider text-center'>About Us</h1>
      <div className='grid lg:grid-cols-2 mx-auto gap-5'>
        <div>
          <img src={about} alt="" className='p-5  lg:w-full mx-auto object-cover'/>
        </div>
        <div className='flex flex-col justify-center items-center px-4'>
          <h1 className='text-xl font-bold mb-3'>Welcome to AstroHub</h1>
          <p className='font-medium leading-relaxed text-justify'>At <strong>Astro Hub</strong> we believe the universe isn't just out there—it's right here, in every thought, story, and idea we explore. This is your go-to space for diverse content, where we connect the dots across topics as vast and exciting as the cosmos itself. Whether you're looking for fresh perspectives, innovative ideas, or simply a space to unwind and discover something new, Astro Hub is designed to spark curiosity and inspire your journey</p>
          <p className='font-medium leading-relaxed text-justify'>Here, we dive deep into a broad range of subjects, each one as intriguing as the next. From the latest in technology and science to insights into personal growth, lifestyle, and the wonders of travel, we cover it all. Just as the stars create patterns across the night sky, our content weaves together a tapestry of thought-provoking articles and stories, each one helping you navigate the endless possibilities of our world—and beyond</p>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto my-8'>
        <h1 className='text-xl md:2xl lg:text-3xl text-center uppercase font-bold mb-6'>Top Authors</h1>
       <div className='grid md:grid-cols-2 lg:grid-cols-4'>
       <Authorcard img={author1} name={"Michael Rivera"} job={"SEO Specialist"} publish={"12"}/>
        <Authorcard img={author2} name={"Sophia Morgan"} job={"Content Writer"} publish={"10"}/>
        <Authorcard img={author3} name={"David Green"} job={"Freelance Blogger"} publish={"8"}/>
        <Authorcard img={author4} name={"Laura Bennett"} job={"Blog Manager"} publish={"10"}/>
       </div>
      </div>
    </div>
  )
}

export default About