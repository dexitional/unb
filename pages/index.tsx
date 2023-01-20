import React from 'react'
import Divider from '../components/Divider'
import NewPickCard from '../components/NewPickCard'
import Header from '../components/Header'
import FeaturedCard from '../components/FeaturedCard'
import CategoryPick from '../components/CategoryPick'
import LumenCard from '../components/LumenCard'
import ContentSection from '../components/ContentSection'
import PickSection from '../components/PickSection'
import IntroSection from '../components/IntroSection'
import Layout from '../components/Layout'



function index() {
  return (
    <Layout>
      <div className="w-full min-h-screen bg-[#f9fafe] snap-y snap-mandatory">
        <div className="px-6 py-6 sm:mx-auto w-full sm:max-w-7xl">
          {/* Section: Entry Message */}
          <IntroSection />
          {/* Section: Featured Notice & Paid Ads */}
          <section className="w-full flex flex-col sm:flex-row sm:justify-between space-y-8 sm:space-y-0 sm:space-x-8">
            <FeaturedCard />
            <div className="w-full sm:w-[40%] flex flex-col space-y-8"> 
              <CategoryPick />
              <LumenCard />
            </div>
          </section>
          <Divider margin="my-10"/>
          {/* Section: Editors Pick */}
          <PickSection />
          <Divider />
        </div>
        {/* Sections Category Contents */}
         <ContentSection data={[]}/>
      </div>
    </Layout>
  )
}

export default index