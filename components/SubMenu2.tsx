import React from 'react'
import SubMenuRightPill from './SubMenuRightPill'

function SubMenu2({ data }: any) {
  return (
    <div className="py-5 px-5 w-64 flex flex-col space-y-2 bg-white border shadow-xl rounded-b-lg absolute top-[3.6rem]">
      { data?.map((row: any,i:React.Key) => (
        <SubMenuRightPill title={row.title} link={`/tag/${row.slug.current}`} />
      ))}
    </div>
  )
}

export default SubMenu2