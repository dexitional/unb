import React from 'react'

function IntroSection() {
  return (
    <section className="px-10 sm:px-0 my-5 sm:my-20 flex flex-col space-y-4 items-center text-center">
      <h1 className="text-3xl sm:text-4xl text-blue-900 font-epilogue font-semibold">The DigitalOcean Blog</h1>
      <p className="w-full sm:w-[45%] text-sm text-gray-500">Dive into DigitalOcean product updates, company news, and educational content on how developers and startups can leverage the cloud.</p>
    </section>
  )
}

export default IntroSection