import React from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import MobileMenuPill from './MobileMenuPill'

function MobileMenu() {

    const data = [
        {
            title:'CAMPUS NEWS',
            link:'#',
            links: [
                { title: 'UCC News', link: '/ucc-news'},
                { title: 'UCC SRC', link: '/ucc-src'},
            ]
        },
        {
            title:'SCHOLARSHIPS',
            link:'/scholarship',
            links: []
        }
    ]

  return (
    <div className="absolute -left-4 top-16 w-screen min-h-fit bg-white rounded-b-xl shadow-lg shadow-blue-600/20 divide divide-y">
     { data?.map((row,i) =>(<MobileMenuPill data={row} key={i} />))}
    </div>
  )
}

export default MobileMenu