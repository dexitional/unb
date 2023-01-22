import React from 'react'
import Link from 'next/link'

function TopSection() {
  return (
    <div className="w-full bg-[#081b4b]">
      <div className="px-4 py-1 sm:mx-auto w-full sm:max-w-7xl sm:h-[2.38rem] flex justify-between text-blue-50/80 text-[0.92rem] font-medium">
        <span className="text-[0.55rem] italic sm:no-italic sm:text-base flex items-center">UNB is the leading campus information portal that delivers info in realtime ...</span>
        <div className="hidden sm:flex items-center space-x-4 cursor-pointer">
            <Link href="#"><span className="hover:text-white">About Us</span></Link>
            <Link href="#"><span className="hover:text-white">Our Team</span></Link>
            <Link href="#"><span className="hover:text-white">Contact Us</span></Link>
        </div>
      </div>
    </div>
  )
}

export default TopSection