import React from 'react'
import Image from 'next/image'
import FeaturedImg from '../public/Blog-pattern2.jpg'
import Link from 'next/link'

function NewsCardShim() {
  return (
    <div className="w-full sm:max-w-[480px] rounded-xl shadow-lg shadow-slate-200/30 overflow-hidden">
      <div className="h-40 w-full bg-slate-200 rounded-sm animate-pulse"></div>
      <div className="px-8 py-6 bg-white flex flex-col space-y-3 animate-pulse">
        <span className="h-4 w-full rounded-lg bg-slate-200"></span>
        <div className="flex flex-col space-y-3">
            <div className="h-4 w-1/3 rounded-lg bg-slate-200"></div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
                <div className="h-4 w-1/3 rounded-lg bg-slate-200"></div>
                <div className="h-4 w-2/3 rounded-lg bg-slate-200"></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCardShim