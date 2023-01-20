import React from 'react'
import NewPickCard from './NewPickCard'

function PickSection() {
  return (
    <section className="">
        <h1 className="mb-2 font-epilogue font-semibold text-2xl">UNB Picks</h1>
        <div className="pb-8 overflow-scroll md:overflow-auto scrollbar-hide flex items-center space-x-5 snap-x snap-mandatory">
            <NewPickCard title="How to Connect UCC Wifi or Eduroam on Android Phone" category="HOW TO" author="Yancey Spruill" date="December 29, 2022" read="3 min read" link="/" />
            <NewPickCard title="How to connect to UCC Wifi or Eduroam on Windows Laptop and PC" category="HOW TO" author="John Dumelo" date="December 29, 2022" read="3 min read" link="/"/>
            <NewPickCard title="2022 demonstrated the strength of small businesses" category="HOW TO" author="T Spruill" date="December 29, 2022" read="3 min read" link="/"/>
            <NewPickCard title="2022 demonstrated the strength of small businesses" category="HOW TO" author="Yancey Spruill" date="December 29, 2022" read="3 min read" link="/"/>
        </div>
    </section>
  )
}

export default PickSection