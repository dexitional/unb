import React, { Fragment, useEffect, useState } from 'react'
import AccountBox from './AccountBox'
import LogoBox from './LogoBox'
import MainMenu from './MainMenu'
import SectionMenu from './SectionMenu'
import TopSection from './TopSection'
import { Menu } from '@headlessui/react'
import { useRouter } from 'next/router'
import MobileMenu from './MobileMenu'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdSearch } from 'react-icons/io'
import { sanityClient } from '../sanity'

function Header() {
  const router = useRouter()
  const { route } = router
  const [ data,setData ] = useState<any>({})
  const loadMenus = async () => {
    try{
     const query = `{ 
       "mainmenu": *[_type == "category" && order == 1 ] | order(position asc) { title,slug,"categories": subcats[]->{ title,slug } },
       "sectionmenu": *[_type == "category" && is_section == 1 ] | order(_id asc) { title,slug } 
      }`
      const result = await sanityClient.fetch(query)
      if(result){
        setData({ ...result })
      }
    } catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    loadMenus()
  },[])

  useEffect(() => {
    console.log(data)
  },[data])

  return (
    data ?
    <div className="z-20 w-full sticky top-0 bg-white">
       {/* Top Nav */}
       <TopSection />
       <div className="z-20 w-full bg-[#f9fafe] border-b-2 border-[#e3e8f4] shadow-sm shadow-gray-200/30">
           <div className="relative mx-auto max-w-7xl flex items-center justify-between text-[1.05rem] text-gray-700 font-medium">
              <div className="relative px-2 py-1 flex-1 flex justify-between items-center space-x-4 font-medium">
                <Menu>
                  <Menu.Button as={Fragment}>
                    <GiHamburgerMenu className="md:hidden mx-4 p-2 w-10 h-10 border text-blue-900 border-blue-900 bg-red-100 rounded-md" />
                  </Menu.Button>
                  <Menu.Items as={`div`}>
                    <MobileMenu data={data?.mainmenu} />
                  </Menu.Items>
                </Menu>
                <LogoBox />
                <MainMenu data={data?.mainmenu} />
                <IoMdSearch className="md:hidden mx-4 p-2 w-10 h-10 border text-blue-900 border-blue-900 bg-red-100 rounded-md" />
              </div>
              <AccountBox />
           </div>  
       </div>
       { route === '/' && <SectionMenu data={data?.sectionmenu} /> }
    </div>
    : null 
  )
}

export default Header