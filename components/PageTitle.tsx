import React from 'react'
import Bg from '../public/blog-header-image.svg'
import Image from 'next/image'


function PageTitle({ title,color }: any) {
  return (
    <div className={ color ? `relative p-6 sm:p-16 bg-[${color}] rounded-xl sm:rounded-3xl overflow-hidden`:`relative p-6 sm:p-16 rounded-xl sm:rounded-3xl bg-[#ffcba6] overflow-hidden`}>
        <h1 className="text-3xl sm:text-5xl text-[#081b4b] font-bold font-epilogue">{title}</h1>
        <Image src={Bg} alt="Bg" style={{ height:'auto',width:'260px',objectFit:'cover' }} className="absolute -right-10 sm:right-20 -top-10"  />
    </div>
  )
}

export default PageTitle