import React from 'react'

function Pagination({ itemsPerPage, totalItems, paginate, currentPage }: any ) {
  const pageNumbers = []
  for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
     pageNumbers.push(i)
  }

  return (
    <nav className="w-full flex items-center justify-start">
        <div className="w-full flex space-x-1">
            {pageNumbers.map((number) => (
               <button key={number} onClick={()=> paginate(number)} className={number === currentPage ? `px-3 py-1 bg-blue-900 text-white border border-slate-200 shadow-md rounded`:`px-3 py-1 bg-slate-100 border border-slate-200 shadow-md rounded`}>{number}</button>
            ))}
        </div>
    </nav>
  )
}

export default Pagination