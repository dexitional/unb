import React from 'react'
import Breadcrump from '../../components/Breadcrump'
import Layout from '../../components/Layout'
import NewsCard from '../../components/NewsCard'
import PageTitle from '../../components/PageTitle'


function index() {
  return (
    <Layout>
      <div className="p-5 w-full min-h-screen bg-[#f9fafe] snap-y snap-mandatory">
        <div className="py-6 sm:mx-auto sm:max-w-7xl flex flex-col space-y-6">
           {/* <Breadcrump /> */}
           <PageTitle title="News" />
           {/* Content Cards */}
           <div className="space-y-10">
              {/*  Articles */}
              <div className="grid sm:grid-cols-3 gap-8">
                <NewsCard title="Adwoa" category="News" author="John manu" date="killer" read="3 min read" link="/"/>
                <NewsCard title="Adwoa" category="News" author="John manu" date="killer" read="3 min read" link="/"/>
                <NewsCard title="Adwoa" category="News" author="John manu" date="killer" read="3 min read" link="/"/>
                <NewsCard title="Adwoa" category="News" author="John manu" date="killer" read="3 min read" link="/"/>
                <NewsCard title="Adwoa" category="News" author="John manu" date="killer" read="3 min read" link="/"/>
                <NewsCard title="Adwoa" category="News" author="John manu" date="killer" read="3 min read" link="/"/>
              </div>
              {/* Loader */}
              <div className="flex items-center justify-center">
                <button className="px-5 py-3 font-semibold hover:bg-blue-600 hover:border-white hover:text-white border border-gray-300 rounded-lg">Load More</button>
              </div>
           </div>
        </div>
      </div>
    </Layout>
  )
}

export default index