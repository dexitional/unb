import React from 'react'
import Bg from '../public/blog-header-image.svg'
import Image from 'next/image'


function PageTitle({ title,color }: any) {
  return (
    <div className={ color ? `sticky top-20 p-6 sm:p-10 bg-[${color}] rounded-xl sm:rounded-3xl overflow-hidden`:`sticky top-20 p-6 sm:p-10 rounded-xl sm:rounded-3xl bg-[#ffcba6] overflow-hidden`}>
        <h1 className="z-20 text-2xl sm:text-4xl text-[#081b4b] font-bold font-epilogue">{title}</h1>
        <Image src={Bg} alt="Bg" style={{ height:'auto',width:'260px',objectFit:'cover' }} className="z-10 absolute -right-10 sm:right-20 -top-10"  />
    </div>
  )
}

export default PageTitle