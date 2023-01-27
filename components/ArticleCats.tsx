import React from 'react'
import Link from 'next/link'

function ArticleCats({ data}: any) {
  return (
    <div className="py-3 flex flex-wrap gap-2 md:gap-3">
        {data?.map((r:any, i:React.Key) =>(<Link href={`/tag/${r.slug}`}><span key={i} className="py-1 px-2 md:py-2.5 md:px-4 text-xs bg-slate-200 text-gray-500  rounded-md md:rounded-lg">{r.title}</span></Link>))}
    </div>
  )
}

export default ArticleCats