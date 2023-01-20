import React from 'react'
import SubMenuLeftPill from './SubMenuLeftPill'

function SubMenuLeft() {
  return (
    <div className="py-12 w-96 min-h-[400px] bg-gray-100/20 flex flex-col space-y-8">
        <h1 className="pl-4 text-sm font-bold tracking-widest uppercase text-gray-900">OUR COMMUNITY</h1>
        <div className="w-full flex flex-col space-y-2">
            <SubMenuLeftPill title="Community Home" subtitle="DevOps and development guides" link="/" />
            <SubMenuLeftPill title="CSS-Tricks" subtitle="All things web design" link="/" />
        </div>
    </div>
  )
}

export default SubMenuLeft