import React from 'react'
import Image from 'next/image'
import FeaturedImg from '../public/Blog-pattern2.jpg'
import Link from 'next/link'

function NewsIndexCard({title,image,link,author,date,read}: any) {
  return (
    <Link href={link} className="snap-start">
    <div className="w-[85vw] sm:max-w-[480px] rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
      <div className="relative">
        <Image src={image ? image : FeaturedImg } alt="" style={{ height:'220px', width:'100%', objectFit:'cover'}} className="" />
      </div>
      <div className="px-5 py-4 sm:px-8 sm:py-6 bg-white flex flex-col space-y-3">
        <h1 className="text-lg sm:text-[1.3rem] font-bold font-epilogue text-[#081b4b] leading-6 sm:leading-7">{title}</h1>
        <div>
            <span className="text-blue-600">{author}</span>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
                <span>{date}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                <span>{read}</span>
            </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default NewsIndexCard