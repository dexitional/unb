import Link from 'next/link'
import React from 'react'
import { Menu } from '@headlessui/react'

function SubMenuRightPill({ title, link }: any) {
  return (
    <Menu.Item>
      <Link href={link}>
        <div className="px-5 py-2.5 text-[0.93rem] font-normal text-gray-600 hover:text-blue-900 hover:bg-blue-50 cursor-pointer ">{title}</div>
      </Link>
    </Menu.Item>
  )
}

export default SubMenuRightPill