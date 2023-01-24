import React from 'react'
import Divider from '../components/Divider'
import FeaturedCard from '../components/FeaturedCard'
import CategoryPick from '../components/CategoryPick'
import LumenCard from '../components/LumenCard'
import ContentSection from '../components/ContentSection'
import PickSection from '../components/PickSection'
import IntroSection from '../components/IntroSection'
import Layout from '../components/Layout'
import { sanityClient } from '../sanity'



function index({ topics,picks,spots}: any) {
  console.log("FEATURED: ",spots)
  return (
    <Layout>
      <div className="w-full min-h-screen bg-[#f9fafe] snap-y snap-mandatory">
        <div className="px-6 py-6 sm:mx-auto w-full sm:max-w-7xl">
          {/* Section: Entry Message */}
          <IntroSection />
          {/* Section: Featured Notice & Paid Ads */}
          <section className="w-full flex flex-col sm:flex-row sm:justify-between space-y-8 sm:space-y-0 sm:space-x-8">
            <FeaturedCard data={spots} />
            <div className="w-full sm:w-[40%] flex flex-col space-y-8"> 
              <CategoryPick data={topics} />
              <LumenCard />
            </div>
          </section>
          <Divider margin="my-10"/>
          {/* Section: Editors Pick */}
          <PickSection data={picks} />
          <Divider />
        </div>
        {/* Sections Category Contents */}
         <ContentSection data={[]}/>
      </div>
    </Layout>
  )
}


export async function getServerSideProps(context: any) {
  var sections;
  const query = `
  {
    "topics": *[_type == "category" && is_topic == 1]  { title,slug},
    "spots": *[_type == "post" && is_spot == 1] | order(_id desc) { title,slug,"name": author->name,"avatar": author->image,"categories":categories[]->title, mainImage,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} }[0..5],
    "picks": *[_type == "post" && is_pick == 1] | order(_id desc) { title,slug,"name": author->name,"avatar": author->image,"categories":categories[]->title, mainImage,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} }[0..3],
    "sections": *[_type == "category" && is_section == 1] { title,slug }
  }
  `
  try {
    const result = await sanityClient.fetch(query)
    if(result){
       //const section_ids = result.sections.reduce((acc: any,cur: any) => { acc+','+cur.slug },'')
       const secs = result?.sections 
       if(secs && secs.lenth > 0){
         for(const sc of secs){
           const sec = await sanityClient.fetch(`*[_type == "post" && $slug in categories[]->slug.current] | order(_id desc) { title,slug,"name": author->name,"avatar": author->image,"categories":categories[]->title, mainImage,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} }`,{ slug: sc.slug.current})
           if(sec && sec.length > 0) sections = [...sec ]
         }
       }
       
    }





    return {
      props: {
        topics: result?.topics,
        spots: result?.spots,
        picks: result?.picks,
        sections:[],
      }
    }
  } catch(e){
    console.log(e)
    return {
      props: {
        posts: [],
      }
    }
  }
    
}

export default index