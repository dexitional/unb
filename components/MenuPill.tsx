import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { IoIosArrowDown,IoIosArrowUp } from 'react-icons/io'
import { Menu } from '@headlessui/react'
import SubMenu2 from './SubMenu2'

function MenuPill({ title,link,activeMenu,setActiveMenu,hasMenu,subMenu }: any) {
  const [ click,setClick ] = useState(false)
  const ref = useRef(null);
  const router = useRouter()
  const pathname =  link.replaceAll('/','').toLowerCase()
  const onClick = () => {
      setActiveMenu(pathname)
      hasMenu ? setClick(!click) : router.push(link)
  }

  return (
    <Menu>
    <div className="relative">
      { hasMenu ?
      <Menu.Button  ref={ref}>
      <div onClick={onClick} className="py-2.5 px-4 flex items-center space-x-2 hover:bg-slate-200/80 rounded-xl cursor-pointer">
          <span>{title}</span>
          { hasMenu
          ? pathname === activeMenu
          ? <IoIosArrowUp className="h-4 w-4 text-blue-600/70" />
          : <IoIosArrowDown className="h-4 w-4 text-gray-500/70" />
          : null
          }
      </div>
      </Menu.Button>
      :
      <div onClick={onClick} className="py-2.5 px-4 flex items-center space-x-2 hover:bg-slate-200/80 rounded-xl cursor-pointer">
          <span>{title}</span>
          { hasMenu
          ? pathname === activeMenu
          ? <IoIosArrowUp className="h-4 w-4 text-blue-600/70" />
          : <IoIosArrowDown className="h-4 w-4 text-gray-500/70" />
          : null
          }
      </div>
    }
      <Menu.Items>
        <SubMenu2 data={subMenu} />
      </Menu.Items>
    </div>
    </Menu>
  )
}

export default MenuPill