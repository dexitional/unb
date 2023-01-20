import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { IoIosArrowDown,IoIosArrowUp } from 'react-icons/io'
import { Menu } from '@headlessui/react'

function MenuPill({ title,link,activeMenu,setActiveMenu,hasMenu }: any) {
  const [ click,setClick ] = useState(false)
  const ref = useRef(null);
  const router = useRouter()
  const pathname =  link.replaceAll('/','').toLowerCase()
  console.log(pathname,activeMenu)
  const onClick = () => {
      setActiveMenu(pathname)
      hasMenu ? setClick(!click) : router.push(link)
  }

  return (
    hasMenu ?
    <Menu.Button as={React.Fragment}>
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
  )
}

export default MenuPill