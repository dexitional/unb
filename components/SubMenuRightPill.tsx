import Link from 'next/link'
import React from 'react'
import { Menu } from '@headlessui/react'

function SubMenuRightPill({ title, link }: any) {
  return (
    <Menu.Item>
      <Link href={link}>
      <div className="text-base font-medium text-gray-500 hover:text-gray-800 cursor-pointer ">{title}</div>
      </Link>
    </Menu.Item>
  )
}

export default SubMenuRightPill