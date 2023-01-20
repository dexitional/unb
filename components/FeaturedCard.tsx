import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../public/logo.png'

function FeaturedCard() {
  return (
    <Link href="" className="w-full sm:w-[57.5%]">
    <div className="transition-all duration-200 shadow-xl shadow-blue-600/10 hover:shadow-blue-600/20 flex flex-col rounded-3xl overflow-hidden">
        <div className="sm:h-[25rem] bg-blue-900">
          <Image src={Logo} alt="Featured Image" height={100} style={{ height:'auto',width:'100%', objectFit:'cover' }} />
        </div>
        <div className="px-8 py-6 bg-slate-50 flex flex-col space-y-3">
        <h1 className="text-2xl sm:text-3xl font-semibold font-epilogue text-gray-800">DigitalOcean expands backup capabilities with acquisition of SnapShooter </h1>
        <div className="flex items-center space-x-3">
            <div className="h-12 w-12 bg-blue-800 border-2 border-yellow-500 rounded-full flex items-center justify-center font-bold text-2xl text-white">G</div>
            <span className="text-base text-blue-600">Gabe Monroy</span>
        </div>
        <span className="text-sm text-gray-600">January 11, 2023</span>
        </div>
    </div>
    </Link>

  )
}

export default FeaturedCard