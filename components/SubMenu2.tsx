import React from 'react'
import SubMenuRightPill from './SubMenuRightPill'

function SubMenu2() {
  return (
    <div className="py-5 px-5 w-52 flex flex-col space-y-2 bg-white border shadow-xl rounded-b-lg absolute top-[3.6rem]">
        <SubMenuRightPill title="Payslip" link="/" />
        <SubMenuRightPill title="Community Home" link="/" />
    </div>
  )
}

export default SubMenu2