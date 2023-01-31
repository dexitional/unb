import React from 'react'
import Link from 'next/link'
import { colors } from '../utils/colors'

function CategoryPick({ data }: any) {
  return (
    <div className="py-3 sm:py-6 px-4 sm:px-8 w-full sm:h-96 bg-[#0069ff] rounded-xl sm:rounded-3xl flex flex-col justify-center overflow-auto sm:overflow-hidden">
        <h2 className="my-5 text-xl sm:text-2xl text-white font-semibold font-epilogue">Category Topics</h2>
        <div className="w-full flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-[0.97rem] font-sans font-semibold text-gray-700">
          { data?.map((row: any, i: number) => {
              //const color = colors[(i%(colors.length-1))]
              return <Link key={i} href={`/tag/${row.slug.current}`} className={row.color ? `p-2 rounded-md bg-[${row.color}] font-jetbrains`:`p-2 rounded-md bg-[#ffc001] font-jetbrains`}>{row.title}</Link>
          })}
        </div>
    </div>
  )
}

export default CategoryPick