import React from 'react'
import SubMenuRightPill from './SubMenuRightPill'

function SubMenuRightSection() {
  return (
    <div className="flex-1 flex flex-col space-y-9">
        <h1 className="pl-4 text-sm font-bold tracking-widest uppercase text-gray-900">OUR COMMUNITY</h1>
        <div className="pl-4 w-full flex flex-col space-y-3">
            <SubMenuRightPill title="Community Home" subtitle="DevOps and development guides" link="/" />
            <SubMenuRightPill title="Community Home" subtitle="DevOps and development guides" link="/" />
        </div>
    </div>
  )
}

export default SubMenuRightSection