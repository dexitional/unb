import moment from 'moment'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { FaCloudRain } from 'react-icons/fa'
import Breadcrump from '../../components/Breadcrump'
import Layout from '../../components/Layout'
import NewsCard from '../../components/NewsCard'
import PageTitle from '../../components/PageTitle'
import { sanityClient, urlFor } from '../../sanity'
import { blockContentToPlainText } from 'react-portable-text'

const limit = 9;
const readingTime = require('reading-time');

function index({ posts,category,total,num }: any) {
  const router = useRouter()
  const { slug = "" } = router.query
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

  useEffect(() => {

  },[])

  return (
    <Layout>
      <div className="p-5 w-full min-h-screen bg-[#f9fafe] snap-y snap-mandatory">
        <div className="py-6 sm:mx-auto sm:max-w-7xl flex flex-col space-y-6">
           {/* <Breadcrump /> */}
           <PageTitle title={category?.title} />
           {/* Content Cards */}
           <div className="space-y-10">
              {/*  Articles */}
              <div className="grid sm:grid-cols-3 gap-8">
                { data?.map((row:any, i:React.Key) => {
                  const stats = readingTime(blockContentToPlainText(row.body));
                  return (
                    <NewsCard key={i} title={row.title} image={urlFor(row.mainImage).width(600).url()} category={row.categories[0]} author={row.name} date={moment(row._createdAt).format('LL')} read={stats.text} link={`/${row.slug.current}`}/>
                  )
                })}
              </div>
              {/* Loader */}
              <div className="flex items-center justify-center">
                { loading 
                  ? <FaCloudRain className="p-4 h-16 w-16 border-2 border-blue-600 rounded-full text-blue-600" />
                  : data.length < total
                  ? <button onClick={loadMore} className="px-5 py-3 font-semibold hover:bg-blue-600 hover:border-white hover:text-white border border-gray-300 rounded-lg">Load More</button>
                  : null }
              </div>
           </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context: any, num = 0 ) {
  const { slug = "" } = context.params
  const query = `
  {
    "posts": *[_type == "post" && $slug in categories[]->slug.current] | order(_id desc) { title,slug,"name": author->name,"avatar": author->image,"categories":categories[]->title, mainImage,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} }[$start..$end],
    "category": *[_type == "category" && $slug == slug.current] { title,slug}[0],
    "total": count(*[_type == "post" && $slug in categories[]->slug.current]) 
  }
  `
  try {
    const result = await sanityClient.fetch(query, { slug,start:num,end:limit })
    return {
      props: {
        posts: result?.posts,
        category: result?.category,
        total: result?.total,
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