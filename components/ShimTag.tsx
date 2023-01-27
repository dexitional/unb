import React from 'react'
import Layout from './Layout'
import NewsCardShim from './NewsCardShim'

function ShimTag() {
  return (
    <Layout>
      <div className="p-5 w-full min-h-screen bg-[#f9fafe] snap-y snap-mandatory">
        <div className="py-6 sm:mx-auto sm:max-w-7xl flex flex-col space-y-6">
          {/* Page Title */}
          <div className={`relative p-6 sm:p-10 rounded-xl sm:rounded-3xl bg-[#ffcba6] overflow-hidden animate-pulse`}>
              <div className="h-8 w-48 bg-[#081b4b]/5 rounded-lg animate-pulse">&nbsp;</div>
          </div>
          <div className="space-y-10">
              {/*  Articles */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
                { new Array(3).fill(null).map((_, i:number) => <NewsCardShim />)}
              </div>
              {/* Loader */}
              
           </div>
        </div>
      </div>   
    </Layout>
  )
}

export default ShimTag