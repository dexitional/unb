import React from 'react'
import Link from 'next/link'

function NewPickCard({ title,category,author,date,read,link }: any) {
  return (
    <Link href="" className="snap-start">
    <div className="p-6 sm:py-8 sm:px-6 w-[85vw] sm:w-[18rem] sm:h-56 flex flex-col justify-between rounded-3xl hover:bg-white border border-slate-50 hover:border-slate-100 hover:shadow-xl overflow-hidden">
        <div className="space-y-4">
            <span className="px-4 py-2 rounded-md bg-[#80d34a] font-jetbrains font-semibold">{category}</span>
            <h2 className="font-[700] text-gray-800 text-lg leading-1 font-inter">{title}</h2>
        </div>
        <div>
            <span className="text-blue-600">{author}</span>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
                <span>{date}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                <span>{read}</span>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default NewPickCard