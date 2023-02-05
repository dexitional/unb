import moment from 'moment'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { ImSpinner9 } from 'react-icons/im'
import Breadcrump from '../../components/Breadcrump'
import Layout from '../../components/Layout'
import NewsCard from '../../components/NewsCard'
import PageTitle from '../../components/PageTitle'
import { sanityClient, urlFor } from '../../sanity'
import { blockContentToPlainText } from 'react-portable-text'
import NewsCardShim from '../../components/NewsCardShim'
import Pagination from '../../components/Pagination'

const limit = 9;
const readingTime = require('reading-time');

function index({ posts,category,total,num }: any) {
  const router = useRouter()
  const { slug = "" } = router.query
  const [ data,setData ] = useState<any>([])
  const [ start,setStart ] = useState(num)
  const [ loading,setLoading ] = useState(false)
  
  const [ currentPage,setCurrentPage ] = useState(1);
  const itemsPerPage  = 12;

  const paginate = (pageNumber:any) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = posts.slice(indexOfFirstItem,indexOfLastItem)

  const loadMore = async () => {
      setLoading(true)
      const end = start+limit
      const query = `{ "posts": *[_type == "post" && $slug in categories[]->slug.current] | order(_id desc) {title,slug,"name": author->name,"avatar": author->image,"categories": categories[]->title,mainImage,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} }[$start..$end] }`
      try{
        const result = await sanityClient.fetch(query, { slug,start,end })
        if(result){
          setData([ ...data, ...result.posts ])
          setStart(data.length)
          setLoading(false)
        }
      } catch(e){
        console.log(e)
        setLoading(false)
      }
  }

  

  

  return (
    <Layout>
      <div className="p-5 w-full min-h-screen bg-[#f9fafe] snap-y snap-mandatory">
        <div className="py-6 sm:mx-auto sm:max-w-7xl flex flex-col space-y-4">
           {/* <Breadcrump /> */}
           <PageTitle title={category?.title} />
           {/* Content Cards */}
           <div className="space-y-10">
              {/*  Articles */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
                { currentItems?.map((row:any, i:React.Key) => {
                  const stats = readingTime(blockContentToPlainText(row.body));
                  return (
                    <NewsCard key={i} title={row.title} image={urlFor(row.mainImage).width(600).url()} category={row.categories[0]} author={row.name} date={moment(row._createdAt).format('LL')} read={stats.text} link={`/${row.slug.current}`}/>
                  )
                }) 
                || 
                <div className="">
                  No Posts
                </div>
                }
              </div>
              {/* Loader */}
              <div className="flex items-center justify-center">
                { loading 
                  ? <ImSpinner9 className="p-4 h-16 w-16 border-2 border-blue-900 rounded-full text-blue-900 animate-spin" />
                  : data.length < total
                  ? <button onClick={loadMore} className="px-5 py-3 font-semibold hover:bg-blue-900 hover:border-white hover:text-white border border-gray-300 rounded-lg">Load More</button>
                  : null }
              </div>

              <Pagination 
                itemsPerPage={itemsPerPage}
                totalItems={posts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
           </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context: any, num = 0 ) {
  const { slug = "" } = context.params
  // const query = `
  // {
  //   "posts": *[_type == "post" && $slug in categories[]->slug.current] | order(_id desc) { title,slug,"name": author->name,"avatar": author->image,"categories":categories[]->title, mainImage,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} }[$start..$end],
  //   "category": *[_type == "category" && $slug == slug.current] { title,slug}[0],
  //   "total": count(*[_type == "post" && $slug in categories[]->slug.current]) 
  // }
  // `
  const query = `
  {
    "posts": *[_type == "post" && $slug in categories[]->slug.current] | order(_id desc) { title,slug,"name": author->name,"avatar": author->image,"categories":categories[]->title, mainImage,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} },
    "category": *[_type == "category" && $slug == slug.current] { title,slug}[0],
    "total": count(*[_type == "post" && $slug in categories[]->slug.current]) 
  }
  `
  console.log(query, { slug,start:num,end:limit })
  try {
    const result = await sanityClient.fetch(query, { slug,start:num,end:limit })
    console.log(result)
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
        category: {},
        num
      }
    }
  }
    
}

export default index