import React from 'react'
import Link from 'next/link'

function ArticleCats({ data}: any) {
  return (
    <div className="py-3">
        {data?.map((r:any, i:React.Key) =>(<Link href={`/tag/${r.slug}`}><span key={i} className="py-2.5 px-4 bg-slate-200 text-gray-500  rounded-lg">{r.title}</span></Link>))}
    </div>
  )
}

export default ArticleCats