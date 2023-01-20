import Link from 'next/link'
import React from 'react'
import { Menu } from '@headlessui/react'

function SubMenuLeftPill({ title, subtitle, link }: any) {
  return (
    <Menu.Item>
    <Link href={link}>
    <div className="p-4 w-80 flex flex-col rounded-xl hover:bg-blue-100 cursor-pointer ">
        <span className="text-xl font-epilogue font-medium text-gray-800/90">{title}</span>
        <span className="text-base text-gray-600">{subtitle}</span>
    </div>
    </Link>
    </Menu.Item>
  )
}

export default SubMenuLeftPill