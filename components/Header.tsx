import React, { Fragment } from 'react'
import AccountBox from './AccountBox'
import LogoBox from './LogoBox'
import MainMenu from './MainMenu'
import SectionMenu from './SectionMenu'
import SubMenu from './SubMenu'
import SubMenuLeft from './SubMenuLeft'
import SubMenuLeftPill from './SubMenuLeftPill'
import SubMenuRight from './SubMenuRight'
import TopSection from './TopSection'
import { Menu } from '@headlessui/react'
import { useRouter } from 'next/router'
import MobileMenu from './MobileMenu'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdSearch } from 'react-icons/io'
import SubMenu2 from './SubMenu2'


function Header() {
   const router = useRouter()
   const { route } = router
   console.log(route)
   return (
    
      <div className="z-20 w-full sticky top-0 bg-white">
          {/* Top Nav */}
          <TopSection />
          {/* Main Menu Bar */}
          <div className="z-20 w-full bg-[#f9fafe] border-b-2 border-[#e3e8f4] shadow-md shadow-gray-200/30">
            <div className="relative mx-auto max-w-7xl flex items-center justify-between text-[1.05rem] text-gray-700 font-medium">
              <div className="relative px-2 flex-1 flex justify-between items-center space-x-4 font-medium">
                <Menu>
                  <Menu.Button as={Fragment}>
                    <GiHamburgerMenu className="sm:hidden mx-4 p-2 w-10 h-10 bg-red-100 rounded-md" />
                  </Menu.Button>
                  <Menu.Items as={Fragment}>
                    <MobileMenu />
                  </Menu.Items>
                </Menu>
              
                <LogoBox />
                <MainMenu />
                <IoMdSearch className="sm:hidden mx-4 p-2 w-10 h-10 bg-red-100 rounded-md" />
              </div>
              <AccountBox />
            </div>
          </div>
          { route === '/' && <SectionMenu /> }
      </div>
    
  )
}

export default Header