import React from 'react'
import Link from 'next/link'

function CategoryPick() {
  return (
    <div className="py-3 sm:py-6 px-4 sm:px-8 w-full sm:h-96 bg-[#0069ff] rounded-xl sm:rounded-3xl flex flex-col justify-center overflow-auto sm:overflow-hidden">
        <h2 className="my-5 text-xl sm:text-2xl text-white font-semibold font-epilogue">Category Topics</h2>
        <div className="w-full flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-[0.97rem] font-sans font-semibold text-gray-700">
          <Link href="" className="p-2 rounded-md bg-[#7bdeff] font-jetbrains">UCC News</Link>
          <Link href="" className="p-2 rounded-md bg-[#ffc001] font-jetbrains">UCC SRC</Link>
          <Link href="" className="p-2 rounded-md bg-[#80d34a] font-jetbrains">Admissions</Link>
          <Link href="" className="p-2 rounded-md bg-[#d8c1ff] font-jetbrains">Scholarships</Link>
          <Link href="" className="p-2 rounded-md bg-[#ffcba6] font-jetbrains">Announcements</Link>
          <Link href="" className="p-2 rounded-md bg-[#7bdeff] font-jetbrains">How To</Link>
          <Link href="" className="p-2 rounded-md bg-[#00d688] font-jetbrains">Education</Link>
          <Link href="" className="p-2 rounded-md bg-[#ffc001] font-jetbrains">UCC Elections</Link>
          <Link href="" className="p-2 rounded-md bg-[#ff8cff] font-jetbrains">Lifestyle</Link>
          <Link href="" className="p-2 rounded-md bg-[#ffcba6] font-jetbrains">Tech</Link>
          <Link href="" className="p-2 rounded-md bg-[#d8c1ff] font-jetbrains">Business Ideas</Link>
          <Link href="" className="p-2 rounded-md bg-[#00d688] font-jetbrains">Counselling</Link>
        </div>
    </div>
  )
}

export default CategoryPick