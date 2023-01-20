import React, { useState } from 'react'
import MenuPill from './MenuPill'

function MainMenu({ Menu }: any) {
  const [ activeMenu,setActiveMenu ] = useState(null)
  return (
    <div className="hidden sm:flex space-x-3">
        <MenuPill title="Campus News" link="/campus-news" activeMenu={activeMenu} setActiveMenu={setActiveMenu} hasMenu />
        <MenuPill title="General News" link="/general-news" activeMenu={activeMenu} setActiveMenu={setActiveMenu} hasMenu />
        <MenuPill title="Administration" link="/community" activeMenu={activeMenu} setActiveMenu={setActiveMenu} hasMenu />
        <MenuPill title="Scholarships" link="/scholarship" activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <MenuPill title="Other Schools" link="/schools" activeMenu={activeMenu} setActiveMenu={setActiveMenu} hasMenu />
    </div>
  )
}

export default MainMenu