import React from 'react'
import ServiceCard from '../components/ServiceCard'
import content from '../assets/Services/content.png'
import opportunity from '../assets/Services/opportunity.png'
import seo from '../assets/Services/Seo.png'
import consult from '../assets/Services/startegy.png'
import social from '../assets/Services/social.png'
import news from "../assets/Services/news.png";
const Services = () => {
  return (
    <div className='bg-gary-400 max-w-[1240px] mx-auto'>
      <div className='flex flex-col justify-center items-center gap-2 '>
        <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold uppercase tracking-wider'>Our Services</h1>
        <p className='text-lg font-semibold tracking-wide'>Elevate Your Blogging Journey!</p>
        <p className='text-md font-semibold tracking-wide mx-3'>From content creation to analytics, we've got you covered.</p>
      </div>
      <div className='grid place-content-center sm:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto max-w-[1240px] my-8'>
        <ServiceCard image={content} heading={"Content Writing Services"} para={"Offer professional writing services for individuals or businesses looking to create high-quality blog posts, articles, or copywriting for their own websites"}/>
        <ServiceCard image={opportunity} heading={"Guest Blogging Opportunities"} para={"Allow other writers to contribute to your blog by offering guest blogging slots. This can help diversify content, build a community, and provide different perspectives"}/>
        <ServiceCard image={seo} heading={"SEO Optimization Services"} para={"Provide SEO consulting or services to help individuals or businesses optimize their blog content for search engines, improving visibility and ranking"}/>
        <ServiceCard image={consult} heading={"Content Strategy Consultation"} para={"Offer personalized consultation services for individuals or brands looking to develop a content strategy for their blog, including topic selection, audience targeting, and editorial calendars"}/>
        <ServiceCard image={social} heading={"Social Media Promotion"} para={"Provide services to help clients promote their blog posts through social media channels, including post creation, scheduling, and analytics tracking to increase reach"}/>
        <ServiceCard image={news} heading={"Email Newsletter Setup & Management"} para={"Offer services to set up and manage email newsletters for clients, helping them to keep their audience engaged with regular updates and curated blog content"}/>
      </div>
    </div>
  )
}

export default Services