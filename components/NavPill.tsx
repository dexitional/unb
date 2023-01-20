import React from 'react'
import { useRouter } from 'next/router'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function NavPill({ title, active, link}: any) {
  return (
   <Link activeClass="px-2 py-0.5 sm:py-2 sm:px-4 text-[0.65rem] sm:text-base bg-blue-600 hover:bg-blue-600 hover:border-white transition duration-200 text-white font-semibold border-2 border-white hover:border-slate-200 rounded-md sm:rounded-xl cursor-pointer" className="px-2 py-0.5 sm:py-2 sm:px-4 text-[0.65rem] sm:text-base font-medium hover:bg-slate-50 transition duration-200 border sm:border-2 border-white hover:border-slate-200 rounded-md sm:rounded-xl cursor-pointer" to={link} spy={true} smooth={true} offset={-300} duration={500}>{title}</Link>
  )
}

export default NavPill