import React from 'react'
import SubMenuRightPill from './SubMenuRightPill'

function SubMenu2({ data }: any) {
  return (
    <div className="w-64 flex flex-col space-y-1 bg-white border shadow-xl rounded-b-lg absolute top-[4.2rem]">
      { data?.map((row: any,i:React.Key) => (
        <SubMenuRightPill title={row.title} link={`/tag/${row.slug.current}`} />
      ))}
    </div>
  )
}

export default SubMenu2