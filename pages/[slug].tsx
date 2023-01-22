import Image from 'next/image'
import React from 'react'
import Layout from '../components/Layout'
import Divider from '../components/Divider'
import FeatureImg from '../public/logo.png'
import Socials from '../components/Socials'
import ArticleCats from '../components/ArticleCats'
import ArticleAd from '../components/ArticleAd'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'
import Head from 'next/head'
import PortableText from 'react-portable-text'

interface Props {
  data: any,
  post: Post,
  recent: [Post]
}

function index({ post,recent }: Props) {
  const siteUrl = `https://uccnoticeboard.info`
  return (
    <>
    <Head>
      <title>UNB | {post?.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="HandheldFriendly" content="true" />
      <meta property="og:title" content={post?.title} />
      <meta property="og:image" content={post?.mainImage && urlFor(post?.mainImage).width(600).url()} />
      <meta property="og:type" content="profile.image" />
      <meta property="og:url" content={`${siteUrl}/${post?.slug.current}`} />
      {/* <meta name="description" content="Free Web tutorials" /> */}
      <meta name="keywords" content={post?.keyword} />
      <meta name="author" content={post?.name} />
    </Head>
    <Layout>
      <div className="w-full min-h-screen bg-[#f9fafe] snap-y snap-mandatory">
        <div className="px-5 sm:py-20  w-full sm:mx-auto sm:max-w-7xl flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-10">
           <div className="w-[13%]"></div>
           {/* Article Content */}
           <div className="flex-1 flex flex-col items-center space-y-8">
               <div className="flex flex-wrap sm:space-x-10 sm:items-center">
                {post?.categories?.map((r:any, i:React.Key) =>(<span key={i} className="my-1 px-4 py-2 rounded-md bg-[#ffc001] font-bold font-jetbrains">{r.title}</span>))}
               </div>
               <h1 className="text-3xl sm:text-5xl text-gray-700  font-bold font-epilogue sm:leading-[3.5rem]">{post?.title}</h1>
               <div className="hidden">
                  <div className="flex space-x-4 items-center">
                     <span className="w-12 h-12 bg-slate-100 border-2 rounded-full"></span>
                     <span className="text-blue-600">Editor</span>
                  </div>
               </div>
               <div className="my-6 aspect-video relative w-full flex items-center justify-center rounded-lg overflow-hidden">
                   <Image src={post?.mainImage ? urlFor(post?.mainImage).height(480).url() : FeatureImg } alt="Featured Image" height={300} width={640} style={{ height:'auto', width:'100%', objectFit:'cover'}} className="w-full rounded-lg"/>
               </div>
              
               { post?.body && 
                    <article className="w-full prose lg:prose-xl">
                        <PortableText 
                            className={`text-lg text-[#4d5b7c] [&>a]:border-b [&>a]:border-[#0069ff] [&>a]:text-[#0069ff] [&>a]:decoration`}
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                            content={post?.body}
                            serializers={{
                              h1: (props:any) => (
                                <h1 className="text-xl font-bold my-4" {...props}/>
                              ),
                              h2: (props:any) => (
                                <h2 className="text-lg font-bold my-4" {...props}/>
                              ),
                              p: ({children}: any) => (
                                <p className="my-20">{children}</p>
                              ),
                              a: ({children,...rest}: any) => (
                                <a {...rest} className="border-b border-[#0069ff] text-[#0069ff] decoration-none">{children}</a>
                              ),
                            // image:  ({children}:any) => (
                              //  <div className="my-3">{children}</div>
                            // ),
                              li: ({children}: any) => (
                                <li className="ml-4 list-disc">{children}</li>
                              ),
                              ul: ({children}:any) => (
                                 <ul className="my-3 pl-5 leading-9">{children}</ul>
                              ),
                            }}
                        />
                    </article> }
            
           </div>

           {/* SideBar */}
           <div className="px-5 sm:px-0 w-full sm:w-[21%] ">
               {/* Social Share */}
               <div className="flex flex-col space-y-3">
                  <h4 className="font-jetbrains text-lg font-semibold text-gray-600">Share</h4>
                  <Socials title={post?.title} slug={post?.slug?.current} siteUrl={siteUrl} />
                  <Divider/>
                  <ArticleCats data={post?.categories}/>
                  <ArticleAd />
                </div>
           </div>
          
           
        </div>
      </div>
    </Layout>
    </>
  )
}




interface Props {
  slug: string,
  context: any
}

const query = `
{
  "post": *[_type == "post" && slug.current == $slug][0]{title,slug,"name": author->name,"avatar": author->image,"categories": categories[]->{title,slug},mainImage,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} },
  "recent": *[_type == "post"] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title,slug},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} } [0...9]
}
  `

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug: Props) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const result = await sanityClient.fetch(query, { slug })
  return {
    props: {
      post: result?.post,
      recent: result?.recent
    },
    revalidate: 600,
  }
}

export default index