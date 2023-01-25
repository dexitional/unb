import { Menu } from '@headlessui/react'
import React from 'react'
import Link from 'next/link'

export default function MobileMenuPill({ data }:any) {
  console.log(data)
  return (
    <div className={data?.categories?.length > 0 ? `z-10 px-8 py-5 flex flex-col space-y-3`: `z-10 px-8 pt-3 flex flex-col space-y-3`}>
        { data?.categories?.length > 0 
          ? <Link href={`/tag/${data?.slug?.current}`}><h1 className="text-sm font-bold tracking-widest uppercase text-gray-900">{data?.title}</h1></Link>
          : <h1 className="text-sm font-bold tracking-widest uppercase text-gray-900">{data?.title}</h1>
        }
        <div className="flex flex-col space-y-1.5 indent-2" onClick={()=> alert('')}>
          { data?.categories?.map((row: any,i:React.Key) => (
           <Menu.Item key={i}>
             <Link href={`/tag/${row.slug.current}`}>
              <div className="text-sm font-medium text-gray-500 hover:text-gray-800 cursor-pointer">{row.title}</div>
             </Link>
           </Menu.Item>
          ))}
        </div>
    </div>
  )
}
