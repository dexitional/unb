import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../public/logo.png'


function LogoBox() {
  return (
    <Link href="/">
    <div className="sm:my-3 mx-auto relative">
    <Image src={Logo} alt="Logo" height={40} style={{ height:'auto', width:'100%', objectFit:'contain'}} priority />
    </div>
  </Link>
  )
}

export default LogoBox