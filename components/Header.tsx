import React from 'react'
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


function Header() {
   const router = useRouter()
   const { route } = router
   console.log(route)
   return (
    <Menu>
      <div className="z-20 w-full sticky top-0 bg-white">
          {/* Top Nav */}
          <TopSection />
          {/* Main Menu Bar */}
          <div className="z-20 w-full bg-[#f9fafe] border-b-2 border-[#e3e8f4] shadow-md shadow-gray-200/30">
            <div className="mx-auto max-w-7xl flex items-center justify-between text-[1.05rem] text-gray-700 font-medium">
              <div className="flex-1 flex justify-between items-center space-x-4 font-medium">
                <LogoBox />
                <MainMenu />
                <MobileMenu />
              </div>
              <AccountBox />
            </div>
          </div>
          {/* Sub Menus */}
          { route === '/' && <SectionMenu /> }
          <Menu.Items>
            <SubMenu />
          </Menu.Items>
      </div>
    </Menu>
  )
}

export default Header