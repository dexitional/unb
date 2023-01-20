import React from 'react'
import Image from 'next/image'
import DCover from '../public/blog-template-sales-bg.png'

function LumenCard() {
  return (
    <div className={`relative h-48 sm:overflow-hidden rounded-3xl `}>
        <Image src={DCover} alt="BG" height={208} style={{ height:'auto',width:'100%', objectFit:'cover'}} className="z-1 absolute"/>
        <div className="z-10 px-8 py-6 sm:h-48 absolute left-0 top-0 flex flex-col space-y-3">
            <h1 className="text-xl font-epilogue font-semibold text-black/80">LUMEN MOBILE APP</h1>
            <p className="text-sm text-gray-700">Lumen is the official mobile app for SRC UCC, It features timetable reminder, hostel finder and an official news portal.</p>
            <button className="w-full h-10 bg-blue-600 transition-all duration-200 hover:bg-blue-700/90 text-white rounded-xl">Download Lumen Now !!</button>
        </div>
    </div>
  )
}

export default LumenCard