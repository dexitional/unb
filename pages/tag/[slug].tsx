import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { FaCloudRain } from 'react-icons/fa'
import Breadcrump from '../../components/Breadcrump'
import Layout from '../../components/Layout'
import NewsCard from '../../components/NewsCard'
import PageTitle from '../../components/PageTitle'
import { sanityClient } from '../../sanity'
const limit = 9;

function index({ posts, num }: any) {
  
  const router = useRouter()
  const { slug = "" } = router.query
  console.log(router)
  const [ data,setData ] = useState(posts)
  const [ start,setStart ] = useState(num)
  const [ loading,setLoading ] = useState(false)
  
  

  const loadMore = async () => {
      setLoading(true)
      const end = start+limit
      const range = `${start}..${end}`
      const query = `{ "posts": *[_type == "post" && $slug in categories[]->slug.current] | order(_id desc) {title,slug,"name": author->name,"avatar": author->image,"categories": categories[]->title,mainImage,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} }[$range] }`
      try{
        const result = await sanityClient.fetch(query, { slug,range })
        if(result){
            setData([ ...data, ...result.posts ])
            setStart(end+1)
            setLoading(false)
        }
      } catch(e){
        console.log(e)
        setLoading(false)
      }
  }

  useEffect(()=>{

  },[])

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
                { !loading 
                  ? <button onClick={loadMore} className="px-5 py-3 font-semibold hover:bg-blue-600 hover:border-white hover:text-white border border-gray-300 rounded-lg">Load More</button>
                  : <FaCloudRain className="p-4 h-16 w-16 border-2 border-blue-600 rounded-full text-blue-600" />
                }
              </div>
           </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context: any, num = 0 ) {
  const { slug = "" } = context.params
  const range = `${num}..${limit}`
  const query = `
  {
    "posts": *[_type == "post" && $slug in categories[]->slug.current] | order(_id desc) { title,slug,"name": author->name,"avatar": author->image,"categories": categories[]->title,mainImage,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} }[$range],
  }
  `
  try {
    const result = await sanityClient.fetch(query, { slug,range })
    return {
      props: {
        posts: result?.posts,
        num
      }
    }
  } catch(e){
    console.log(e)
    return {
      props: {
        posts: [],
        num
      }
    }
  }
    
}

export default index