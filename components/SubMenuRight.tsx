import React from 'react'
import SubMenuRightPill from './SubMenuRightPill'
import SubMenuRightSection from './SubMenuRightSection'
import { Menu } from '@headlessui/react'

function SubMenuRight() {
  return (
    <div className="py-12  pl-10 flex-1 min-h-[400px] bg-white grid grid-cols-3 gap-x-9 gap-y-16">
       <SubMenuRightSection /> 
       <SubMenuRightSection /> 
       <SubMenuRightSection /> 
       <SubMenuRightSection /> 
       <SubMenuRightSection /> 
       <SubMenuRightSection /> 
       <SubMenuRightSection /> 
    </div>
  )
}

export default SubMenuRight