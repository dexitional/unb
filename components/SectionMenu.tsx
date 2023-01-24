import React from 'react'
import NavPill from './NavPill'

function SectionMenu({data}: any) {
  return (
    <div className="z-10 w-full bg-white sm:rounded-b-3xl border-b shadow-lg shadow-blue-400/20">
      <div className="p-4 sm:p-0 sm:mx-auto sm:max-w-7xl sm:h-[4.3rem] flex flex-wrap gap-1 sm:flex-nowrap sm:flex-row sm:space-x-4 sm:items-center justify-center">
        { data?.map(( row:any, i:React.Key ) =>
          (<NavPill key={i} title={row.title} link={`/tag/${row.slug.current}`} />)
        )}

        <NavPill title="UCC News" link="ucc-news" />
        <NavPill title="UCC SRC" link="ucc-src" />
        <NavPill title="Events" link="events" />
        <NavPill title="Admissions" link="admissions" />
        <NavPill title="How To" link="howto" />
        <NavPill title="Announcements" link="announcements" />
        <NavPill title="Education" link="education" />
        <NavPill title="Lifestyle" link="lifestyle" />
        <NavPill title="Tech" link="Tech" />
      </div>
    </div>
  )
}

export default SectionMenu