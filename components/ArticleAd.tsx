import React from 'react'

function ArticleAd() {
  return (
    <div className="my-6 p-8 rounded-3xl bg-gradient-to-b from-blue-200/50 to-gray-50 flex flex-col space-y-6">
        <h1 className="text-xl font-epilogue font-semibold text-black/80">LUMEN MOBILE APP</h1>
        <p className="text-base text-gray-600/90">Lumen is the official mobile app for SRC UCC, It features timetable reminder, hostel finder and an official news portal.</p>
        <button className="w-full h-10 bg-blue-600 transition-all duration-200 hover:bg-blue-700/90 font-semibold text-white rounded-xl">Download now</button>
    </div>
  )
}

export default ArticleAd