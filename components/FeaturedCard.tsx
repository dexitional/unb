import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../public/logo.png'
import { urlFor } from '../sanity'

function FeaturedCard({ data }: any) {
  
  return (
    <div className="w-full sm:w-[57.5%] transition-all duration-200 shadow-xl shadow-blue-600/10 hover:shadow-blue-600/20 flex space-x-4 rounded-xl sm:rounded-3xl overflow-x-scroll scrollbar-hide snap-x snap-mandatory scroll-ml-4">
      { data?.map((row: any,i: React.Key) => (
      <Link key={i} href={`/${row.slug.current}`} className="w-full flex-shrink-0 snap-center">
      <div className="overflow-hidden bg-red-100">
          <div className="sm:h-[25rem] bg-blue-900">
            <Image src={row.mainImage ? urlFor(row.mainImage).url(): Logo} alt="Featured Image" height={100} width={600} style={{ height:'400px',width:'100%', objectFit:'cover' }} priority />
          </div>
          <div className="px-3 sm:px-8 py-5 sm:py-6 bg-slate-50 flex flex-col space-y-3">
          <h1 className="text-lg sm:text-3xl font-semibold font-epilogue text-gray-800">{row.title}</h1>
          <div className="flex items-center space-x-1 sm:space-x-3">
              <div className="h-8 w-8 sm:h-12 sm:w-12 bg-blue-800 border-2 border-yellow-500 rounded-full flex items-center justify-center font-bold text-2xl text-white">G</div>
              <span className="text-xs sm:text-base text-blue-600">{row.name}</span>
          </div>
          <span className="text-xs sm:text-sm text-gray-600">{ moment(row._createdAt).format('LL') }</span>
          </div>
      </div>
      </Link>
      ))}
    </div>
  )
}

export default FeaturedCard