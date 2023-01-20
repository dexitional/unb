import React from 'react'
import Image from 'next/image'
import DividerImg from '../public/blog-picks-divider.svg'


function Divider({ margin }: any) {
  return (
    <div id="divider" className={margin ? `w-full ${margin}`:`w-full`}>
        <Image src={DividerImg} alt="Divider" style={{ width:'100%'}} />
    </div>
  )
}

export default Divider