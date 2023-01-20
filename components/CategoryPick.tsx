import React from 'react'

function CategoryPick() {
  return (
    <div className="py-6 px-8 w-full h-96 bg-[#0069ff] rounded-3xl flex flex-col justify-center">
        <h2 className="my-5 text-2xl text-white font-semibold font-epilogue">Category Topics</h2>
        <div className="w-full flex flex-wrap space-x-2 font-sans font-semibold text-gray-700">
        <span className="my-1 p-2 rounded-md bg-[#7bdeff] font-jetbrains">UCC News</span>
        <span className="my-1 p-2 rounded-md bg-[#ffc001] font-jetbrains">UCC SRC</span>
        <span className="my-1 p-2 rounded-md bg-[#80d34a] font-jetbrains">Admissions</span>
        <span className="my-1 p-2 rounded-md bg-[#d8c1ff] font-jetbrains">Scholarships</span>
        <span className="my-1 p-2 rounded-md bg-[#ffcba6] font-jetbrains">Announcements</span>
        <span className="my-1 p-2 rounded-md bg-[#00d688] font-jetbrains">Education</span>
        <span className="my-1 p-2 rounded-md bg-[#ffc001] font-jetbrains">UCC Elections</span>
        <span className="my-1 p-2 rounded-md bg-[#7bdeff] font-jetbrains">How To</span>
        <span className="my-1 p-2 rounded-md bg-[#ff8cff] font-jetbrains">Lifestyle</span>
        <span className="my-1 p-2 rounded-md bg-[#d8c1ff] font-jetbrains">Entrepreneurship</span>
        <span className="my-1 p-2 rounded-md bg-[#00d688] font-jetbrains">Lumen mobile app</span>
        </div>
    </div>
  )
}

export default CategoryPick