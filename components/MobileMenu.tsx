import React from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import MobileMenuPill from './MobileMenuPill'

function MobileMenu({ data }: any) {

  return (
    <div className="pb-20 absolute left-0 top-[4.6rem] w-screen h-screen bg-white rounded-b-xl shadow-lg shadow-blue-600/20 divide divide-y overflow-y-scroll scrollbar-hide">
     { data?.map((row: any,i: React.Key) =>(<MobileMenuPill data={row} key={i} />))}
    </div>
  )
}

export default MobileMenu