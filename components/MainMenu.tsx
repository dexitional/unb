import React, { useState } from 'react'
import MenuPill from './MenuPill'

function MainMenu({ data }: any) {
  const [ activeMenu,setActiveMenu ] = useState(null)
  return (
    <div className="hidden md:flex space-x-3">
       { data?.map(( row:any, i:React.Key ) => 
         row?.categories?.length > 0
        ? (<MenuPill key={i} title={row.title} link={`/tag/${row.slug.current}`} activeMenu={activeMenu} setActiveMenu={setActiveMenu} subMenu={row?.categories} hasMenu />)
        : (<MenuPill key={i} title={row.title} link={`/tag/${row.slug.current}`} activeMenu={activeMenu} setActiveMenu={setActiveMenu} subMenu={row?.categories} />)
       )}
    </div>
  )
}

export default MainMenu