import React from 'react'
import { FaTwitter,FaFacebookF, FaLinkedin,FaWhatsapp,FaTelegram } from 'react-icons/fa'
import Link from 'next/link'

function Socials({ siteUrl,title,slug }: any) {
  return (
    <div className="flex items-center space-x-3">
        <Link href={`https://twitter.com/intent/tweet?text=${encodeURI(title)}&url=${encodeURI(siteUrl+'/'+slug)}`}><FaTwitter className="p-3 w-12 h-12 bg-blue-600 text-white rounded-lg cursor-pointer"/></Link>
        <Link href={`https://www.facebook.com/sharer.php?u=${encodeURI(siteUrl+'/'+slug)}`}><FaFacebookF className="p-3 w-12 h-12 bg-blue-600 text-white rounded-lg cursor-pointer"/></Link>
        <Link href={`https://telegram.me/share/url?url=${encodeURI(siteUrl+'/'+slug)}&text=${encodeURI(title)}`}><FaTelegram className="p-3 w-12 h-12 bg-blue-600 text-white rounded-lg cursor-pointer"/></Link>
        <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(siteUrl+'/'+slug)}&title=${encodeURI(title)}`}><FaLinkedin className="p-3 w-12 h-12 bg-blue-600 text-white rounded-lg cursor-pointer"/></Link>
        <Link href={`https://api.whatsapp.com/send?text=${encodeURI(title)}%20%0A%0A%20${encodeURI(siteUrl+'/'+slug)}`}><FaWhatsapp className="p-3 w-12 h-12 bg-blue-600 text-white rounded-lg cursor-pointer"/></Link>
    </div>
  )
}

export default Socials