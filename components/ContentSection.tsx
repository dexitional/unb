import React from 'react'
import NewsCard from './NewsCard'
import { HiOutlineArrowNarrowLeft,HiOutlineArrowNarrowRight } from 'react-icons/hi'
import NewsIndexCard from './NewsIndexCard'


function ContentSection({ data }: any) {
  const mdata = [
    { 
        slug: 'ucc-news',
        category: 'UCC News',
        content: [
            { title:'How to Connect UCC Wifi or Eduroam on Android Phone', category:'UCC News', author:'Yancey Spruill', date:'December 29, 2022', read:'3 min', link:'/ucc-news' },
            { title:'How to Connect UCC Wifi or Eduroam on PC or Laptop', category:'News', author:'Miguel Blay', date:'December 30, 2022', read:'3 min', link:'/news' },
        ]
    },
    { 
        slug: 'ucc-src',
        category: 'UCC SRC',
        content: [
            { title:'How to Connect UCC Wifi or Eduroam on Android Phone', category:'UCC News', author:'Yancey Spruill', date:'December 29, 2022', read:'3 min', link:'/ucc-news' },
            { title:'How to Connect UCC Wifi or Eduroam on PC or Laptop', category:'News', author:'Miguel Blay', date:'December 30, 2022', read:'3 min', link:'/news' },
        ]
    }, 
    { 
        slug: 'events',
        category: 'Events',
        content: [
            { title:'How to Connect UCC Wifi or Eduroam on Android Phone', category:'UCC News', author:'Yancey Spruill', date:'December 29, 2022', read:'3 min', link:'/ucc-news' },
            { title:'How to Connect UCC Wifi or Eduroam on PC or Laptop', category:'News', author:'Miguel Blay', date:'December 30, 2022', read:'3 min', link:'/news' },
        ]
    },
    { 
        slug: 'admissions',
        category: 'Admissions',
        content: [
            { title:'How to Connect UCC Wifi or Eduroam on Android Phone', category:'UCC News', author:'Yancey Spruill', date:'December 29, 2022', read:'3 min', link:'/ucc-news' },
            { title:'How to Connect UCC Wifi or Eduroam on PC or Laptop', category:'News', author:'Miguel Blay', date:'December 30, 2022', read:'3 min', link:'/news' },
        ]
    },
    { 
        slug: 'howto',
        category: 'How To',
        content: [
            { title:'How to Connect UCC Wifi or Eduroam on Android Phone', category:'UCC News', author:'Yancey Spruill', date:'December 29, 2022', read:'3 min', link:'/ucc-news' },
            { title:'How to Connect UCC Wifi or Eduroam on PC or Laptop', category:'News', author:'Miguel Blay', date:'December 30, 2022', read:'3 min', link:'/news' },
        ]
    },
    { 
        slug: 'announcements',
        category: 'Announcements',
        content: [
            { title:'How to Connect UCC Wifi or Eduroam on Android Phone', category:'UCC News', author:'Yancey Spruill', date:'December 29, 2022', read:'3 min', link:'/ucc-news' },
            { title:'How to Connect UCC Wifi or Eduroam on PC or Laptop', category:'News', author:'Miguel Blay', date:'December 30, 2022', read:'3 min', link:'/news' },
        ]
    },
    { 
        slug: 'education',
        category: 'Education',
        content: [
            { title:'How to Connect UCC Wifi or Eduroam on Android Phone', category:'UCC News', author:'Yancey Spruill', date:'December 29, 2022', read:'3 min', link:'/ucc-news' },
            { title:'How to Connect UCC Wifi or Eduroam on PC or Laptop', category:'News', author:'Miguel Blay', date:'December 30, 2022', read:'3 min', link:'/news' },
        ]
    },
    { 
        slug: 'lifestyle',
        category: 'Lifestyle',
        content: [
            { title:'How to Connect UCC Wifi or Eduroam on Android Phone', category:'UCC News', author:'Yancey Spruill', date:'December 29, 2022', read:'3 min', link:'/ucc-news' },
            { title:'How to Connect UCC Wifi or Eduroam on PC or Laptop', category:'News', author:'Miguel Blay', date:'December 30, 2022', read:'3 min', link:'/news' },
        ]
    }
  ]
  return (
    <div className="pb-20">
    { mdata?.map((row:any,i:React.Key) => (
    <div key={i} id={row.slug} className="my-6 flex flex-col space-y-20 snap-start">
      <div className="mx-5 sm:mx-16 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="w-full flex items-center justify-between sm:space-x-4 ">
                <h3 className="text-2xl sm:text-[2rem] font-bold font-epilogue">{row.category}</h3>
                <div className="px-3 sm:px-5 py-1 sm:py-2 rounded-lg border border-gray-300/90 text-sm sm:text-base font-semibold">View All</div>
            </div>
            <div className="flex items-center space-x-4">
                <HiOutlineArrowNarrowLeft className="py-2 px-2 h-10 w-12 rounded-lg bg-slate-100 text-gray-300" />
                <HiOutlineArrowNarrowRight className="py-2 px-2 h-10 w-12 rounded-lg bg-slate-200 text-gray-500" />
            </div>
        </div>
        <div className="pb-10 flex items-center space-x-8 snap-x snap-mandatory overflow-x-scroll scrollbar-hide">
            { row.content?.map((r:any,j:React.Key) => <NewsIndexCard key={j} title={r.title} category={r.category} author={r.author} date={r.date} read={`${r.read} read`} link="/"/>)}
        </div>
      </div>
    </div>
    ))}
    </div>
  )
}

export default ContentSection