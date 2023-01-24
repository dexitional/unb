import moment from 'moment'
import React from 'react'
import NewPickCard from './NewPickCard'
import { blockContentToPlainText } from 'react-portable-text'
const readingTime = require('reading-time');

function PickSection({ data }:any) {
  return (
    <section className="">
        <h1 className="mb-2 font-epilogue font-semibold text-2xl">UNB Picks</h1>
        <div className="pb-8 overflow-scroll md:overflow-auto scrollbar-hide flex items-center space-x-5 snap-x snap-mandatory">
            { data.map((row: any,i: React.Key) => {
              const stats = readingTime(blockContentToPlainText(row.body));
              return <NewPickCard key={i} title={row.title} category={row.categories[0]} author={row.name} date={moment(row._createdAt).format('LL')} read={stats.text} link={`/${row.slug.current}`} />
            })}
        </div>
    </section>
  )
}

export default PickSection