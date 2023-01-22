import { Menu } from '@headlessui/react'
import React from 'react'
import Link from 'next/link'

export default function MobileMenuPill({ data }:any) {
  return (
    <div className="z-10 px-8 py-5 flex flex-col space-y-3">
        { data?.links?.length > 0 
          ? <Link href={data?.link}><h1 className="text-sm font-bold tracking-widest uppercase text-gray-900">{data?.title}</h1></Link>
          : <h1 className="text-sm font-bold tracking-widest uppercase text-gray-900">{data?.title}</h1>
        }
        <div className="flex flex-col space-y-1.5 indent-2" onClick={()=> alert('')}>
          { data?.links?.map((row: any,i:React.Key) => (
           <Menu.Item key={i}>
             <Link href={row.link}>
              <div className="text-sm font-medium text-gray-500 hover:text-gray-800 cursor-pointer">{row.title}</div>
             </Link>
           </Menu.Item>
          ))}
        </div>
    </div>
  )
}
