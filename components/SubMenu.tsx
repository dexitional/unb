import React from 'react'
import SubMenuLeft from './SubMenuLeft'
import SubMenuRight from './SubMenuRight'

function SubMenu() {
  return (
    <div className="w-full sm:min-h-[400px] bg-gradient-to-r from-gray-100 via-white to-white absolute top-40 border shadow-xl">
        <div className="mx-auto max-w-7xl h-full flex">
            <SubMenuLeft />
            <SubMenuRight />
        </div>
    </div>
  )
}

export default SubMenu